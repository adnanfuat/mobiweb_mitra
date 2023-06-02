"use client"
import s from "./index.module.css"
 import HeaderComp from "@/themes/theme_mitra/header/headercomp"
import FooterComp from "@/components/footercomp"
import {siteProxy} from "@/constants/siteproxy"
import Image from 'next/image'

import styles from './page.module.css'
import {Index_Cuffs_V2_Visitor} from "@/components/cuffs/index_cuffs_v2_visitor"
import { localeStatic } from "@/constants/localestatic"
import Estates from "@/components/estates/estates";

import { Inter } from 'next/font/google'
const inter = Inter({
        variable: '--inter-font',
        subsets:["latin","latin-ext"],
        weight:["100", "200","300","400","500","600", "700","800","900"]
      })

export const Theme_Mitra = async (props) => {

    let {logo, params, dictionary, webdata, cuffs, session} = props ?? {};

    let estates = webdata?.richcontents?.filter(a=>a?.bigbigparent_key=="1668310884") ?? [];

    
  
    return (
        <html>   
        <head>
          <title>My page ____</title>
        </head>       
              <body onMouseOver={()=>{ siteProxy.interaction=true}} onTouchStart={()=>{ siteProxy.interaction=true}}>
                <div style={{position:"relative"}}>                 
                {/* <HeaderComp logo={logo} params={params} dictionary={dictionary} webdata={webdata} position="absolute" session={session} sidepadding={42} topbottom={5}/>   */}
                        <div className={s.main}>                                                                                      
                                                {/* <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/>              */}
                                                {/* asdas : {JSON.stringify(props)} */}
                                                 {/* <Estates adverts={estates} params={params}   dictionary={dictionary}/>                                           */}
                        </div>   
                        <div className={s.footer}><FooterComp logo={logo}/></div>             
                </div>
              </body>
              </html>
    
                )
  }
  
  
  
  