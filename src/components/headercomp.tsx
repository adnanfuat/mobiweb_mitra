import Link from "next/link";
import s from "./headercomp.module.css";
import {Menu} from "@/components/menu";
import {LoginIntro} from "@/components/loginintro";
import {Flags} from "@/components/flags";

// import { localeStatic } from "@/constants/localestatic";

import { getServerSession } from "next-auth/next"
import { authOptions } from "../../app/api/auth/[...nextauth]"
// import DictionaryData from "./utils/dictionarydata";
// import WebData from "./utils/webdata";
import fileSpecialRequests from "./utils/files_specialrequests";

  
  export  default async function HeaderComp  (props) {

    const session = await getServerSession(authOptions)
  
    let { params, position, sidepadding =42, topbottom=5, webdata, dictionary} = props ?? {}

    let {locale} = params ?? {};

    position= position ? position : "relative";

    let lang= webdata?.bigdata?.history[0]?.lang?.tr;
    let logofiles =  lang?.logofiles;

    let fileobjects = await fileSpecialRequests({logofiles})
       
    let logo = fileobjects?.find(f=>f?.slug_tr  == logofiles[0])
          
        // let {logo, params, dictionary} = props ?? {};                  
        let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
        let {width, height} = logo?.bigdata?.details ?? {};

        
    return (
      <div className={s.headercompwr} style={{position, padding:`${topbottom}px ${sidepadding}px`}}>
          
          <Link href={`/${locale}`}><div className={s.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>
    
          {/* `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})` */}

          {/* -- {JSON.stringify(fileobjects)} */}

          </div></Link>
                

          <div className={s.rightwr} >               
                  <LoginIntro session={session}/>
                  <Menu params={params} webdata={webdata} dictionary={dictionary}/>
                  <Flags params={params}/>
          </div>

  
  
      </div>
    )
  }
  



  


