import s from "./designlayout_vitalis.module.css"
import HeaderComp from "../header/index"
import { Inter } from 'next/font/google'
import FooterComp from "../footer/footercomp"

const inter = Inter({
    variable: '--inter-font',
    subsets:["latin","latin-ext"],
    weight:["100", "200","300","400","500","600", "700","800","900"]
  })


export const DesignLayout_Vitalis = (props) => {
    let {title, dictionary, params,logo, webdata} = props ?? {};
    
          
  return (
    <div  className={s.designwr}>    
                {/* <HeaderComp position="relative"  logo={logo}  topbottom={5} dictionary={dictionary} params={params} webdata={webdata}/> */}


                
        </div>
  )
}
