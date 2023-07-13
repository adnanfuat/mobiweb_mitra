
import s from "./index.module.css"

import {Index_Cuffs_V2_Visitor} from "./cuffs/index_cuffs_v2_visitor"
import FooterComp from "./footer/footercomp"
import {Welcome} from "./modules/welcome"
import {Bant} from "./modules/bant"
import {Bant2} from "./modules/bant2"
import {Products} from "./modules/products"
import {Blogs} from "./modules/blogs"
import {MyGallery} from "./modules/mygallery"
import {TextBoards} from "./modules/textboards"
import {ImageBoards} from "./modules/imageboards"
import {Shortcuts} from "./modules/shortcuts"
// import Estates from "@/components/estates/estates";
 import {DesignLayout_Vitalis} from "./layouts/designlayout_vitalis"

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

    let settings = webdata?.bigdata?.themev2?.settings;
    let favicon= settings?.index?.favicon;    
    let instagram= settings?.index?.instagram;    
    let phone= settings?.index?.phone;    
    let whatsapp= settings?.index?.whatsapp; 
    let whatsapp_text= settings?.index?.whatsapp_text; 
       
    let facebook= settings?.index?.facebook;    

    favicon =  favicon ? `${process.env.NEXT_PUBLIC_IMGSOURCE}/${favicon}` : "/themes/vitalis/fav.png" ;

    let backgroundImage= webdata?.bigdata?.theme?.settings?.index?.bg;
    backgroundImage =  backgroundImage ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${backgroundImage})` : "url(/themes/vitalis/bg.png)" ;
       
    let themev2= webdata?.bigdata?.themev2;
     let modules = themev2?.sections?.find(v=>v.type=="modules") ?? [] 

     let welcome = modules?.sections?.find(v=>v.key=="welcome") ?? []
     let bant1 = modules?.sections?.find(v=>v.key=="bant1") ?? []
     let index_products = modules?.sections?.find(v=>v.key=="index_products") ?? []; // Ana sayfadaki ürünler modülüyle ilgili bilgileri..
     let index_blogs = modules?.sections?.find(v=>v.key=="index_blogs") ?? []; // Ana sayfadaki ürünler modülüyle ilgili bilgileri..
     let index_gallery = modules?.sections?.find(v=>v.key=="index_gallery") ?? []; 
     let bant2 = modules?.sections?.find(v=>v.key=="bant2") ?? {}; 
     let imageboards = modules?.sections?.find(v=>v.key=="imageboards") ?? {}; 
     let textboards = modules?.sections?.find(v=>v.key=="textboards") ?? {}; 
                
     let contents = webdata?.o_key_2?.contents ?? [];
     let fileObjects = webdata?.bigdata?.fileObjects;
     let products = contents?.filter(a=>a?.parents?.[0]?.slug_tr=="urunler" )
     let blogs = contents?.filter(a=>a?.parents?.[0]?.slug_tr=="blog")
     let gallery = contents?.filter(a=>a?.parents?.[0]?.slug_tr=="galeri")


    return (                        
        <DesignLayout_Vitalis  title={``} dictionary={dictionary} params={params} webdata={webdata}  logo={logo}> 
                                                                                                        
                                                                        {/* {JSON.stringify(settings)} */}
                                                                                                                                                                       

                                                                        <div className={s.cuffs}> <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/> 
                                                                        </div>                    
                                                                        
                                                                        <div className={s.estates}>
                                                                                {/* <Estates adverts={webdata?.richcontents?.filter(a=>a?.bigbigparent_key=="1668310884")} locale={locale} /> */}
                                                                        </div> 


                                                                        <div className={s.ssss}> <Welcome module={welcome}/> </div>                                                                                                                                                                                                                                                                                                                                                                           

                                                                       <div className={s.bant}> <Bant module={bant1}/> </div>    

                                                                       <div className={s.products}><Products module={index_products} products={products} fileObjects={fileObjects}/></div>    
                                                                        
                                                                       <div className={s.products}><Blogs module={index_blogs} blogs={blogs} fileObjects={fileObjects}/></div>    

                                                                       <div className={s.products}><MyGallery module={index_gallery} gallery={gallery} fileObjects={fileObjects}/></div>    

                                                                       <div className={s.bant}> <Bant2 module={bant2} fileObjects={fileObjects} /> </div>

                                                                       <div className={s.bant}> <ImageBoards module={imageboards} fileObjects={fileObjects}/> </div>  

                                                                       <div className={s.bant}> <TextBoards module={textboards}/> </div>    

                                                                       <div className={s.shortcuts}> <Shortcuts instagram={instagram} facebook={facebook} phone={phone} whatsapp_text={whatsapp_text} whatsapp={whatsapp}/> </div>    


        <br/>
        <br/>
        <br/>
        <br/>
        
        

</DesignLayout_Vitalis>

                        
                        
                                             


                        
                )
  }
  
  
  
  

//   <div className={`${s.mainwr} ${poppins.className}`} style={{backgroundImage, backgroundRepeat:"no-repeat"}}> 
//   <Head>
//       <link rel="icon" href={favicon} sizes="any" />
//       <meta name="viewport" content="initial-scale=1, width=device-width" />
//       <meta name="Googlebot" content="index, follow" />
//       <meta name="robots" content="index, follow" />
//       <meta name="Robots" content="all" />              
//       <title>{webdata?.title_tr}</title>
//    </Head> 

// <div className={s.insidewr}>
// {/* {JSON.stringify(index_bant2)} */}                                    
//               <HeaderFront logo={logo} params={params} dictionary={dictionary} webdata={webdata}  sidepadding={42} topbottom={5}/> 
                                                                                                                              

//                               <div className={s.cuffs}> <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/> 
//                               </div>                    
                              
//                               <div className={s.estates}>
//                                       {/* <Estates adverts={webdata?.richcontents?.filter(a=>a?.bigbigparent_key=="1668310884")} locale={locale} /> */}
//                               </div> 


//                               <div className={s.ssss}> <Welcome module={welcome}/> </div>                                                                                                                                                                                                                                                                                                                                                                           
// </div>

//                              <div className={s.bant}> <Bant module={bant1}/> </div>    

//                              <div className={s.products}><Products module={index_products} products={products} fileObjects={fileObjects}/></div>    
                              
//                              <div className={s.products}><Blogs module={index_blogs} blogs={blogs} fileObjects={fileObjects}/></div>    

//                              <div className={s.products}><Gallery module={index_gallery} gallery={gallery} fileObjects={fileObjects}/></div>    

//                              <div className={s.bant}> <Bant2 module={bant2} fileObjects={fileObjects} /> </div>

//                              <div className={s.bant}> <ImageBoards module={imageboards} fileObjects={fileObjects}/> </div>  

//                              <div className={s.bant}> <TextBoards module={textboards}/> </div>    

//                              <div className={s.shortcuts}> <Shortcuts/> </div>    


// <br/>
// <br/>
// <br/>
// <br/>

// <div className={s.footer}><FooterComp {...props}/></div>

// </div>