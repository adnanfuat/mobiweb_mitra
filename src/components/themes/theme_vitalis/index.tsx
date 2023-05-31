
import s from "./index.module.css"
import HeaderComp from "./header"
import FooterComp from "@/components/footercomp"
import Image from 'next/image'
import styles from './page.module.css'
import {Index_Cuffs_V2_Visitor} from "./cuffs/index_cuffs_v2_visitor"
import WebData from "@/components/utils/webdata"
import DictionaryData from "@/components/utils/dictionarydata"
import { localeStatic } from "@/constants/localestatic"
import Estates from "@/components/estates/estates";
import {DesignLayout_Theme_Vitalis} from "./layouts/designlayout_theme_vitalis"

import { Inter } from 'next/font/google'
import { url } from "inspector"
const inter = Inter({
        variable: '--inter-font',
        subsets:["latin","latin-ext"],
        weight:["100", "200","300","400","500","600", "700","800","900"]
      })


export const Theme_Vitalis = async (props) => {

    let {logo, params, dictionary, webdata, cuffs} = props ?? {};

  
    return (
                        // <div  className={`${s.shell} ${inter.variable}`}>  
                        <DesignLayout_Theme_Vitalis {...props}>
                        
                        <div className={s.shell}>

                                                {/* <HeaderComp logo={logo} params={params} dictionary={dictionary} webdata={webdata}  sidepadding={42} topbottom={5}/> */}
                                                        
                                
                                                          

                                                                <div className={s.cuffs}> <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/> </div>                   
                                                                
                                                                <div className={s.estates}>
                                                                                        <Estates adverts={webdata?.richcontents?.filter(a=>a?.bigbigparent_key=="1668310884")} params={params} />                                
                                                                </div>

                                                                        
                                                        
                                
                                                        

                        </div>

                        
                        </DesignLayout_Theme_Vitalis>
                        
                                             


                        // </div>          
                )
  }
  
  
  
  