import Image from 'next/image'
import s from "./index.module.css"    

 export  const Welcome = (props) => {

  let {data} = props ?? {};

   let {items} = data ?? {};

   let module_title= items[0].subitems?.find(c=>c?.key=="title")
   let module_image= items[0].subitems?.find(c=>c?.key=="img")
   let module_context= items[0].subitems?.find(c=>c?.key=="context")

   let module_img_url =module_image?.data_tr ? `${process.env.NEXT_PUBLIC_IMGSOURCE}/${module_image?.data_tr}` : "/themes/vitalis/welcome.jpg"


    return (

<div className={s.welcomeWr}>

        <div className={s.welcomeInnerWr}>
          
          {/* {JSON.stringify(data)} */}
          {/* {module_image?.data} */}

        <div  className={s.welcomeImage} ><Image src={module_img_url} width={612} height={349} className={s.imagestyle}/></div>  

              <div className={s.welcomeTitle}>
                
                  { module_title?.data_tr ??  "VİTALİS BOTANİK"  }
                
                <div className={s.welcomeTitleHr}>  
                    <div className={s.welcomeTitleHrBold}>  </div>  
                </div>  

              </div>  
              <div  className={s.welcomeDescription}>

              {module_context?.data_tr ?? `13 yıllık bireysel tecrübelerimiz ile çıktığımız bu yolda sizi evlerinizi ve bahçelerinizi renklendirecek bitkiler ile tanıştırmayı, keyifli zaman geçireceğiniz bahçeleri oluşturmayı ve en mutlu günlerinize ortak olabilmeyi diliyor ve bunun için bizimle tanışmanızı bekliyoruz.

              Yenilikçi ürün önerileri ve sizlerin talepleri ile bambaşka bahçeler, rengârenk bitkiler ile nefes alan evler sizleri bekliyor.`}
              
              </div>                  

              

        </div>
                

      </div>
    )
  }
  
  
  