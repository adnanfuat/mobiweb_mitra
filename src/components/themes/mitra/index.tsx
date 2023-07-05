
import s from "./index.module.css"
 import HeaderComp from "@/themes/mitra/header/headercomp"
 import {Zigzag} from "@/themes/mitra/modules/zigzag"
import FooterComp from "./footer/footercomp"
import {Flags} from "@/components/flags";



import {Index_Cuffs_V2_Visitor} from "@/components/cuffs/index_cuffs_v2_visitor"

import Estates from "@/components/estates/estates";


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



export const Mitra =  (props) => {

    let {logo, params, dictionary, webdata, cuffs, session} = props ?? {};

    let estates = webdata?.richcontents//?.filter(a=>a?.bigbigparent_key=="1668310884") ?? [];

    
    // ${inter.className}

    return (<div className={`${s.shell} ${exo2.className}`}>   
                            <Head>
                                <link rel="icon" href="/themes/mitra/fav.png" sizes="any" />
                                <meta name="viewport" content="initial-scale=1, width=device-width" />
                                <meta name="Googlebot" content="index, follow" />
                                <meta name="robots" content="index, follow" />
                                <meta name="Robots" content="all" />              
                                <title>Mitra</title>
                            </Head>              

                            <div className={s.mainwr}>  
                            
                                        <HeaderComp logo={logo} params={params} dictionary={dictionary} webdata={webdata} session={session}/>                                    
                                        <Index_Cuffs_V2_Visitor cuffs={cuffs} params={params}/>             
                                        
                                        
                                        <div className={s.main}> 
                                          <Estates adverts={estates} params={params}   dictionary={dictionary}/>

                                          <Zigzag/>

                                        </div>
                                           
                                        <div className={s.footer}>  <FooterComp logo={logo}/>   </div>                              
                                                        
                            </div>
                                                                    



                            <div className={s.flagswr} ><Flags locale={params?.locale}/></div>       

                          </div>                               
                )
  }
  
  
  
  