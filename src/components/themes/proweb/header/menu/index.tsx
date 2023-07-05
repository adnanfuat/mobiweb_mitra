import Link from "next/link";
import s from "./menu.module.css";
import {LoginIntro} from "@/components/loginintro";
import {Flags} from "@/components/flags";
import Image from "next/image";
import dictionaryFunc from "@/utils/dictionaryfunc";

export  default function Menu  (props) {
          
    let { locale, logo, webdata,  dictionary} = props ?? {}
    
                              
    let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
    let {width, height} = logo?.bigdata?.details ?? {};
        
    props={...props,  filename,   locale }


    let ana_sayfa      =   dictionaryFunc({key:"1682173393396", dictionary}).text;
    let hakkimizda     =   dictionaryFunc({key:"1682173354630", dictionary}).text;
    let emlak_ilanlari =   dictionaryFunc({key:"1683425090715", dictionary}).text;
    let hizmetler      =   dictionaryFunc({key:"1683425098924", dictionary}).text;
    let iletisim       =   dictionaryFunc({key:"1668310884_999", dictionary}).text;
    let urunler        =   dictionaryFunc({key:"1685105157639", dictionary}).text;


                
    return (
            <div className={s.menuwr}>
                  {/* {JSON.stringify(ana_sayfa)} */}
                                          
                          <div className={s.menuwr} >  

                            <span>{ana_sayfa}</span>
                            <span>{hakkimizda}</span>
                            <span>{hizmetler}</span>
                            <span>Web Sitesi Yapımı</span>
                            <span>Projeler</span>
                            <span>Referanslar</span>
                            
                            <span>Sosyal Medya</span>
                            <span>{iletisim}</span>

                          </div>


                            {/* <div className={s.rightwr} >                                                   
                                          <LoginIntro dictionary={dictionary}/>                                          
                                          <Flags locale={locale}/>
                            </div> */}
                            
                                                                               
      </div>
    )
  }
  



  
  

