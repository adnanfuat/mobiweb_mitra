"use client"
import ReactCountryFlag from "react-country-flag"
import { useRouter, ReadonlyURLSearchParams } from 'next/navigation'
import { usePathname,  } from 'next/navigation';
import { useState } from "react";
import s from "./index.module.css"
import { useDetectClickOutside } from 'react-detect-click-outside';

const locales= ["tr","en","fr","ar"]

export const Flags = ({locale, params}) => {

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
     <div style={{position:"absolute" , right:7, top:3}} ref={ref} >

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
                        
            {popup && <div className={s.popupwr}><Popup params={params} setpopup={setpopup}/></div>}

     </div>
 )


}




const Popup = (props) => {

    let {params, setpopup} = props ?? {};
    let {locale} = params ?? {};

    const router = useRouter();

    const pathname = usePathname();


  return (
    <div className={s.flagswr}>

      {locales.map((locale,i)=> {

        let a=getCode({locale});

        
        let reallink="";
        let exploededlinkparts =""



        
         const goFunc = () => {
            
                    if (!locale) // Default olarak tr gelmiyor.. Bu durumda biz ekleyelim...
                    {
                        exploededlinkparts=`/tr/${pathname}`
                    }
                    else 
                    {
                        exploededlinkparts =   pathname.split('/'); // Bölülerden ayır
                        exploededlinkparts=exploededlinkparts?.filter((a,i)=>i>1); // "/en" bu iki parçaya ayrılıyor.. Bunları at. İlk ikisi yani
                        exploededlinkparts=exploededlinkparts?.join("/");// Sonra bölüyle birleştir.            
                        exploededlinkparts=`/${locale}/${exploededlinkparts}`; // Yeni localeyi ekle
                        console.log("ddddddddd5: ", exploededlinkparts)
                    }
          
            router.push(`${exploededlinkparts}`) ; // Yeni dile yönlendir
            setpopup(o=>!o)
        }
        

        return (<div  key={i}>

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
