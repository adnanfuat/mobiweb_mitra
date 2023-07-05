import s from "./designlayout_vitalis_backpages.module.css"
import HeaderBack from "../header/header_back"
import { Inter } from 'next/font/google'
import FooterComp from "../footer/footercomp"

const inter = Inter({
    variable: '--inter-font',
    subsets:["latin","latin-ext"],
    weight:["100", "200","300","400","500","600", "700","800","900"]
  })


export const DesignLayout_Vitalis_BackPages = (props) => {
    let {title, dictionary, params,logo, webdata} = props ?? {};
    
          
  return (
    <div  className={`${s.designwr} ${inter.className}`}>   

                <HeaderBack position="relative" logo={logo}  topbottom={5} dictionary={dictionary} params={params} webdata={webdata}/>

                <div  className={s.titlewr}> {title} </div>

                <div  className={s.mainwr}> {props.children} </div>


                <div  className={s.footer}> <FooterComp logo={logo}/> </div>
                
        </div>
  )
}
