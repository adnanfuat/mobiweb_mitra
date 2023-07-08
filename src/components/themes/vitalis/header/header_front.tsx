import Link from "next/link";
import s from "./header_front.module.css";
import {Menu} from "./menu";
import {LoginIntro} from "@/components/loginintro";
import {Flags} from "@/components/flags";
import { useSnapshot } from 'valtio';
import {siteProxy} from "@/constants/siteproxy"
import { RiMenuFill } from "react-icons/ri";
// let siteState  = useSnapshot(siteProxy);




export  default function HeaderFront  (props) {
      
    const session = undefined;
  
    let { params, logo,   webdata, dictionary} = props ?? {};
    let { locale} = params ?? {};
    
    // position= position ? position : "relative";
    let lang= webdata?.bigdata?.history?.[0]?.lang?.tr;
    let logofiles =  lang?.logofiles;                  
    let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
    let {width, height} = logo?.bigdata?.details ?? {};

    let logosettings= webdata?.bigdata?.theme?.settings?.header?.front?.logo;        
    props={...props,  filename,  session }      
    
    let siteState  = useSnapshot(siteProxy);
    // siteState.mobilemenu!=true && 
    return (
      <div className={s.headercompwr}> 
      
                  
        <Link href={`/${locale}`}>
            <div className={s.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat", width:logosettings?.width, height:logosettings?.height}}></div>
        </Link>
                      <div className={s.rightwr} >                                                                 
                      {!siteState?.mobilemenu && <div className={s.mobilebutton} > 
                          { <RiMenuFill size={`3rem`}  onClick={(e)=>{e.stopPropagation(); siteProxy.mobilemenu=true}}/> }                          
                    </div>}

                                  <Menu locale={locale} webdata={webdata} dictionary={dictionary}/>                                
                      </div>
                                  
                      {<div className={s.flagswr} ><LoginIntro session={session} dictionary={dictionary}/> <Flags locale={locale}/> </div>}
        </div>
    )
  }
  



  
  
  //  const Theme_1 = (props) => {

  //   let { params, position, sidepadding =42, topbottom=5, webdata, dictionary, filename, selection, locale, session} = props ?? {}

  //   return (
    
  //   )
  // }
  

  




