
"use client"
import Image from "next/image";
import s from "./s.module.css"
import dynamic from 'next/dynamic'
import {siteProxy} from "@/constants/siteproxy"
 import { useSnapshot } from 'valtio';



    export const Content_Visitor_MainText = (props) => {

        let {content, interaction, fileObjects} =   props;      
        let content_properties     =   content?.bigdata?.history?.[0]?.info?.properties; // İlana atanmış özellikler 
        let siteState              =   useSnapshot(siteProxy);

       let maintext_tr=content?.maintext_tr;
          
        return (
          <div className={s.content_visitor_image_wr}>          
                {maintext_tr}
          </div>
        )
      }


      
