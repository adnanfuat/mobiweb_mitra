import Link from "next/link";
import s from "./menu.module.css"
export const Menu = (props) => {

    let {dictionary,  params } = props ?? {};
      
    let {locale} = params ?? {}

        let title_obj= dictionary?.find(a=>a?.slug_tr=="ana_sayfa")
        let title=eval(`title_obj.title_${locale}`)

    locale = locale ? locale : "tr"
  
    return (
        <div className={s.menuwr} >    
          {/* {JSON.stringify(title_obj)}    - {locale}        */}
                  <Link href={"/"} className={s.menuitem}>  {title} </Link>
                  <Link href={"/"} className={s.menuitem}>Kurumsal</Link>
                  <Link href={"/"} className={s.menuitem}>Emlak İlanları</Link>                  
                  <Link href={"/b/services"} className={s.menuitem}>Hizmetler</Link>                  
                  <Link href={"/b/contact"} className={s.menuitem}>İletişim</Link>
        </div>
    )
  }
  