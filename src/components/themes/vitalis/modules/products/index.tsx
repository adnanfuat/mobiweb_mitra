import Image from 'next/image'
import s from "./index.module.css"    

 export   const Products = () => {
    return (

<div className={s.productsMainWr}>

        <div className={s.title}> Ürünler </div>
        

        <div className={s.productsWr}>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> İğneliler </div>
                  <Image src={"/themes/vitalis/product1.jpg"} width={300} height={225}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> İbreliler </div>
                  <Image src={"/themes/vitalis/product2.jpg"} width={300} height={225}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> Çalılar </div>
                  <Image src={"/themes/vitalis/product3.jpg"} width={300} height={225}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> Sukulent ve Kaktüsler </div>
                  <Image src={"/themes/vitalis/product4.jpg"} width={300} height={225}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> İç Mekan Süs Bitkileri </div>
                  <Image src={"/themes/vitalis/product5.jpg"} width={300} height={225}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> Palmiyeler </div>
                  <Image src={"/themes/vitalis/product6.jpg"} width={300} height={225}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> Mevsimlik ve Yer Örtücüler </div>
                  <Image src={"/themes/vitalis/product7.jpg"} width={300} height={225}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> Çim </div>
                  <Image src={"/themes/vitalis/product8.jpg"} width={300} height={225}/>                                 
              </div>                                                                                                  

              


        </div>
                                                                                   

      </div>
    )
  }
  
  
  