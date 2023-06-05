
import { RiArrowRightFill, RiArrowLeftFill } from "react-icons/ri";

import s from "./s.module.css";
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export default function Advert_Visitor_Image_Dynamic  (props) {
  let {advert} = props;
  
  
  let fileslugs = advert?.bigdata?.history[0]?.lang?.tr?.files;
  let connectedfiles = advert?.getconnectedfiles;  
  // console.log("advert::::::-----", fileslugs);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true}, [Autoplay()] )


  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();    
  }, [emblaApi])

  return (
    
      <div className={`embla ${s.myembla}`}>

      <div className="embla__viewport"  ref={emblaRef} >
        <div className="embla__container" >
          
          {fileslugs?.map((slug, i)=>{
                    
                    let file=connectedfiles?.find(a=>a?.slug_tr==slug); // Dosya Objeleri aradaın ilgili dosya objesini al

                    return <div className="embla__slide" onClick={()=> emblaApi.scrollNext()} key={i}><MiniImg slug={slug} file={file}/></div>

          })}
          
        </div>
      </div>

          {fileslugs?.length>1 && 
            <div style={buttonswr}>
                <button className="embla__prev" onClick={scrollPrev}>
                  <RiArrowLeftFill/>
                </button>

                {/* <button disabled={true}></button> */}

                <button className="embla__next" onClick={scrollNext}>
                  <RiArrowRightFill/>
                </button>
          </div>}

    </div>

  )
  
}



const MiniImg = (props) => {

  let {advert, slug, file} = props;

  // console.log("file:::::::", file)

  return ( 
            <div className={s.imagestandartwr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${file?.bigdata?.folder}/${file?.bigdata?.filename}`})`, backgroundSize:"cover" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>
                            
            
            </div> 
        )
}





const buttonswr = {
  display:"flex",
  position:"absolute",
  right:10,
  top:10,
  gap:10,
}