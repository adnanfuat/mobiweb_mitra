import Link from "next/link";
import s from "./headercomp.module.css";
import common from "./common.module.css";
import theme_1 from "./theme_1.module.css";
import theme_2 from "./theme_2.module.css";
import {Menu} from "@/components/menu";
import {LoginIntro} from "@/components/loginintro";
import {Flags} from "@/components/flags";


import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../pages/api/auth/[...nextauth]"
// import DictionaryData from "./utils/dictionarydata";
// import WebData from "./utils/webdata";
import fileSpecialRequests from "../utils/files_specialrequests";


export  default async function HeaderComp  (props) {
  
    let selection = selectorFunc();
    const session = await getServerSession(authOptions)
  
    let { params, position, sidepadding =42, topbottom=5, webdata, dictionary} = props ?? {}

    let {locale} = params ?? {};

    position= position ? position : "relative";

    let lang= webdata?.bigdata?.history[0]?.lang?.tr;
    let logofiles =  lang?.logofiles;

    let fileobjects = await fileSpecialRequests({logofiles})
       
    let logo = fileobjects?.find(f=>f?.slug_tr  == logofiles[0])
          
        // let {logo, params, dictionary} = props ?? {};                  
        let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
        let {width, height} = logo?.bigdata?.details ?? {};

        // props={locale, position, topbottom, sidepadding, filename, session, params, webdata, dictionary  }
        props={...props, position, filename, selection, session }
        
    return (
          <Theme_1 {...props}/>
    )
  }
  



  
  
   const Theme_1 = (props) => {

    let { params, position, sidepadding =42, topbottom=5, webdata, dictionary, filename, selection, locale, session} = props ?? {}

    return (
      <div className={selection?.dynamic_css.headercompwr} style={{position, padding:`${topbottom}px ${sidepadding}px`}}>
          
              <Link href={`/${locale}`}><div className={selection?.dynamic_css.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>
              
          </div></Link>
                
                <div className={selection?.dynamic_css.rightwr} >               
                        
                            <LoginIntro session={session}/>
                            
                            <Menu params={params} webdata={webdata} dictionary={dictionary}/>
                            
                            <Flags params={params}/>

                </div>
    
      </div>
    )
  }
  

  




 const selectorFunc = () => {

        let dynamic_css=theme_1;
        return {dynamic_css}
                
}
