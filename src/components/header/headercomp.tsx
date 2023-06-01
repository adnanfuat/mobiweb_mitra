import Link from "next/link";
import s from "./headercomp.module.css";



import {Menu} from "@/components/menu";
import {LoginIntro} from "@/components/loginintro";
import {Flags} from "@/components/flags";


import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../pages/api/auth/[...nextauth]"



export  default async function HeaderComp  (props) {
  
    
    const session = await getServerSession(authOptions)
  
    let { params, position, sidepadding =42, topbottom=5, logo, webdata, dictionary} = props ?? {}

    let {locale} = params ?? {};

    position= position ? position : "relative";

console.log("sessssion", session);
          
        // let {logo, params, dictionary} = props ?? {};                  
        let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
        let {width, height} = logo?.bigdata?.details ?? {};

        // props={locale, position, topbottom, sidepadding, filename, session, params, webdata, dictionary  }
        props={...props, position, filename,  session, locale }
        
        // return <div>asdsad: {locale}</div>
    return (
            <div className={s.headercompwr} style={{position, padding:`${topbottom}px ${sidepadding}px`}}>
                
                        <Link href={`/${locale}`}><div className={s.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>

                  </div></Link>
                          
                            <div className={s.rightwr} >               
                                    
                                        <LoginIntro session={session} dictionary={dictionary}/>
                                        
                                        <Menu params={params} webdata={webdata} dictionary={dictionary}/>
                                        
                                        <Flags params={params}/>

                            </div>
                            
      </div>
    )
  }
  



  
  

