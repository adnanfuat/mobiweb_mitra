import Link from "next/link";
import s from "./header_front.module.css";
import {Menu} from "./menu";
import {LoginIntro} from "@/components/loginintro";
import {Flags} from "@/components/flags";




export  default function HeaderFront  (props) {
      
    const session = undefined;
  
    let { params, logo, position,  webdata, dictionary} = props ?? {};
    let { locale} = params ?? {};
    

    position= position ? position : "relative";
    let lang= webdata?.bigdata?.history?.[0]?.lang?.tr;
    let logofiles =  lang?.logofiles;                  
    let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
    let {width, height} = logo?.bigdata?.details ?? {};
    
    props={...props, position, filename,  session }        
        
    return (
      <div className={s.headercompwr}>
                  
        <Link href={`/${locale}`}>
            <div className={s.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}></div>
        </Link>
                      <div className={s.rightwr} >                                           
                                  <LoginIntro session={session} dictionary={dictionary}/>                                
                                  <Menu locale={locale} webdata={webdata} dictionary={dictionary}/>                                
                      </div>
                      <div className={s.flagswr} ><Flags locale={locale}/></div>
        </div>
    )
  }
  



  
  
  //  const Theme_1 = (props) => {

  //   let { params, position, sidepadding =42, topbottom=5, webdata, dictionary, filename, selection, locale, session} = props ?? {}

  //   return (
    
  //   )
  // }
  

  




