import s from "./designlayout_theme_arges.module.css"
import HeaderComp from "@/components/header/headercomp"
import { Inter } from 'next/font/google'

const inter = Inter({
    variable: '--inter-font',
    subsets:["latin","latin-ext"],
    weight:["100", "200","300","400","500","600", "700","800","900"]
  })


export const DesignLayout_Theme_Arges = (props) => {
    let {title, dictionary, params,logo, webdata} = props ?? {};
    let sidepadding = 26;
          
  return (
    <div  className={s.designwr}>
      {/* {JSON.stringify(webdata)} */}
      
        <HeaderComp position="relative"  sidepadding={sidepadding} topbottom={5} dictionary={dictionary} params={params} webdata={webdata}/>

        <div style={{paddingLeft:sidepadding, paddingRight:sidepadding }}  className={s.mainwr}>

                    <div className={`${s.title} ${inter.variable}`}>{title ? title : "Başlık atanmamış"}</div>        
                    
                    { props?.children }
                        
        </div>

        </div>
  )
}
