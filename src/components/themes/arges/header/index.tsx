import Link from "next/link";
import s from "./header.module.css";
import {Menu} from "./menu";
import {LoginIntro} from "@/components/loginintro";
import {Flags} from "@/components/flags";
import Head from "next/head";

// import { getServerSession } from "next-auth/next"
// import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import DictionaryData from "./utils/dictionarydata";
// import WebData from "./utils/webdata";


export  default  function HeaderComp  (props) {
  
    
    // const session = await getServerSession(authOptions)
  
    let { params, position, logo, topbottom=5, webdata, dictionary } = props ?? {}

    let {locale} = params ?? {};

    position= position ? position : "relative";
         
        // let {logo, params, dictionary} = props ?? {};                  
        let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
        let {width, height} = logo?.bigdata?.details ?? {};
        
        props={...props, position, filename }        
        
    return (
      <div className={s.headercompwr} style={{position}}>

            <Head>
                  <link rel="icon" href="/themes/arges/fav.png" sizes="any" />
                  <meta name="viewport" content="initial-scale=1, width=device-width" />
                  <meta name="Googlebot" content="index, follow" />
                  <meta name="robots" content="index, follow" />
                  <meta name="Robots" content="all" />              
                  <title>ARGES</title>
              </Head>
                    
          <Link href={`/`}><div className={s.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}></div></Link>

          <Menu params={params} webdata={webdata} dictionary={dictionary}/>   

                    <div className={s.rightwr} >                                   
                                  <LoginIntro  dictionary={dictionary}/>
                                  <Flags params={params}/>                                  
                    </div>
                              
        </div>
    )
  }
  



  
  
  //  const Theme_1 = (props) => {

  //   let { params, position, sidepadding =42, topbottom=5, webdata, dictionary, filename, selection, locale, session} = props ?? {}

  //   return (
    
  //   )
  // }
  

  




