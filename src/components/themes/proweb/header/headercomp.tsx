import Link from "next/link";
import s from "./headercomp.module.css";
import Menu from "./menu";
// import {LoginIntro} from "@/components/loginintro";
 import {Flags} from "@/components/flags";
import Image from "next/image";


export  default function HeaderComp  (props) {
    //  const session = await getServerSession(authOptions)         
    let { locale, logo, webdata,  dictionary} = props ?? {}
    
    
                          
    let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
    let {width, height} = logo?.bigdata?.details ?? {};
        
    props={...props,  filename,   locale }
                
    return (
            <div className={s.headercompwr}  style={{ backgroundImage: `url("/themes/proweb/banner_bg.jpg")`, backgroundSize:"cover" , backgroundPosition: 'center', backgroundRepeat:"no-repeat",  minWidth:"100%", minHeight:50}}>

              <div className={s.headercomp} >

              <div className={s.logowr}>
                        <Link href={`/`}>
                                                        
                              <Image
                                                                                                          width={258}
                                                                                                          height={51}
                                                                                                          src={`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`}
                                                                                                          // className="uploadmultiple_images_img"
                                                                                                          // key={`${index}-${file?.slug_tr}`}
                                                                                                          alt="sadsdasd"
                                                                                                          // onError={() => setSrc('/images/common/uploading.jpg')}                                                                                                            
                                                                                                          quality={100}
                                                                                                          sizes="100vw"                                                                                                          
                                                                                                           />

                          </Link>
                </div>
                
                          
                            {/* <div className={s.rightwr} >                                                   
                                          <LoginIntro dictionary={dictionary}/>                                          
                                          
                            </div> */}
                            {/* {locale} */}
                                          <Menu locale={locale} webdata={webdata} dictionary={dictionary}/>    
                                          <div className={s.flagswr} ><Flags locale={locale}/></div>
                                          

              </div>



                                      
      </div>
    )
  }
  



  
  

