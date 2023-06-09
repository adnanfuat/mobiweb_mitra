import s from "./designlayout_arges.module.css"

import { Inter } from 'next/font/google'
import HeaderComp from "../header/index";

const inter = Inter({
    variable: '--inter-font',
    subsets:["latin","latin-ext"],
    weight:["100", "200","300","400","500","600", "700","800","900"]
  })


export const DesignLayout_Arges = (props) => {
    let {title, dictionary, params,logo, webdata} = props ?? {};
    let sidepadding = 26;
          
  return (
    <div className={`${s.designwr} ${inter.className}`}>
      {/* {JSON.stringify(webdata)} */}
      
        <HeaderComp position="relative" logo={logo}  sidepadding={sidepadding} topbottom={5} dictionary={dictionary} locale={params?.locale} webdata={webdata}/>
        <div style={{height:1, backgroundColor:"black", display:"flex", width:"100%", marginBottom:30}}/>
        <div className={s.mainwr}>

                    <div className={`${s.title} ${inter.variable}`}>{title ? title : "Başlık atanmamış"}</div>        
                    
                    { props?.children }
                        
        </div>

        </div>
  )
}
