
import s from "./index.module.css"

import {Index_Cuffs_V2_Visitor} from "./cuffs/index_cuffs_v2_visitor"
import FooterComp from "./footer/footercomp"
import Estates from "@/components/estates/estates";
import {DesignLayout_Vitalis} from "./layouts/designlayout_vitalis"

// import { Inter } from 'next/font/google'
import HeaderComp from "./header";

// const inter = Inter({
//         variable: '--inter-font',
//         subsets:["latin","latin-ext"],
//         weight:["100", "200","300","400","500","600", "700","800","900"]
//       })


export const Vitalis =  (props) => {

    let {logo, params, dictionary, webdata, cuffs} = props ?? {};

    // return <div>asdasdsa</div>
  
    return (                        

        <div className={s.mainwr} style={{backgroundImage:"url(/themes/vitalis/bg.png)", backgroundRepeat:"no-repeat"}}>

        <div className={s.insidewr}>

                    {/* {title ? <div className={`${s.title} ${inter.variable}`} style={{backgroundColor:"white"}}>{title ? title : "Başlık atanmamış"}</div> : <div></div>} */}                    
                    {/* { props?.children }  */}                    
                                                        <HeaderComp logo={logo} params={params} dictionary={dictionary} webdata={webdata}  sidepadding={42} topbottom={5}/> 
                                                                
                                        
                                                                

                                                                        <div className={s.cuffs}> <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/> </div>                    
                                                                        
                                                                        <div className={s.estates}>
                                                                                {/* <Estates adverts={webdata?.richcontents?.filter(a=>a?.bigbigparent_key=="1668310884")} params={params} /> */}
                                                                        </div> 

                                                                                                                                                
                                                                
                                                   
        </div>
        
        <div className={s.footer}><FooterComp logo={logo}/></div>
</div>

                        
                        
                                             


                        
                )
  }
  
  
  
  