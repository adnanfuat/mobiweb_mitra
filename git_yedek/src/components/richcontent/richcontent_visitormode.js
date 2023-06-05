import styles from "./advert_visitormode.module.css"

import { Advert_VisitorMode_Image } from "@/components/commonnew/richcontent/advert_visitormode_image";

import { Advert_VisitorMode_Info } from "@/components/commonnew/richcontent/advert_visitormode_info";
import { Advert_VisitorMode_Contact } from "@/components/commonnew/richcontent/advert_visitormode_contact";

import {_userState} from "@/constants/states/user"


export const Advert_VisitorMode = ({props}) => {

  let {advert} = props;
  let {getfulladdress} =  advert ?? {};

  let {country, city, district, subdistrict} = getfulladdress ?? { };

  // console.log("advert;;;;;;;;; ", getfulladdress);

  return (
    <div className={styles.main_container}>
    {/* <Advert_Head_VisitorMode props={{name:advert?.title_tr}}/> */}
    
    <div className={styles.header}> 
            <div>{advert?.title_tr} </div>
            <div className={styles.header_subtext}>
            
                {subdistrict?.title_tr ? `${subdistrict?.title_tr} /` : ""} {district?.title_tr ? `${district?.title_tr} /` : ""} {city?.title_tr ? `${city?.title_tr} /` : ""} {country?.title_tr} 
                
              
            </div>
    </div>

            <div  className={styles.grid_container}>                         
                  <div className={styles.imagearea}> <Advert_VisitorMode_Image  props={{advert}}/> </div>
                  <div className={styles.info}><Advert_VisitorMode_Info props={{advert}}/></div>
                  {/* <div className={styles.info}><Advert_VisitorMode_Info props={{advert}}/></div> */}
                  <div  className={styles.contact}> <Advert_VisitorMode_Contact props={{advert}}/> </div> 
            </div>
</div> 
  )
}
