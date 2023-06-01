import s from "./designlayout_theme_vitalis.module.css"
import HeaderComp from "../header/index"
import { Inter } from 'next/font/google'
import FooterComp from "../footer/footercomp"

const inter = Inter({
    variable: '--inter-font',
    subsets:["latin","latin-ext"],
    weight:["100", "200","300","400","500","600", "700","800","900"]
  })


export const DesignLayout_Theme_Vitalis = (props) => {
    let {title, dictionary, params,logo, webdata} = props ?? {};
    
          
  return (
    <div  className={s.designwr}>    
                <HeaderComp position="relative"   topbottom={5} dictionary={dictionary} params={params} webdata={webdata}/>
                <div className={s.mainwr} style={{backgroundImage:"url(/themes/vitalis/bg.png)", backgroundRepeat:"no-repeat"}}>
                        <div className={s.insidewr}>
                                    {title ? <div className={`${s.title} ${inter.variable}`} style={{backgroundColor:"white"}}>{title ? title : "Başlık atanmamış"}</div> : <div></div>                                        }
                                    { props?.children }                                    
                        </div>
                </div>

                <div className={s.footer}><FooterComp logo={logo}/></div>
        </div>
  )
}