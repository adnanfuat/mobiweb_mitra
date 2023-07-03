
import s from "./index.module.css"
 import HeaderComp from "@/themes/mitra/header/headercomp"
 import {Zigzag} from "@/themes/mitra/modules/zigzag"
// import FooterComp from "./footer/footercomp"
import {siteProxy} from "@/constants/siteproxy"
import Image from 'next/image'

import styles from './page.module.css'
import {Index_Cuffs_V2_Visitor} from "@/components/cuffs/index_cuffs_v2_visitor"
import { localeStatic } from "@/constants/localestatic"
import Estates from "@/components/estates/estates";

import { Archivo_Black } from 'next/font/google'
// import { DesignLayout_Mitra_BackPages } from "./layouts/designlayout_mitra_backpages"
import { Inter, Exo_2 } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({
  variable: '--inter-font',
  subsets:["latin","latin-ext"],
  weight:["100", "200","300","400","500","600", "700","800","900"]
})


const exo2 = Exo_2({
  variable: '--exo2-font',
  subsets:["latin","latin-ext"],
  weight:["100", "200","300","400","500","600", "700","800","900"]
})



export const Proweb =  (props) => {

    let {logo, params, dictionary, webdata, cuffs, session} = props ?? {};
    

    return (
            <div className={`${s.shell} ${exo2.className}`}>   

                                      <Head>
                                          <link rel="icon" href="/themes/mitra/fav.png" sizes="any" />
                                          <meta name="viewport" content="initial-scale=1, width=device-width" />
                                          <meta name="Googlebot" content="index, follow" />
                                          <meta name="robots" content="index, follow" />
                                          <meta name="Robots" content="all" />              
                                          <title>PROWEB Mühendislik İnternet Teknolojileri Kariyer San. Tic. Ltd. Şti. 2023</title>
                                      </Head>              

                                      <div className={s.mainwr}>  
                                      
                                                  {/* <HeaderComp logo={logo} params={params} dictionary={dictionary} webdata={webdata} session={session}/>                                     */}
                                                  <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/>             
                                                                                                    
                                                  <div className={s.main}>                                                     
                                                      ASDASDDSA
                                                  </div>
                                                    
                                                  {/* <div className={s.footer}> <FooterComp logo={logo}/> </div> */}
                                                                  
                                      </div>                                                                                                              
                          </div>                               
                )
  }
  
  
  
  