
"use client"
import s from "./s.module.css"
import dynamic from 'next/dynamic'
import {siteProxy} from "@/constants/siteproxy"
 import { useSnapshot } from 'valtio';

 const Advert_Visitor_Image_Dynamic = dynamic(() => import("./advert_visitor_image_dynamic"), { loading: () => <div className={s.advert_visitor_image_dynamic_loading}><div>Yükleniyor</div></div> } );  

    export const Advert_Visitor_Image = (props) => {

        let {advert, interaction} = props;      
        let advert_properties = advert?.bigdata?.history?.[0]?.info?.properties; // İlana atanmış özellikler 
        let siteState = useSnapshot(siteProxy);
  
        return (
          <div className={s.advert_visitor_image_wr}>          
                {/* {siteState.interaction && <Advert_Visitor_Image_Dynamic advert={advert}/> } */}
                {<Advert_Visitor_Image_Standart advert={advert}/> }
          </div>
        )
      }


      

    const Advert_Visitor_Image_Standart = (props) => {

        let {advert} = props;
            
        let img = advert?.img_tr ? `${process.env.NEXT_PUBLIC_IMGSOURCE}/${advert?.img_tr}` :"/images/common/sr.jpg";
  
        return(
            <div className={s.imagestandartwr} style={{ backgroundImage: `url(${img})`, backgroundSize:"cover" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>
                          {/* <Image src={`${process.env.NEXT_PUBLIC_IMGSOURCE}/${advert?.img_tr}`} fill alt={advert?.slug_tr}/>  */}
            </div>
        )
  
      }
  