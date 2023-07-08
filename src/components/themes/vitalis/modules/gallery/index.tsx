import Image from 'next/image'
import s from "./index.module.css"    
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


 export   const Gallery = () => {
    return (

<div className={s.gallerysMainWr}>

        <div className={s.title}> Galeri </div>
        

        <div className={s.gallerysWr}>

              <div className={s.galleryWr}>                   
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
              </div>                                                                                                  

              
        </div>
                                                                                   

      </div>
    )
  }
  
  
  