import styles from "./advert_adminmode_image.module.css"
import { useState } from "react";
import {imgs_source} from "@/constants/imgs_source"

export const Advert_VisitorMode_Image = ({props}) => {

  let {advert} =props ?? {}



  let imgs_fieldvalue =  advert?.bigdata?.history?.[0]?.lang?.tr?.files;
  
  const [imgIndex, setimg] = useState(0)
  
  const changeImg = () => {
    setimg(old=>{
       
        if (  old+1 <=  imgs_fieldvalue?.length-1   ) {

            return old+1
          } else
          {
            return 0 //başa dön
          }
          
       
    })
  }

  let relatedimg_key=imgs_fieldvalue?.[imgIndex];

  let relatedimg=advert?.getconnectedfiles?.find(item=>item?.slug_tr==relatedimg_key);

  let newimg = `${imgs_source}/${relatedimg?.bigdata?.folder}/${relatedimg?.bigdata?.filename}`


  return (
    <div className={styles.main_container}>
      {
        relatedimg ?
        <div className={styles.img_container} onClick={changeImg} style={{backgroundImage:`url("${newimg}")`}}>     </div>
        :""
      }
    </div>
  )
}


