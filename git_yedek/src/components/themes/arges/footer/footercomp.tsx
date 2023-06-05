import Link from "next/link";
import s from "./footercomp.module.css";
import { TbBrandFacebook, TbBrandInstagram, TbBrandTwitter, TbBrandYoutube, TbBrandTelegram } from "react-icons/tb";


  export  default function FooterComp  (props) {
  
    let {logo} = props ?? {};
  
    // let filename = logo?.bigdata?.folder+"/"+logo?.bigdata?.filename    
    // let {width, height} = logo?.bigdata?.details ?? {}
  
    return (
      <div className={s.footercompwr}>
              
      <div className={s.socials}>
              <a target="blank" href="https://www.facebook.com/sakaryarehberim" title="50.000 Sakaryalı..." className={s.social}><TbBrandFacebook/></a>
              <a target="blank" href="https://instagram.com/sakarya_rehberim" title="23.000 Sakaryalı takipçi" className={s.social}><TbBrandInstagram/></a>
              <a target="blank" href="https://twitter.com/sakaryarehberim" title="#Sakarya'dan 4000 kişi" className={s.social}><TbBrandTwitter/></a>
              <a target="blank" href="https://www.youtube.com/sakaryarehberimcom" title="Videolarla Sakarya" className={s.social}><TbBrandYoutube/></a>                  
              <a target="blank" href="https://t.me/sakaryarehberimgenel" title="Sakarya haberleri Telegram'da" className={s.social}><TbBrandTelegram/></a>
      </div>        

      <div className={s.buildtime} title="Mitra Emlak"> Arges İnşaat </div>

  
      </div>
    )
  }
  