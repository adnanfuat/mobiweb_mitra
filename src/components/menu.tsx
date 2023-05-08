import Link from "next/link";
import s from "./menu.module.css"
import dictionaryFunc from "./utils/dictionaryfunc";
export const Menu = (props) => {

    let {dictionary,  params } = props ?? {};
      
    let {locale} = params ?? {}

    let ana_sayfa = dictionaryFunc({key:"1682173393396", dictionary}).text;
    let hakkimizda = dictionaryFunc({key:"1682173354630", dictionary}).text;
    let emlak_ilanlari = dictionaryFunc({key:"1683425090715", dictionary}).text;
    let hizmetler = dictionaryFunc({key:"1683425098924", dictionary}).text;
    let iletisim = dictionaryFunc({key:"1668310884_999", dictionary}).text;
        
        

        locale = locale ? locale : "tr";

    
  
    return (
        <div className={s.menuwr} >    
          {/* {JSON.stringify(dictionary)}    - {locale}        */}
                  <Link href={"/"} className={s.menuitem}>  {ana_sayfa} </Link>
                  <Link href={"/"} className={s.menuitem}>{hakkimizda}</Link>
                  <Link href={"/ads"} className={s.menuitem}>{emlak_ilanlari}</Link>                  
                  <Link href={"/b/services"} className={s.menuitem}>{hizmetler}</Link>                  
                  <Link href={"/contact"} className={s.menuitem}>{iletisim}</Link>
        </div>
    )
  }
  