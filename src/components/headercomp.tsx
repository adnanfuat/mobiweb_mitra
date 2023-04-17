import Link from "next/link";
import s from "./headercomp.module.css";
import {Menu} from "@/components/menu"



  export  default function HeaderComp  (props) {
  
    let {logo} = props ?? {};
  
    let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename  
  
    let {width, height} = logo?.bigdata?.details ?? {}
  
    return (
      <div className={s.headercompwr}>
  
        
  
        <div className={s.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>
  
  
        </div>

        <Menu/>
  
  
      </div>
    )
  }
  