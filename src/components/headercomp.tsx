import Link from "next/link";
import s from "./headercomp.module.css";
import {Menu} from "@/components/menu";
import {LoginIntro} from "@/components/loginintro";
import {Flags} from "@/components/flags";


import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

  
  export  default async function HeaderComp  (props) {

    const session = await getServerSession(authOptions)
  
    let {logo, params, dictionary} = props ?? {};

    let {locale} = params ?? {};

    
  
    let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename  
  
    let {width, height} = logo?.bigdata?.details ?? {}

      
  
    return (
      <div className={s.headercompwr}>
          
        <div className={s.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>
  
  
        </div>
                

        <div className={s.rightwr} >
                <LoginIntro session={session}/>
                <Menu dictionary={dictionary}  params={params}/>
                <Flags locale={locale} params={params}/>
        </div>

  
  
      </div>
    )
  }
  