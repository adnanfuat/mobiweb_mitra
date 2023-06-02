import Link from "next/link";
import s from "./menu.module.css"
import dictionaryFunc from "@/utils/dictionaryfunc";


export const Menu =  (props) => {

    let { params , dictionary, webdata } = props ?? {};
    let {locale} = params ?? {}
    
    let menu = webdata?.bigdata?.menu ?? {} 
          
    let ana_sayfa      =   dictionaryFunc({key:"1682173393396", dictionary}).text;
    let hakkimizda     =   dictionaryFunc({key:"1682173354630", dictionary}).text;
    let emlak_ilanlari =   dictionaryFunc({key:"1683425090715", dictionary}).text;
    let hizmetler      =   dictionaryFunc({key:"1683425098924", dictionary}).text;
    let iletisim       =   dictionaryFunc({key:"1668310884_999", dictionary}).text;
    let urunler        =   dictionaryFunc({key:"1685105157639", dictionary}).text;
        
                      
    return (
        <div className={s.menuwr}>  
          {/* { JSON.stringify(menu) } */}
          {/* {dictionary?.[0]?.title} */}          
          {/* {locale} */}

                  <Link href={`/`} className={s.menuitem}  style={itemFunc({type:"main_page", menu})?.style}> {ana_sayfa} </Link>

                  {/* <Link href={`/`} className={s.menuitem}  >{hakkimizda}</Link> */}

                  {itemFunc({type:"real_estates", menu})?.visible && <Link href={`/ads`} className={s.menuitem} style={itemFunc({type:"real_estates", menu})?.style}> {emlak_ilanlari} </Link>}                  

                  <Link href={`/cs/urunler`} className={s.menuitem} >{urunler} </Link>                  
                  {/* <Link href={`/b/services`} className={s.menuitem}  >{hizmetler}</Link> */}
                  <Link href={`/contact`} className={s.menuitem}  >{iletisim}</Link>
                                                        
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
  