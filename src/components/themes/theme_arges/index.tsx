"use client"
import s from "./index.module.css"
import HeaderComp from "./header/index"
import FooterComp from "@/components/footercomp"
import Image from 'next/image'

// import styles from './page.module.css'
import {Index_Cuffs_V2_Visitor} from "@/components/cuffs/index_cuffs_v2_visitor"

import Estates from "@/components/estates/estates";

import { Inter, Poppins } from 'next/font/google'
const inter = Inter({
        variable: '--inter-font',
        subsets:["latin","latin-ext"],
        weight:["100", "200","300","400","500","600", "700","800","900"]
      })

const poppins = Poppins({
        variable: '--poppins-font',
        subsets:["latin","latin-ext"],
        weight:["100", "200","300","400","500","600", "700","800","900"]
      })


export const Theme_Arges = async (props) => {

    let {logo, params, dictionary, webdata, cuffs} = props ?? {};
  
    return (  <html>   
        <head>
          <title>My page ____</title>
        </head>       
              <body onMouseOver={()=>{ siteProxy.interaction=true}} onTouchStart={()=>{ siteProxy.interaction=true}}>
              <div style={{position:"relative"}} className={`${poppins.variable}`}>

{/* <head>
                <title>My page assa</title>
</head>        */}


                                  
                <HeaderComp logo={logo} params={params} dictionary={dictionary} webdata={webdata} position="absolute"  sidepadding={42} topbottom={5}/>

                <div className={s.main}>                                                                                              
                                        <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/>             
                                        {/* asdas : {JSON.stringify(props)} */}
                                        <Estates adverts={webdata?.richcontents?.filter(a=>a?.bigbigparent_key=="1668310884")} params={params} sidepadding={42} />                                                
                </div> 

                <div className={s.footer}><FooterComp logo={logo}/></div>             

</div>


                </body>
                </html>          
    

            )
  }
  
  
  
  