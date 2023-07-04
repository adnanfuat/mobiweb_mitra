
import s from "./index.module.css"

import {Index_Cuffs_V2_Visitor} from "./cuffs/index_cuffs_v2_visitor"
import FooterComp from "./footer/footercomp"
import {Welcome} from "./modules/welcome"
import {Bant} from "./modules/bant"
import {Bant2} from "./modules/bant2"
import {Products} from "./modules/products"
import {Blogs} from "./modules/blogs"
import {Gallery} from "./modules/gallery"
import {TextBoards} from "./modules/textboards"
import {ImageBoards} from "./modules/imageboards"
import {Shortcuts} from "./modules/shortcuts"
// import Estates from "@/components/estates/estates";
// import {DesignLayout_Vitalis} from "./layouts/designlayout_vitalis"

import { Poppins } from 'next/font/google'
import HeaderFront from "./header/header_front";
import Head from 'next/head';

const poppins = Poppins({
        variable: '--poppins',
        subsets:["latin","latin-ext"],
        weight:["100", "200","300","400","500","600", "700","800","900"]
      })


export const Vitalis =  (props) => {

    let {logo, params, dictionary, webdata, cuffs} = props ?? {};

    // return <div>asdasdsa</div>
  
    return (                        

        <div className={`${s.mainwr} ${poppins.className}`} style={{backgroundImage:"url(/themes/vitalis/bg.png)", backgroundRepeat:"no-repeat"}}>
                                            <Head>
                                                <link rel="icon" href="/themes/vitalis/fav.png" sizes="any" />
                                                <meta name="viewport" content="initial-scale=1, width=device-width" />
                                                <meta name="Googlebot" content="index, follow" />
                                                <meta name="robots" content="index, follow" />
                                                <meta name="Robots" content="all" />              
                                                <title>Vitaliss</title>
                                             </Head> 

        <div className={s.insidewr}>

                    {/* {title ? <div className={`${s.title} ${inter.variable}`} style={{backgroundColor:"white"}}>{title ? title : "Başlık atanmamış"}</div> : <div></div>} */}                    
                    {/* { props?.children }  */}                    
                                                        <HeaderFront logo={logo} params={params} dictionary={dictionary} webdata={webdata}  sidepadding={42} topbottom={5}/> 
                                                                
                                        
                                                                

                                                                        <div className={s.cuffs}> <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/> 
                                                                        </div>                    
                                                                        
                                                                        <div className={s.estates}>
                                                                                {/* <Estates adverts={webdata?.richcontents?.filter(a=>a?.bigbigparent_key=="1668310884")} params={params} /> */}
                                                                        </div> 


                                                                        <div className={s.ssss}> <Welcome/> </div>                                                                                                                                                                                                                                                                                                                                                                           
        </div>

                                                                        <div className={s.bant}> <Bant/> </div>    

                                                                        <div className={s.products}><Products/></div>    
                                                                        
                                                                        <div className={s.products}><Blogs/></div>    

                                                                        <div className={s.products}><Gallery/></div>    

                                                                        <div className={s.bant}> <Bant2/> </div>    


                                                                        <div className={s.bant}> <ImageBoards/> </div>  

                                                                        <div className={s.bant}> <TextBoards/> </div>    


                                                                        <div className={s.shortcuts}> <Shortcuts/> </div>    


        <br/>
        <br/>
        <br/>
        <br/>

        
        <div className={s.footer}><FooterComp logo={logo}/></div>

</div>

                        
                        
                                             


                        
                )
  }
  
  
  
  