import Image from 'next/image'
import s from "./index.module.css"    

 export   const Bant2 = () => {
    return (



<div className={s.bantWr} style={{backgroundImage:`url(/themes/vitalis/bant2.jpg)`}}>

        <div className={s.bantinner}> 
            <div   className={s.bantitem}>
                <Image src={"/themes/vitalis/bant2_1.png"} width={150} height={150}/>
                <div>Size Özel</div>
            </div>

            <div  className={s.bantitem}>
                <Image src={"/themes/vitalis/bant2_2.png"} width={150} height={150}/>
                <div>Farklı Tasarımlar</div>
            </div>

            <div   className={s.bantitem}>
                <Image src={"/themes/vitalis/bant2_3.png"} width={150} height={150}/>
                <div>Yenilikçi Ürünler</div>
            </div>
        </div>


        

        <div className={s.bantinner}> 
        Yenilikçi ürünler, sizlere özel bambaşka bahçeler, rengârenk bitkiler ile nefes alan mekânlar...
        </div>


      </div>
    )
  }
  
  
  

  {/* <div className={s.bantWr} style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${"adsadsa"})`}}> */}