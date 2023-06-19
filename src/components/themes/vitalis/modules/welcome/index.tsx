import Image from 'next/image'
import s from "./index.module.css"    

 export   const Welcome = () => {
    return (

<div className={s.welcomeWr}>

        <div className={s.welcomeInnerWr}>


        <div  className={s.welcomeImage}><Image src={"/themes/vitalis/welcome.jpg"} width={612} height={349}/></div>  

              <div className={s.welcomeTitle}>
                
                  VİTALİS BOTANİK
                
                <div className={s.welcomeTitleHr}>  
                    <div className={s.welcomeTitleHrBold}>  </div>  
                </div>  

              </div>  
              <div  className={s.welcomeDescription}>

              13 yıllık bireysel tecrübelerimiz ile çıktığımız bu yolda sizi evlerinizi ve bahçelerinizi renklendirecek bitkiler ile tanıştırmayı, keyifli zaman geçireceğiniz bahçeleri oluşturmayı ve en mutlu günlerinize ortak olabilmeyi diliyor ve bunun için bizimle tanışmanızı bekliyoruz.

              Yenilikçi ürün önerileri ve sizlerin talepleri ile bambaşka bahçeler, rengârenk bitkiler ile nefes alan evler sizleri bekliyor.
              
              </div>                  

              

        </div>
                

      </div>
    )
  }
  
  
  