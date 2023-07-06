import Image from 'next/image'
import s from "./index.module.css"    

 export   const Bant = (props) => {

  let { params,  webdata } = props ?? {};
  let {locale} = params ?? {} ;

  let bant1= webdata?.bigdata?.theme?.settings?.bant1;
  let bg = bant1?.bg;
  let backgroundImage =  bg ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bg})` : "url(/themes/vitalis/bant.jpg)"


  return (



<div className={s.bantWr} style={{backgroundImage}}>

        <div className={s.bantinner}> 
          <span style={{maxWidth:610}}  className={s.banttext}>
            Seçtiğiniz ürünlerin bahçe düzenlemenizde 
            nasıl görüneceğini öğrenmek ister misiniz?        
          </span>
        </div>


      </div>
    )
  }
  
  
  

  {/* <div className={s.bantWr} style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${"adsadsa"})`}}> */}