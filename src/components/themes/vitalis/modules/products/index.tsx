import Image from 'next/image'
import Link from 'next/link';
import s from "./index.module.css"    

 export   const Products = (props) => {
      
    let {fileObjects, products, module} = props ?? {};

    return (

<div className={s.productsMainWr}>         

{/* {JSON.stringify(module)} */}

        <div className={s.title}> {module?.data?.[0]?.data_tr ?? "Ürünler"} </div>
        
        <div className={s.productsWr}>
            {
                products?.map(pro=> {

                                    let fileObject=fileObjects?.find(   a=> a?.slug_tr==pro?.files_tr?.[0]   )
                                    let link = `/c/${pro?.slug_tr}/${pro?.id}`;
                                    return <div>
                                                    {/* {JSON.stringify(pro?.files_tr)} */}

                                                    <div className={s.productWr}> 
                                                        <div className={s.productTitle}> {pro?.title_tr} </div>
                                                        <Link href={link} >
                                                        <Image src={ `${process.env.NEXT_PUBLIC_IMGSOURCE}/${fileObject?.bigdata?.folder}/${fileObject?.bigdata?.filename}`  ?? "/themes/vitalis/product1.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
                                                        </Link>
                                                    </div>

                                        </div>


                })

            }

              {/* <div className={s.productWr}> 
                  <div className={s.productTitle}> İğneliler </div>
                  <Image src={"/themes/vitalis/product1.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> İbreliler </div>
                  <Image src={"/themes/vitalis/product2.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> Çalılar </div>
                  <Image src={"/themes/vitalis/product3.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> Sukulent ve Kaktüsler </div>
                  <Image src={"/themes/vitalis/product4.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> İç Mekan Süs Bitkileri </div>
                  <Image src={"/themes/vitalis/product5.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> Palmiyeler </div>
                  <Image src={"/themes/vitalis/product6.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> Mevsimlik ve Yer Örtücüler </div>
                  <Image src={"/themes/vitalis/product7.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
              </div>

              <div className={s.productWr}> 
                  <div className={s.productTitle}> Çim </div>
                  <Image src={"/themes/vitalis/product8.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
              </div>                                                                                                   */}
              

        </div>
                                                                                   

      </div>
    )
  }
  
  
  