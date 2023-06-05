"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  // Index_Cuffs için...
import { Carousel } from 'react-responsive-carousel';
import {localeStatic} from "../../../src/constants/localestatic";

import Link from "next/link";
import s from "./index_cuffs_v2_visitor_real.module.css"


export const  Index_Cuffs_V2_Visitor_Real = ({props}) => {

      let {cuffs, locale} = props;
     
       cuffs=cuffs?.map(cuff=>
         {                       
            let firstcufffile= cuff?.firstcufffile;
            let filename=firstcufffile?.bigdata?.filename;
            let folder=firstcufffile?.bigdata?.folder;
            let imgpath=process.env.NEXT_PUBLIC_IMGSOURCE+"/"+folder+"/"+filename
            let link =""; // Bunu daha sonra çek

            return cuff={imgpath, link}
            
         }     
     );   

//      console.log("cufffs: ", cuffs);
          
         return (<div className={s.imgwr} >
                        <Carousel showThumbs={false} showStatus={true}>
                              {cuffs?.map((item, i) => (
                                    <Link href={item?.link}  key={`cuff-l-${i}`}>
                                          <div key={`cuff-${i}`} className={s.cuffitem}>
                                                <img src={item?.imgpath} />
                                                {/* {item?.img_filename && <p className="legend">{item?.img_filename}</p>} */}
                                          </div>
                                    </Link>
                              ))}
                        </Carousel>       
               </div>   
         );
     }