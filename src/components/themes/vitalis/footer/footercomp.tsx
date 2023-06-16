import Link from "next/link";
import s from "./footercomp.module.css";
import { RiHome2Fill } from "react-icons/ri";



export  default function FooterComp  (props) {
  
    let { params, logo, position,  topbottom=5, webdata, dictionary} = props ?? {};
    let {locale} = params ?? {} ;

    position= position ? position : "relative";
    let lang= webdata?.bigdata?.history?.[0]?.lang?.tr;
    let logofiles =  lang?.logofiles;              
    // let {logo, params, dictionary} = props ?? {};                  
    let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename;    
    let {width, height} = logo?.bigdata?.details ?? {};    
    props={...props, position, filename }


    return (
      <div className={s.footercompwr} style={{backgroundImage:"url(/themes/vitalis/footer_bg.jpg)", backgroundRepeat:"no-repeat"}}>

              <div className={s.footercenterwr}>
                    <div className={s.ddddd}> <BizeUlasin/> </div>
                    <div className={s.ddddd}> <HizliErisim/> </div>
                    <div className={s.ddddd}>
                      <Link href={`/`}><div className={s.logowr} style={{ backgroundImage: `url(${`${process.env.NEXT_PUBLIC_IMGSOURCE}/${filename}`})`, backgroundSize:"contain" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}></div></Link>
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
      
      <div className={s.blockinnerwr}>          

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
                  <div><span><RiHome2Fill/></span> Rüstempaşa Mahallesi Kuruçay Mevkii Sapanca / SAKARYA </div>
                  <div><span><RiHome2Fill/></span> 0 534 6045154 </div>
                  <div><span><RiHome2Fill/></span> bilgi@vitalisbotanik.com </div>                  

          </div>
    )
  }
  