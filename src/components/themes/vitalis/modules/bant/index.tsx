import Image from 'next/image'
import s from "./index.module.css"    

 export   const Bant = (props) => {

  let {module} = props ?? {};
  let {data} = module ?? {};

  let module_title= data?.find(c=>c?.key=="title")
  let module_image= data?.find(c=>c?.key=="img")
   


   let module_img_url =module_image?.data_tr ? `${process.env.NEXT_PUBLIC_IMGSOURCE}/${module_image?.data_tr}` : "/themes/vitalis/bant.jpg"

  //  let backgroundImage =  bg ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bg})` : "url(/themes/vitalis/bant.jpg)"


  return (



<div className={s.bantWr} style={{backgroundImage:`url(${module_img_url})`}}>

        <div className={s.bantinner}> 
        {/* {JSON.stringify(module)} */}
          <span style={{maxWidth:610}}  className={s.banttext}>
            { module_title?.data ?? `Seçtiğiniz ürünlerin bahçe düzenlemenizde 
            nasıl görüneceğini öğrenmek ister misiniz?`        }
          </span>
        </div>
      </div>
    )
  }
  
  
  

  {/* <div className={s.bantWr} style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${"adsadsa"})`}}> */}