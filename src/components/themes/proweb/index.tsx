
import s from "./index.module.css"
 import HeaderComp from "./header/headercomp"

 import { RiHeartFill , RiWhatsappFill, RiAwardFill, RiBugFill, RiShieldFlashFill, RiFacebookCircleFill, RiBuilding4Fill, RiCoinFill } from "react-icons/ri";

 
// import FooterComp from "./footer/footercomp"
import {siteProxy} from "@/constants/siteproxy"
import Image from 'next/image'
import styles from './page.module.css'
import {Index_Cuffs_V2_Visitor} from "./cuffs/index_cuffs_v2_visitor"
import { localeStatic } from "@/constants/localestatic"
import Estates from "@/components/estates/estates";
import { Archivo_Black } from 'next/font/google'


// import { DesignLayout_Mitra_BackPages } from "./layouts/designlayout_mitra_backpages"
import { Inter, Exo_2 } from 'next/font/google';
import Head from 'next/head';
import Link from "next/link";

const inter = Inter({
  variable: '--inter-font',
  subsets:["latin","latin-ext"],
  weight:["100", "200","300","400","500","600", "700","800","900"]
})


const exo2 = Exo_2({
  variable: '--exo2-font',
  subsets:["latin","latin-ext"],
  weight:["100", "200","300","400","500","600", "700","800","900"]
})



export const Proweb =  (props) => {

    let {logo, params, dictionary, webdata, cuffs, session} = props ?? {};
    
    let stripimg = 1==2 ?  `${process.env.NEXT_PUBLIC_IMGSOURCE}/${"asssasasas"}` : "/themes/proweb/header_strip_bg.jpg"


    return (
            <div className={`${s.shell} ${exo2.className}`} >   

                                    <div className={s.strip}  style={{ backgroundImage: `url(${stripimg})`, backgroundSize:"cover" , backgroundPosition: 'center', backgroundRepeat:"no-repeat",  minWidth:"100%", minHeight:50}}>  
                                    
                                        <span><RiHeartFill/> Bugüne kadar 4000 web sitesi yaptık</span>
                                    
                                    <div className={s.strip_right}>
                                        <span><RiCoinFill/> Ödeme</span>
                                        <Link href={`https://wa.me/905555739945/?text=Merhaba, size web sitenizden ulaşıyorum`}><RiWhatsappFill/> Whatsapp: 0 555 5739945 </Link>
                                    </div>

                                    </div>

                                    <div className={s.mainwr}>  



                                      <Head>
                                          <link rel="icon" href="/themes/proweb/fav.png" sizes="any" />
                                          <meta name="viewport" content="initial-scale=1, width=device-width" />
                                          <meta name="Googlebot" content="index, follow" />
                                          <meta name="robots" content="index, follow" />
                                          <meta name="Robots" content="all" />              
                                          <title>PROWEB Mühendislik İnternet Teknolojileri Kariyer San. Tic. Ltd. Şti. 2023</title>
                                      </Head>              

                                      
                                      
                                                  <HeaderComp logo={logo} params={params} dictionary={dictionary} webdata={webdata} session={session}/>                                    
                                                  {/*               */}

                                                  <div className={s.cuffs}>  <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/> </div>

                                                  {/* <div className={s.stomach}>                                                     
                                                      
                                                      <div className={s.stomach_left}> <Services/> </div>
                                                      <div className={s.xxx}>
                                                        Merkez
                                                         <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/> 
                                                       </div>
                                                      <div className={s.xxx}>Sağ</div>
                                                      
                                                  </div> */}


                                                    <div className={s.squares}>                                                     

                                                      <Square icon={<RiHeartFill size={30}/>} bgImg={"/themes/proweb/square_bg.png"} bgColor="#d2ecf3" title="ÖZEL TASARIM WEB SİTESİ" text="Bir web sitesi yaptırmadan önce ilk olarak neden bir web sitesi sahibi olmanız gerektiğini çok iyi anlamalısınız. Dünya artık bambaşka bir boyutta, her şey çok hızla ilerliyor..." />
                                                      <Square icon={<RiAwardFill size={30}/>} bgImg={"/themes/proweb/square_bg.png"} bgColor="#d2ecf3" title="KURUMSAL KİMLİK TASARIMI" text="Kurumunuzun pazarlama alanını güçlendirme istiyorsanız mutlaka bir kurumsal kimlik çalışması yaptırmalısınız. Peki nedir bu 'kurumsal kimlik çalışması'?" />
                                                      <Square icon={<RiFacebookCircleFill size={30}/>} bgImg={"/themes/proweb/square_bg.png"} bgColor="#d2ecf3" title="SOSYAL MEDYA DANIŞMANLIĞI" text="Dijital ortamda yer almaya karar verdikten sonra atacağınız ilk adımlardan biri sosyal medya ortamlarında yer almak olmalıdır. " />
                                                      <Square icon={<RiBugFill size={30}/>} bgImg={"/themes/proweb/square_bg.png"} bgColor="#d2ecf3" title="ÖZEL YAZILIM GELİŞTİRME" text="PROWEB Mühendislik bünyesinde bulunduğu tecrübeli bilgisayar mühendisleri ve bilgisayar programcıları ile isteklerinize özel olarak web tabanlı yazılım..." />
                                                      <Square icon={<RiBuilding4Fill size={30}/>} bgImg={"/themes/proweb/square_bg.png"} bgColor="#d2ecf3" title="FİRMA REHBERİ" text="SakaryaRehberim.com: Türkiye'nin en kapsamlı ve kontrollü firma rehberi. Ücretsiz olarak firma adınız ve iletişim bilgilerinizle yer alabildiğiniz..." />
                                                      <Square icon={<RiShieldFlashFill size={30}/>} bgImg={"/themes/proweb/square_bg.png"} bgColor="#d2ecf3" title="İŞKUR RUHSATI" text="İş ve işçi bulmaya SüperEleman.com üzerinden aracılık eden firmamız, bu faaliyetini yürütmek üzere İŞKUR onaylı Özel İstihdam Bürosu ruhsatına sahiptir" />
                                                                                                                                                                                                                        
                                                  </div>


                                                  <div className={s.bant}  style={{ backgroundImage: `url("/themes/proweb/bant_bg.png")`, backgroundSize:"cover" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>                                                     
                                                  13 Yıllık Tecrübe
                                                  </div>

                                                  <div className={s.blocks}>                                                     

                                                      <Block  img={"/themes/proweb/proje_logo_1.jpg"} bgColor="#d2ecf3" title="ÖZEL TASARIM WEB SİTESİ" text="Bir web sitesi yaptırmadan önce ilk olarak neden bir web sitesi sahibi olmanız gerektiğini çok iyi anlamalısınız. Dünya artık bambaşka bir boyutta, her şey çok hızla ilerliyor..." />
                                                      <Block  img={"/themes/proweb/proje_logo_2.jpg"} bgColor="#d2ecf3" title="ÖZEL TASARIM WEB SİTESİ" text="Bir web sitesi yaptırmadan önce ilk olarak neden bir web sitesi sahibi olmanız gerektiğini çok iyi anlamalısınız. Dünya artık bambaşka bir boyutta, her şey çok hızla ilerliyor..." />
                                                      <Block  img={"/themes/proweb/proje_logo_3.jpg"} bgColor="#d2ecf3" title="ÖZEL TASARIM WEB SİTESİ" text="Bir web sitesi yaptırmadan önce ilk olarak neden bir web sitesi sahibi olmanız gerektiğini çok iyi anlamalısınız. Dünya artık bambaşka bir boyutta, her şey çok hızla ilerliyor..." />
                                                      
                                                                                                                                                                                                                                                                      
                                                  </div>


                                                  <div className={s.ribbon}><img src={"/themes/proweb/ribbon.gif"}/></div>
                                                  <div className={s.socials}>
                                                        <img src={"/themes/proweb/sosyal_03.png"}/>
                                                        <img src={"/themes/proweb/sosyal_05.png"}/>
                                                        <img src={"/themes/proweb/sosyal_07.png"}/>
                                                        <img src={"/themes/proweb/sosyal_09.png"}/>
                                                        <img src={"/themes/proweb/sosyal_11.png"}/>
                                                  </div>
                                                    
                                                  {/* <div className={s.footer}> <FooterComp logo={logo}/> </div> */}
                                                                  
                                      </div>                                                                                                              
                          </div>                               
                )
  }
  
  
  
    
  const Square = (props) => {

    let {icon, title, text, bgImg, bgColor} = props ?? {}
    return (
      <div className={s.square} style={{backgroundImage:`url(${bgImg})`, backgroundPosition:"center", backgroundSize:"cover", backgroundColor:bgColor}}>
        
        
          {icon}
          <h2 className={s.square_title}>{title}</h2>

          <span> {text} </span>
        


      </div>
    )
  }
  
  
    
  const Block = (props) => {

    let { title, text, img, bgColor} = props ?? {}
    return (              
          <img src={img} width={"100%"} height="auto" />                         
    )
  }
  
  

  
  const Services = () => {
    return (
      <div className={s.leftwr}>
        
        <div>SüperEleman.com</div>
        <div>E-Ticaret Yazılımları</div>
        <div>Satılık Web Siteleri</div>
        <div>Kiralık Web Siteleri</div>
        <div>Web Programlama</div>
        <div>Sosyal Medya Danışmanlığı</div>
        <div>Matbaa Hizmetleri</div>
        <div>Promosyon ve Hediyelik</div>
        <div>SEO</div>
        


      </div>
    )
  }
  