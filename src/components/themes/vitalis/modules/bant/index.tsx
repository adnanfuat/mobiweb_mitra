import Image from 'next/image'
import s from "./index.module.css"    

 export   const Bant = () => {
    return (



<div className={s.bantWr} style={{backgroundImage:`url(/themes/vitalis/bant.jpg)`}}>

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