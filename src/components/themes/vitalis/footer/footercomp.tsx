import Link from "next/link";
import s from "./footercomp.module.css";
import { RiHome2Fill, RiCellphoneFill, RiMailFill } from "react-icons/ri";
import Image from "next/image";


export  default function FooterComp  (props) {
  
    let { params, logo, position,  webdata } = props ?? {};
    let {locale} = params ?? {} ;

    

    let footer= webdata?.bigdata?.theme?.settings?.footer;
    let bg = footer?.bg;

    let backgroundImage =  bg ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bg})` : "url(/themes/vitalis/footer_bg.jpg)"



    let lang= webdata?.bigdata?.history?.[0]?.lang?.tr;
    let logofiles =  lang?.logofiles;              
    // let {logo, params, dictionary} = props ?? {};      
    

    let themev2= webdata?.bigdata?.themev2;
    console.log("webdataaaaaaaaa:", themev2)

    

    let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
    let {width, height} = logo?.bigdata?.details ?? {};    
    props={...props, position, filename }


    return (
      <div className={s.footercompwr} style={{backgroundImage, backgroundRepeat:"no-repeat"}}>

        {/* {JSON.stringify(footer)} */}

              <div className={s.footercenterwr}>
                    <div className={s.ddddd}> <BizeUlasin/> </div>
                    <div className={s.ddddd}> <HizliErisim/> </div>
                    <div className={s.ddddd}>
                      <Link href={`/`}><div className={s.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}></div></Link>

                      <div className={s.rightcorner}>
                          ® 2023 Vitalis Botanik <br/>
                            Tüm hakları saklıdır.
                            
                              <div className={s.webcompanywr}>
                                        <span><Image src={`/images/pw.png`} width={33} height={10} alt={"PROWEB"} className={s.FFFFF}/> </span>
                                        <span>|</span>
                                        <span><Image src={`/images/sr.png`} width={20} height={13} alt={"SR"} className={s.FFFFF}/> </span>
                              </div>

                      </div>
                    </div>
              </div>
          
              
  

  
{/* 
<div className={s.socials}>
        <a target="blank" href="https://www.facebook.com/sakaryarehberim" title="50.000 Sakaryalı..." className={s.social}><TbBrandFacebook/></a>
        <a target="blank" href="https://instagram.com/sakarya_rehberim" title="23.000 Sakaryalı takipçi" className={s.social}><TbBrandInstagram/></a>
        <a target="blank" href="https://twitter.com/sakaryarehberim" title="#Sakarya'dan 4000 kişi" className={s.social}><TbBrandTwitter/></a>
        <a target="blank" href="https://www.youtube.com/sakaryarehberimcom" title="Videolarla Sakarya" className={s.social}><TbBrandYoutube/></a>                  
        <a target="blank" href="https://t.me/sakaryarehberimgenel" title="Sakarya haberleri Telegram'da" className={s.social}><TbBrandTelegram/></a>
</div>         */}

      
  
      </div>
    )
  }
  




  
  const HizliErisim = () => {

    return (
      <div className={s.blockwr}>                   
                  
      <div className={s.blocktitle}>Hızlı Erişim</div>                  
      
      <div className={s.blockinnergridwr}>          

          <div className={s.blockinner}><span><RiHome2Fill/></span> Hakkımızda </div>
          <div className={s.blockinner}><span><RiHome2Fill/></span> Ürünler </div>
          <div className={s.blockinner}><span><RiHome2Fill/></span> Foto Galeri </div>
          <div className={s.blockinner}><span><RiHome2Fill/></span> Videolar </div>
          <div className={s.blockinner}><span><RiHome2Fill/></span> Blog </div>
          <div className={s.blockinner}><span><RiHome2Fill/></span> Etiketler </div>

      </div>

</div>
           )

  }
  
  
  
  const BizeUlasin = () => {
    return (
          <div className={s.blockwr}>                   
                  
                  <div className={s.blocktitle}>Bize Ulaşın</div>                  
                  <div className={s.blockitem}><span><RiHome2Fill/></span> Rüstempaşa Mahallesi Kuruçay Mevkii Sapanca / SAKARYA </div>
                  <div className={s.blockitem}><span><RiCellphoneFill/></span> 0 534 6045154 </div>
                  <div className={s.blockitem}><span><RiMailFill/></span> bilgi@vitalisbotanik.com </div>

          </div>
    )
  }
  