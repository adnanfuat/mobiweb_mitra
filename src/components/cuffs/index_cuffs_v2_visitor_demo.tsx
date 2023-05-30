// import {localeStatic} from "../../../src/components/constants/localestatic";

import s from "./index_cuffs_v2_visitor_demo.module.css"
import Link from "next/link";


export const  Index_Cuffs_V2_Visitor_Demo = ({props}) => {

    let {cuffs, locale} = props;

    cuffs=[cuffs?.[0]] // demoda sadece birinci yeterli...                   
    
    let firstcufffile= cuffs?.[0]?.firstcufffile;
    let filename=firstcufffile?.bigdata?.filename;
    let folder=firstcufffile?.bigdata?.folder;
    let imgpath=process.env.NEXT_PUBLIC_IMGSOURCE+"/"+folder+"/"+filename
    let link =""; // Bunu daha sonra çek
         
         return (
               <div className={s.imgwr} >
                        <Link href={link}  >
                            {/* <Image src={images[0]?.src} width={755} height={440} alt={images[0]?.title_tr ?? "..."} loading="eager"  /> */}
                            <img src={imgpath} alt={cuffs[0]?.title_tr ?? "..."}  width="100%" height={"auto"} />
                        </Link>
               </div>                                                                                                  
         );
     }