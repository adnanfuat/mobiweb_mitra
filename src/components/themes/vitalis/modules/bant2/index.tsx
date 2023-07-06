import Image from 'next/image'
import s from "./index.module.css"    

 export   const Bant2 = (props) => {

    let { params,  webdata } = props ?? {};
    let {locale} = params ?? {} ;
  
    let bant2= webdata?.bigdata?.theme?.settings?.bant2;
    let bg = bant2?.bg;
    let backgroundImage =  bg ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bg})` : "url(/themes/vitalis/bant2.jpg)"

    
    let bant2_icon1 =  bant2?.icon1 ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bant2?.icon1})` : "/themes/vitalis/bant2_1.png"
    let bant2_icon2 =  bant2?.icon2 ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bant2?.icon1})` : "/themes/vitalis/bant2_2.png"
    let bant2_icon3 =  bant2?.icon3 ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bant2?.icon1})` : "/themes/vitalis/bant2_3.png"


    


    return (



<div className={s.bantWr} style={{backgroundImage}}>

        <div className={s.bantinner}> 
            <div   className={s.bantitem}>
                <Image src={bant2_icon1} width={150} height={150}/>
                <div>Size Özel</div>
            </div>

            <div  className={s.bantitem}>
                <Image src={bant2_icon2} width={150} height={150}/>
                <div>Farklı Tasarımlar</div>
            </div>

            <div   className={s.bantitem}>
                <Image src={bant2_icon3} width={150} height={150}/>
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