import s from "./designlayout.module.css"
import HeaderComp from "@/components/headercomp"
import { Inter } from 'next/font/google'

const inter = Inter({
    variable: '--inter-font',
    subsets:["latin","latin-ext"],
    weight:["100", "200","300","400","500","600", "700","800","900"]
  })


export const DesignLayout = (props) => {
    let {title} = props ?? {}

    let sidepadding = 42;

      
    
  return (
    <div  className={s.designwr}>
        <HeaderComp  position="relative"  sidepadding={sidepadding} topbottom={5}/>


        <div style={{paddingLeft:sidepadding, paddingRight:sidepadding }}  className={s.mainwr}>

                    <div className={`${s.title} ${inter.variable}`}>{title ? title : "Başlık atanmamış"}</div>
        
                    { props?.children }

            
        </div>

        </div>
  )
}
