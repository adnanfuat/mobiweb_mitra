import Link from "next/link";
import s from "./header_back.module.css";
import {Menu} from "./menu";
import {LoginIntro} from "@/components/loginintro";
import {Flags} from "@/components/flags";
import { useSnapshot } from 'valtio';
import {siteProxy} from "@/constants/siteproxy"
import { RiMenuFill } from "react-icons/ri";


export  default function HeaderBack  (props) {
      
    const session = undefined;
  
    let { params, logo, position,  topbottom=5, webdata, dictionary} = props ?? {};
    
    let {locale}  = params ?? {}

    position= position ? position : "relative";
        
    let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
    
    
    props={...props, position, filename,  session }

    let siteState  = useSnapshot(siteProxy);    
        
    return (
      <div className={s.headercompwr}>
                  
        <Link href={`/`}>
            <div className={s.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}></div>
        </Link>
                      <div className={s.rightwr} >                                                                                       

                        {!siteState?.mobilemenu && <div className={s.mobilebutton} > 
                            { <RiMenuFill size={`3rem`}  onClick={(e)=>{e.stopPropagation(); siteProxy.mobilemenu=true}}/> }                          
                      </div>}

                                  <Menu locale={locale} webdata={webdata} dictionary={dictionary}/>                                
                      </div>
                                  <div className={s.flagswr} ><LoginIntro session={session} dictionary={dictionary}/> <Flags locale={locale}/></div>
        </div>
    )
  }
  



  
  
  //  const Theme_1 = (props) => {

  //   let { params, position, sidepadding =42, topbottom=5, webdata, dictionary, filename, selection, locale, session} = props ?? {}

  //   return (
    
  //   )
  // }
  

  




