import s from "./designlayout_vitalis.module.css"
import HeaderFront from "../header/header_front"
import { Inter } from 'next/font/google'
import FooterComp from "../footer/footercomp"
import { Noto_Sans_Lepcha, Poppins } from 'next/font/google'

import Head from 'next/head';


const inter = Inter({
    variable: '--inter-font',
    subsets:["latin","latin-ext"],
    weight:["100", "200","300","400","500","600", "700","800","900"]
  })

  const poppins = Poppins({
    variable: '--poppins',
    subsets:["latin","latin-ext"],
    weight:["100", "200","300","400","500","600", "700","800","900"]
  })  


export const DesignLayout_Vitalis = (props) => {
    let {title, dictionary, params,logo, webdata} = props ?? {};


    let favicon= webdata?.bigdata?.themev2?.settings?.index?.favicon;

    

    

    let backgroundImage= webdata?.bigdata?.themev2?.settings?.index?.bg;

    backgroundImage =  backgroundImage ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${backgroundImage})` : "url(/themes/vitalis/bg.png)" ;
    
          
  return (

    <div className={`${s.shell} ${poppins.className}`} style={{backgroundImage, backgroundRepeat:"no-repeat"}}>
                                            <Head>
                                                <link rel="icon" href={`${process.env.NEXT_PUBLIC_IMGSOURCE}/${favicon}`} sizes="any" />
                                                <meta name="viewport" content="initial-scale=1, width=device-width" />
                                                <meta name="Googlebot" content="index, follow" />
                                                <meta name="robots" content="index, follow" />
                                                <meta name="Robots" content="all" />              
                                                <title>{webdata?.title_tr}</title>
                                             </Head> 

      
              <HeaderFront position="relative" logo={logo}  topbottom={5} dictionary={dictionary} params={params} webdata={webdata}/>

             <div  className={s.fullwr}> 


             {title && <div  className={s.titlewr}> {title} </div>}

             <div className={s.mainwr}> 
               {props.children}                   
             </div>

             </div>

             <div  className={s.footer}> <FooterComp {...props}/> </div>

</div>

  )
}

    // <div  className={`${s.designwr} ${inter.className}`}  style={{backgroundImage, backgroundRepeat:"no-repeat"}}>   

    //             <HeaderFront position="relative" logo={logo}  topbottom={5} dictionary={dictionary} params={params} webdata={webdata}/>

    //             <div  className={s.fullwr}> 


    //             <div  className={s.titlewr}> {title} </div>

    //             <div  className={s.mainwr}> 
    //               {props.children}                   
    //             </div>

    //             </div>

    //             <div  className={s.footer}> <FooterComp {...props}/> </div>
                
    //     </div>