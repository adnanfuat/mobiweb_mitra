import Image from 'next/image'
import s from "./index.module.css"    
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


 export   const Gallery = (props) => {
  
    let {fileObjects, gallery, module} = props ?? {};

    return (

<div className={s.gallerysMainWr}>

        <div className={s.title}>   {module?.data?.[0]?.data_tr ?? "Galeri"}   </div>
        

        <div className={s.gallerysWr}>

          {
                gallery?.map((pro, index)=> {

                                    let fileObject=fileObjects?.find(   a=> a?.slug_tr==pro?.files_tr?.[0]   ); // İlk resim göstermek yeterli.. Ama birden fazla resim eklenebiliyor... Gerekirse diğer resimleri de çekeriz..
                                    let link = `/c/${pro?.slug_tr}/${pro?.id}`;
                                    return <div key={index}>
                                                    {/* {JSON.stringify(pro?.files_tr)} */}

                                                    {/* <div className={s.productWr}> 
                                                        <div className={s.productTitle}> {pro?.title_tr} </div>
                                                        <Link href={link} >
                                                        <Image src={ `${process.env.NEXT_PUBLIC_IMGSOURCE}/${fileObject?.bigdata?.folder}/${fileObject?.bigdata?.filename}`  ?? "/themes/vitalis/product1.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
                                                        </Link>
                                                    </div> */}

                                                      <div className={s.galleryWr}>                   
                                                      <Zoom>
                                                          <Image src={"/themes/vitalis/gallery1.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
                                                      </Zoom>
                                                      </div>                                                    

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
  
  
  