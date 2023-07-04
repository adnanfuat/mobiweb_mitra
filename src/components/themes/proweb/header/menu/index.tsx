import Link from "next/link";
import s from "./menu.module.css";
import {LoginIntro} from "@/components/loginintro";
import {Flags} from "@/components/flags";
import Image from "next/image";


export  default function Menu  (props) {
          
    let { params, logo, webdata,  dictionary} = props ?? {}
    let {locale} = params ?? {};
                              
    let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
    let {width, height} = logo?.bigdata?.details ?? {};
        
    props={...props,  filename,   locale }
                
    return (
            <div className={s.menuwr}>
                

                          
                          <div className={s.menuwr} >  
                          
                            <span>Ana Sayfa</span>
                            <span>Hakkımızda</span>
                            <span>Hizmetler</span>
                            <span>Web Sitesi Yapımı</span>
                            <span>Projeler</span>
                            <span>Referanslar</span>
                            
                            <span>Sosyal Medya</span>
                            <span>İletişim</span>

                          </div>


                            {/* <div className={s.rightwr} >                                                   
                                          <LoginIntro dictionary={dictionary}/>                                          
                                          <Flags params={params}/>
                            </div> */}
                            
                                                                               
      </div>
    )
  }
  



  
  

