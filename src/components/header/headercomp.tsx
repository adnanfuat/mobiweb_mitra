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



export  default async function HeaderComp  (props) {
  
    let selection = selectorFunc();
    const session = await getServerSession(authOptions)
  
    let { params, position, sidepadding =42, topbottom=5, logo, webdata, dictionary} = props ?? {}

    let {locale} = params ?? {};

    position= position ? position : "relative";


          
        // let {logo, params, dictionary} = props ?? {};                  
        let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
        let {width, height} = logo?.bigdata?.details ?? {};

        // props={locale, position, topbottom, sidepadding, filename, session, params, webdata, dictionary  }
        props={...props, position, filename, selection, session, locale }
        
        // return <div>asdsad: {locale}</div>
    return (
            <div className={selection?.dynamic_css.headercompwr} style={{position, padding:`${topbottom}px ${sidepadding}px`}}>
                
                        <Link href={`/${locale}`}><div className={selection?.dynamic_css.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>

                  </div></Link>
                          
                            <div className={selection?.dynamic_css.rightwr} >               
                                    
                                        <LoginIntro session={session} dictionary={dictionary}/>
                                        
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
