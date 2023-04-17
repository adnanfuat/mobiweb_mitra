import Link from "next/link";
import s from "./menu.module.css"
export const Menu = (props) => {

    let {xxx} = props ?? {};
  
    
  
    return (
        <div className={s.menuwr} >                 
                  <Link href={"/"} className={s.menuitem}>Ana Sayfa</Link>
                  <Link href={"/"} className={s.menuitem}>Kurumsal</Link>
                  <Link href={"/"} className={s.menuitem}>Emlak İlanları</Link>                  
                  <Link href={"/b/contact"} className={s.menuitem}>İletişim</Link>
        </div>
    )
  }
  