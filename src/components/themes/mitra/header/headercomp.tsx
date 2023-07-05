import Link from "next/link";
import s from "./headercomp.module.css";
import {Menu} from "@/themes/mitra/menu/menu";
import {LoginIntro} from "@/components/loginintro";
import {Flags} from "@/components/flags";


export  default function HeaderComp  (props) {
    //  const session = await getServerSession(authOptions)         
    let { params, position, sidepadding =42, topbottom=5, logo, webdata, session, dictionary} = props ?? {}
    
    position= position ? position : "relative";
                          
    let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
    let {width, height} = logo?.bigdata?.details ?? {};
        
    props={...props, position, filename }
                
    return (
            <div className={s.headercompwr}>
                
                        <Link href={`/`}> <div className={s.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat",  minWidth:200, minHeight:100}}></div> </Link>
                          
                            <div className={s.rightwr} >                                                   
                                          <Flags locale={params?.locale}/>
                                          <LoginIntro dictionary={dictionary}/>                                          
                                          <Menu locale={params?.locale} webdata={webdata} dictionary={dictionary}/>                                          
                            </div>

                            
                            
      </div>
    )
  }
  



  
  

