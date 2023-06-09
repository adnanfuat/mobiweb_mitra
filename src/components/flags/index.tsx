"use client"
import ReactCountryFlag from "react-country-flag"
import { useRouter } from 'next/router'
import { usePathname,  } from 'next/navigation';
import { useState } from "react";
import s from "./index.module.css"
import { useDetectClickOutside } from 'react-detect-click-outside';
import Link from "next/link";

const locales= ["tr","en","fr","ar"]

export const Flags = (props) => {

    let {locale} = props ?? {}
        
    const router = useRouter();
    
    let a=getCode({locale})
    const [popup, setpopup] = useState(false)

    const ref = useDetectClickOutside({ onTriggered: ()=>setpopup(false) });

    let countryCode = a;

    if (a=="ar") // Arapçadanın flagı "sa" oalrak geçiyor...
    {
        countryCode="sa"
    }

 return (
     <div  ref={ref}  className={s.flagsmainwr} >

{/* headerssssssssssss {JSON.stringify(params)} */}

                <ReactCountryFlag
                    countryCode={countryCode}
                    svg
                    style={{
                        width: '2em',
                        height: '2em',
                    }}
                    title={a}
                    //  onClick={()=>fetch("/api/changelanguage")
                    onClick={()=> setpopup(o=>!o)}
                    // onClick={()=>router.push(`/${locale}/${pathname}`)
                    className={s.flagstyle}
                />
                        
            {popup && <div className={s.popupwr}><Popup locale={locale} setpopup={setpopup}/></div>}

     </div>
 )


}




const Popup = (props) => {

    let {locale, setpopup} = props ?? {};
    

    const router = useRouter();

    const pathname = usePathname();


  return (
    <div className={s.flagswr}>

      {locales.map((locale,i)=> {

        let a=getCode({locale});

        
        let reallink="";
        let exploededlinkparts =""

        
         const goFunc = async () => {
            
                    // if (!locale) // Default olarak tr gelmiyor.. Bu durumda biz ekleyelim...
                    // {
                    //     exploededlinkparts=`/tr/${pathname}`
                    // }
                    // else 
                    // {
                    //     exploededlinkparts =   pathname.split('/'); // Bölülerden ayır
                    //     exploededlinkparts = exploededlinkparts?.filter(ex=>ex!=""); // Boşluk geliyor dizinin başına.. Boşluklu olanlara ihtiyaç yok...
                    //     //exploededlinkparts=exploededlinkparts?.filter((a,i)=>i>1); // "/en" bu iki parçaya ayrılıyor.. Bunları at. İlk ikisi yani
                    //     console.log("ddddddddd5: ", exploededlinkparts)
                    //     exploededlinkparts=exploededlinkparts?.join("/");// Sonra bölüyle birleştir.            
                    //     exploededlinkparts=`/${locale}/${exploededlinkparts}`; // Yeni localeyi ekle
                    // }
          
                    // let fetchres= await fetch(`/api/changelanguage?locale=fr`)
                    //router.push(`/api/changelanguage?locale=${locale}`);
                    // router.replace({loca})
                    // console.log("ddddddddd5: ", locale, fetchres);
            // router.push(`${exploededlinkparts}`, {locale:locale}) ; // Yeni dile yönlendir
            //router.push(`/${locale}`);
            setpopup(o=>!o)
        }
        

        return (<div  key={i}> 
        
                        <Link href={router.asPath} locale={locale}>
                            <ReactCountryFlag
                                        countryCode={a}
                                        svg
                                        style={{
                                            width: '2em',
                                            height: '2em',
                                        }}
                                        title={a}
                                        //  onClick={()=>fetch("/api/changelanguage")
                                        // onClick={()=> setpopup(o=>!o)}
                                         onClick={()=>goFunc()               }
                                        className={s.flagstyle}
                                    />
                         </Link>

        </div>)
      })

      }



    </div>
  )
}





const getCode = ({locale}) => {



    if(locale=="tr"){
        var a ="TR"

     } else if (locale=="en") {
         var a ="GB"
     }

     else if (locale=="fr") {
         var a ="FR"
     }

     else if (locale=="ar") {
         var a ="SA"
     }


  return (a)
}
