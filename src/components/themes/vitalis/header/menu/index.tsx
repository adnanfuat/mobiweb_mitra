import Link from "next/link";
import s from "./menu.module.css"
import dictionaryFunc from "@/utils/dictionaryfunc";
export const Menu =  (props) => {

    let { params , dictionary, webdata } = props ?? {};
    let {locale} = params ?? {}

    //  console.log("params:::", dictionary);
    // locale = locale ? locale : "tr";

    let menu = webdata?.bigdata?.menu ?? {} 
          
    let ana_sayfa      =   dictionaryFunc({key:"1682173393396", dictionary}).text;
    let hakkimizda     =   dictionaryFunc({key:"1682173354630", dictionary}).text;
    let emlak_ilanlari =   dictionaryFunc({key:"1683425090715", dictionary}).text;
    let hizmetler      =   dictionaryFunc({key:"1683425098924", dictionary}).text;
    let iletisim       =   dictionaryFunc({key:"1668310884_999", dictionary}).text;
    let urunler        =   dictionaryFunc({key:"1685105157639", dictionary}).text;
    let galeri        =   dictionaryFunc({key:"1687698859805", dictionary}).text;
        
                      
    return (
        <div className={s.menuwr}>            

                  <Link href={`/`} className={s.menuitem}  style={itemFunc({type:"main_page", menu})?.style}> {ana_sayfa} </Link>

                  {/* <Link href={`/`} className={s.menuitem}  >{hakkimizda}</Link> */}

                  {itemFunc({type:"real_estates", menu})?.visible && <Link href={`/ads`} className={s.menuitem} style={itemFunc({type:"real_estates", menu})?.style}> {emlak_ilanlari} </Link>}                  

                  <Link href={`/u/urunler`} className={s.menuitem} > {urunler} </Link>                  
                  <Link href={`/h/hizmetler`} className={s.menuitem} > {hizmetler} </Link>           
                  <Link href={`/g/galeri`} className={s.menuitem} > {galeri} </Link>    
                  <Link href={`/contact`} className={s.menuitem}  > {iletisim} </Link>
                  
                                      {/* <style jsx>{`
                                    .additional {
                                                background-color: red;
                                              }

                                  `}</style> */}
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
  