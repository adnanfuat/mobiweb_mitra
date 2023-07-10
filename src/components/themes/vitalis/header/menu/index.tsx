import Link from "next/link";
import s from "./menu.module.css"
import dictionaryFunc from "@/utils/dictionaryfunc";
import { RiCloseFill, RiMenuFill, RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { useSnapshot } from 'valtio';
import {siteProxy} from "@/constants/siteproxy"
// let siteState  = useSnapshot(siteProxy);
import { useDetectClickOutside } from 'react-detect-click-outside';


export const Menu =  (props) => {

    let { params , dictionary, webdata } = props ?? {};
    let {locale} = params ?? {}
    let siteState  = useSnapshot(siteProxy);

    let menu = webdata?.bigdata?.menu ?? {} 
          
    let ana_sayfa      =   dictionaryFunc({key:"1682173393396", dictionary}).text;
    let hakkimizda     =   dictionaryFunc({key:"1682173354630", dictionary}).text;
    let emlak_ilanlari =   dictionaryFunc({key:"1683425090715", dictionary}).text;
    let hizmetler      =   dictionaryFunc({key:"1683425098924", dictionary}).text;
    let iletisim       =   dictionaryFunc({key:"1668310884_999", dictionary}).text;
    let urunler        =   dictionaryFunc({key:"1685105157639", dictionary}).text;
    let galeri        =   dictionaryFunc({key:"1687698859805", dictionary}).text;

    
    const ref = useDetectClickOutside({ onTriggered: ()=>siteProxy.mobilemenu=false });  
    
                      
    return (
        <div className={s.shell}>             {/* // %100 açılan div diğerlerinin üzerine geliyor ve flags ve login onclicklerini engelliyor.. Bu nedenle bu trick gerekli oldu  style={{width:siteState?.mobilemenu==true ? "100%" : "100%", height:siteState?.mobilemenu==true ? "100%" : "100%", }}*/}
                                    
            {<div className={s.menuwr}>                               
                                  <div className={s.menuinnerwr}>                            
                                    <Link href={`/`} className={s.menuitem}  style={itemFunc({type:"main_page", menu})?.style}> {ana_sayfa} </Link>
                                    {/* <Link href={`/`} className={s.menuitem}  >{hakkimizda}</Link> */}
                                    {itemFunc({type:"real_estates", menu})?.visible && <Link href={`/ads`} className={s.menuitem} style={itemFunc({type:"real_estates", menu})?.style}> {emlak_ilanlari} </Link>}                  
                                    <Link href={`/u/urunler`} className={s.menuitem} > {urunler} </Link>                  
                                    <Link href={`/h/hizmetler`} className={s.menuitem} > {hizmetler} </Link>           
                                    <Link href={`/g/galeri`} className={s.menuitem} > {galeri} </Link>    
                                    <Link href={`/contact`} className={s.menuitem}  > {iletisim} </Link>
                                  </div>
            </div>}



            {siteState?.mobilemenu==true && <div className={s.mobilemenuwr} >                           
                            <div className={s.menuinnerwr} ref={ref}>
                            <div className={s.close}><RiMenu3Fill size={`3rem`} color="black" onClick={(e)=>{ siteProxy.mobilemenu=false}}/> </div>  
                              <Link href={`/`} className={s.menuitem}  style={itemFunc({type:"main_page", menu})?.style}  onClick={(e)=>{ siteProxy.mobilemenu=false}}> {ana_sayfa} </Link>                              
                              {itemFunc({type:"real_estates", menu})?.visible && <Link href={`/ads`} className={s.menuitem} style={itemFunc({type:"real_estates", menu})?.style}  onClick={(e)=>{ siteProxy.mobilemenu=false}}> {emlak_ilanlari} </Link>}                  
                              <Link href={`/u/urunler`} className={s.menuitem}  onClick={(e)=>{ siteProxy.mobilemenu=false}} > {urunler} </Link>                  
                              <Link href={`/h/hizmetler`} className={s.menuitem}  onClick={(e)=>{ siteProxy.mobilemenu=false}}> {hizmetler} </Link>           
                              <Link href={`/g/galeri`} className={s.menuitem} onClick={(e)=>{ siteProxy.mobilemenu=false}} > {galeri} </Link>    
                              <Link href={`/contact`} className={s.menuitem}  onClick={(e)=>{ siteProxy.mobilemenu=false}} > {iletisim} </Link>
                            </div>
            </div>}



                        
                                                        
        </div>
    )
  }
  


  
  
  const itemFunc = ({type, menu}) => { //

    let relateditem = menu?.items?.find( m =>m?.type== type);

    return (
             {
              visible: relateditem?.visible,
              style: relateditem?.style
            }
           )
  }
  