
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

import { Noto_Sans_Lepcha, Poppins } from 'next/font/google'
import HeaderFront from "./header/header_front";
import Head from 'next/head';

const poppins = Poppins({
        variable: '--poppins',
        subsets:["latin","latin-ext"],
        weight:["100", "200","300","400","500","600", "700","800","900"]
      })


export const Vitalis =  (props) => {

    let {logo, params, dictionary, webdata, cuffs} = props ?? {};

    let favicon= webdata?.bigdata?.theme?.settings?.favicon;    
    favicon =  favicon ? `${process.env.NEXT_PUBLIC_IMGSOURCE}/${favicon}` : "/themes/vitalis/fav.png" ;

    let backgroundImage= webdata?.bigdata?.theme?.settings?.index?.bg;
    backgroundImage =  backgroundImage ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${backgroundImage})` : "url(/themes/vitalis/bg.png)" ;
       
    let themev2= webdata?.bigdata?.themev2;
     let modules = themev2?.items?.find(v=>v.type=="modules") ?? [] 

     let welcome = modules?.items?.find(v=>v.key=="welcome") ?? []
     let bant1 = modules?.items?.find(v=>v.key=="bant1") ?? []
     let index_products = modules?.items?.find(v=>v.key=="index_products") ?? []; // Ana sayfadaki ürünler modülüyle ilgili bilgileri..
     let index_blogs = modules?.items?.find(v=>v.key=="index_blogs") ?? []; // Ana sayfadaki ürünler modülüyle ilgili bilgileri..
     let index_gallery = modules?.items?.find(v=>v.key=="index_gallery") ?? []; 
     let bant2 = modules?.items?.find(v=>v.key=="bant2") ?? {}; 
                
     let contents = webdata?.o_key_2?.contents ?? [];
     let fileObjects = webdata?.bigdata?.fileObjects;
     let products = contents?.filter(a=>a?.parents?.[0]?.slug_tr=="urunler" )
     let blogs = contents?.filter(a=>a?.parents?.[0]?.slug_tr=="blog")
     let gallery = contents?.filter(a=>a?.parents?.[0]?.slug_tr=="galeri")


    return (                        

        <div className={`${s.mainwr} ${poppins.className}`} style={{backgroundImage, backgroundRepeat:"no-repeat"}}> 
                                            <Head>
                                                <link rel="icon" href={favicon} sizes="any" />
                                                <meta name="viewport" content="initial-scale=1, width=device-width" />
                                                <meta name="Googlebot" content="index, follow" />
                                                <meta name="robots" content="index, follow" />
                                                <meta name="Robots" content="all" />              
                                                <title>{webdata?.title_tr}</title>
                                             </Head> 

        <div className={s.insidewr}>
        {/* {JSON.stringify(index_bant2)} */}
                                    
                                                        <HeaderFront logo={logo} params={params} dictionary={dictionary} webdata={webdata}  sidepadding={42} topbottom={5}/> 
                                                                                                                                                                        

                                                                        <div className={s.cuffs}> <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/> 
                                                                        </div>                    
                                                                        
                                                                        <div className={s.estates}>
                                                                                {/* <Estates adverts={webdata?.richcontents?.filter(a=>a?.bigbigparent_key=="1668310884")} locale={locale} /> */}
                                                                        </div> 


                                                                        <div className={s.ssss}> <Welcome data={welcome}/> </div>                                                                                                                                                                                                                                                                                                                                                                           
        </div>

                                                                       <div className={s.bant}> <Bant  data={bant1}/> </div>    

                                                                       <div className={s.products}><Products data={index_products} products={products} fileObjects={fileObjects}/></div>    
                                                                        
                                                                       <div className={s.products}><Blogs data={index_blogs} blogs={blogs} fileObjects={fileObjects}/></div>    

                                                                       <div className={s.products}><Gallery data={index_gallery} gallery={gallery} fileObjects={fileObjects}/></div>    

                                                                       <div className={s.bant}> <Bant2 data={bant2} fileObjects={fileObjects} /> </div>

                                                                       <div className={s.bant}> <ImageBoards/> </div>  

                                                                       <div className={s.bant}> <TextBoards/> </div>    

                                                                       <div className={s.shortcuts}> <Shortcuts/> </div>    


        <br/>
        <br/>
        <br/>
        <br/>
        
        {/* <div className={s.footer}><FooterComp {...props}/></div> */}

</div>

                        
                        
                                             


                        
                )
  }
  
  
  
  