
"use client"
import Image from "next/image";
import s from "./s.module.css"
import dynamic from 'next/dynamic'
import {siteProxy} from "@/constants/siteproxy"
 import { useSnapshot } from 'valtio';

 const Content_Visitor_Image_Dynamic = dynamic(() => import("./content_visitor_image_dynamic"), { loading: () => <div className={s.content_visitor_image_dynamic_loading}><div>Yükleniyor</div></div> } );  

    export const Content_Visitor_MainText = (props) => {

        let {content, interaction, fileObjects} =   props;      
        let content_properties     =   content?.bigdata?.history?.[0]?.info?.properties; // İlana atanmış özellikler 
        let siteState              =   useSnapshot(siteProxy);

        
          
        return (
          <div className={s.content_visitor_image_wr}>          
                Yazıyı buraya çek!!!!
          </div>
        )
      }


      
