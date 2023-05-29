import Link from "next/link";
import s from "./menu.module.css"
import DictionaryData from "./utils/dictionarydata";
import dictionaryFunc from "./utils/dictionaryfunc";
export const Menu = async (props) => {

    let { params , dictionary, webdata } = props ?? {};
    let {locale} = params ?? {}

    //  console.log("params:::", dictionary);
    // locale = locale ? locale : "tr";

    let menu = webdata?.bigdata?.menu ?? {} 
          
    let ana_sayfa =        dictionaryFunc({key:"1682173393396", dictionary}).text;
    let hakkimizda =       dictionaryFunc({key:"1682173354630", dictionary}).text;
    let emlak_ilanlari =   dictionaryFunc({key:"1683425090715", dictionary}).text;
    let hizmetler =        dictionaryFunc({key:"1683425098924", dictionary}).text;
    let iletisim =         dictionaryFunc({key:"1668310884_999", dictionary}).text;
    let urunler =         dictionaryFunc({key:"1685105157639", dictionary}).text;
        
                      
    return (
        <div className={s.menuwr} >  
          { JSON.stringify(menu) }
          {/* {dictionary?.[0]?.title} */}
          {/* {locale} */}
                  <Link href={`/${locale}`} className={s.menuitem} >  {ana_sayfa}  </Link>
                  {/* <Link href={`/`} className={s.menuitem}  >{hakkimizda}</Link> */}


                  {itemFunc({type:"real_estates", menu})?.visible && <Link href={`/${locale}/ads`} className={s.menuitem} style={itemFunc({type:"real_estates", menu})?.style}> {emlak_ilanlari} </Link>}                  

                  <Link href={`/${locale}/cs/urunler`} className={s.menuitem} >{urunler} </Link>                  
                  {/* <Link href={`/b/services`} className={s.menuitem}  >{hizmetler}</Link> */}
                  <Link href={`/${locale}/contact`} className={s.menuitem}  >{iletisim}</Link>
        </div>
    )
  }
  


  
  
  const itemFunc = ({type, menu}) => { //

    let relateditem = menu?.items?.find( m =>m?.type== type);

    return (
             {
              visible: relateditem?.visible,
              style: relateditem?.style
            }
           )
  }
  