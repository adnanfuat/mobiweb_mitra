
"use client"
import Image from "next/image";
import s from "./s.module.css"
import dynamic from 'next/dynamic'
import {siteProxy} from "@/constants/siteproxy"
 import { useSnapshot } from 'valtio';

 const Content_Visitor_Image_Dynamic = dynamic(() => import("./content_visitor_image_dynamic"), { loading: () => <div className={s.content_visitor_image_dynamic_loading}><div>Yükleniyor</div></div> } );  

    export const Content_Visitor_Image = (props) => {

        let {content, interaction, fileObjects} =   props;      
        let content_properties     =   content?.bigdata?.history?.[0]?.info?.properties; // İlana atanmış özellikler 
        let siteState              =   useSnapshot(siteProxy);

        // return (<div>{JSON.stringify(props)}</div>)
          
        return (
          <div className={s.content_visitor_image_wr}>          
                {/* {siteState.interaction && <Content_Visitor_Image_Dynamic content={content}/> } */}
                {<Content_Visitor_Image_Standart {...props}/> }
          </div>
        )
      }


      

    const Content_Visitor_Image_Standart = (props) => {

        let {content, fileObjects} = props;

        let fileObject=fileObjects?.find(f=>f?.slug_tr==content?.files_tr?.[0]);

        let img =!!fileObject ? fileObject?.bigdata?.folder + "/" + fileObject?.bigdata?.filename : undefined
            
        //let img = content?.files?.[0] ? `${process.env.NEXT_PUBLIC_IMGSOURCE}/${content?.img_tr}` :"/images/common/sr.jpg";
  
        // return (<div>{JSON.stringify(content)}</div>)
        // return (<div>{JSON.stringify(fileObjects[0])}ASSA {img} --</div>)
        return(
            <div className={s.imagestandartwr} style={{ backgroundImage: `url(${img})`, backgroundSize:"cover" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>
                         <Image src={`${process.env.NEXT_PUBLIC_IMGSOURCE}/${img}`} fill alt={content?.title_tr}/> 
            </div>
        )
  
      }
  