import Image from 'next/image'
import s from "./index.module.css"    
//import 'photoswipe/dist/photoswipe.css'
//import { Gallery, Item } from 'react-photoswipe-gallery'
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'
// import { Gallery } from "react-grid-gallery";
// import ResponsiveGallery from 'react-responsive-gallery';



 export  const MyGallery = (props) => {
  
    let {fileObjects, gallery, module} = props ?? {};

    let fileList=[];
  
    gallery?.map(a=> {
      fileList=[...fileList, ...(a?.files_tr ?? []) ]
    })



    const photos = [
      { src: "/themes/vitalis/bant.jpg", width: 800, height: 600 },
      { src: "/themes/vitalis/bant.jpg", width: 1600, height: 900 }
  ];


    return (

<div className={s.gallerysMainWr}>

        <div className={s.title}>   {module?.data?.[0]?.data_tr ?? "Galeri"}   </div>
        
        {/* {  JSON.stringify(gallery?.map(a=>))  } */}




        <div className={s.gallerysWr}>
        

          {
                fileList?.map((pro, index)=> {

                                    let fileObject=fileObjects?.find(   a=> a?.slug_tr==pro  ); // İlk resim göstermek yeterli.. Ama birden fazla resim eklenebiliyor... Gerekirse diğer resimleri de çekeriz..
                                    // let link = `/c/${pro?.slug_tr}/${pro?.id}`;

                                    let bgImg=`${process.env.NEXT_PUBLIC_IMGSOURCE}/${fileObject?.bigdata?.folder}/${fileObject?.bigdata?.filename}`


                                    return <div className={s.galleryWr} style={{backgroundImage:`url(${bgImg})`, aspectRatio:"4/3", backgroundSize:"cover" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}} key={index}>                   
                                                      {/* <Zoom> */}
                                                          {/* <Image src={"/themes/vitalis/gallery1.jpg"} width={300} height={225} className={s.imgstyle}/>                                  */}
                                                          {/* <Image src={ `${process.env.NEXT_PUBLIC_IMGSOURCE}/${fileObject?.bigdata?.folder}/${fileObject?.bigdata?.filename}`  ?? "/themes/vitalis/gallery1.jpg"} width={300} height={225} className={s.imgstyle}/>                                  */}
                                                      {/* </Zoom> */}

                                    {/* <div className={s.productWr}> 
                                        <div className={s.productTitle}> {pro?.title_tr} </div>
                                        <Link href={link} >
                                        <Image src={ `${process.env.NEXT_PUBLIC_IMGSOURCE}/${fileObject?.bigdata?.folder}/${fileObject?.bigdata?.filename}`  ?? "/themes/vitalis/product1.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
                                        </Link>
                                    </div> */}
                                                      


                                                      </div>                                                    

                                                      

                                        


                })

            }

              {/* <div className={s.galleryWr}>                   
              <Zoom>
                  <Image src={"/themes/vitalis/gallery1.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
              </Zoom>
              </div>

              <div className={s.galleryWr}>                   
              <Zoom><Image src={"/themes/vitalis/gallery2.jpg"} width={300} height={225} className={s.imgstyle}/></Zoom>
              </div>

              <div className={s.galleryWr}>                   
              <Zoom><Image src={"/themes/vitalis/gallery3.jpg"} width={300} height={225} className={s.imgstyle}/></Zoom>                                 
              </div>

              <div className={s.galleryWr}>                   
              <Zoom><Image src={"/themes/vitalis/gallery4.jpg"} width={300} height={225} className={s.imgstyle}/></Zoom>                                 
              </div>

              <div className={s.galleryWr}>                   
              <Zoom> <Image src={"/themes/vitalis/gallery5.jpg"} width={300} height={225} className={s.imgstyle}/></Zoom>                                 
              </div>

              <div className={s.galleryWr}>                   
              <Zoom><Image src={"/themes/vitalis/gallery6.jpg"} width={300} height={225} className={s.imgstyle}/></Zoom>                                 
              </div>

              <div className={s.galleryWr}>                   
              <Zoom><Image src={"/themes/vitalis/gallery7.jpg"} width={300} height={225} className={s.imgstyle}/></Zoom>                                 
              </div>

              <div className={s.galleryWr}>                   
              <Zoom><Image src={"/themes/vitalis/gallery8.jpg"} width={300} height={225} className={s.imgstyle}/></Zoom>                                 
              </div>                                                                                                   */}

              
        </div>
                                                                                   

      </div>
    )
  }
  
  
  