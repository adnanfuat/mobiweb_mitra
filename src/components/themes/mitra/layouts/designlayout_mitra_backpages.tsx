import s from "./designlayout_mitra_backpages.module.css"
 import HeaderComp_Back from "@/themes/mitra/header/headercomp_back"
import { Inter } from 'next/font/google'
import FooterComp from "../footer/footercomp"

const inter = Inter({
    variable: '--inter-font',
    subsets:["latin","latin-ext"],
    weight:["100", "200","300","400","500","600", "700","800","900"]
  })


export const DesignLayout_Mitra_BackPages = (props) => {
    
    let {title, dictionary, params,logo, webdata} = props ?? {};
    let sidepadding = 26;
          
  return (
    <div  className={`${s.designwr} ${inter.className}`}>    
      
        <div className={s.headerwr}>
                <div style={{ backgroundImage:`url("/themes/mitra/backpages.jpg")`, backgroundSize:"cover"}}  className={s.headermainwr}>
                    <HeaderComp_Back  logo={logo} sidepadding={sidepadding} topbottom={5} dictionary={dictionary} params={params} webdata={webdata}/>
                    <div className={s.strip}> {title ? title : "Başlık atanmamış"} </div>
                </div>
        </div>

                                           
        <div className={s.mainwr}>
        
                    { props?.children }
        </div>
                                            
        
                    <div className={s.footer}>  <FooterComp logo={logo}/>   </div>                              
        </div>
  )
}
