import Image from 'next/image'
import s from "./index.module.css"    

 export   const Bant2 = (props) => {

    let {data, fileObjects} = props ?? {};
    let {items} = data ?? {};

    let bg=data?.img_tr
     let backgroundImage =  bg ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bg})` : "url(/themes/vitalis/bant2.jpg)"    
    // let bant2_icon1 =  bant2?.icon1 ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bant2?.icon1})` : "/themes/vitalis/bant2_1.png"
    // let bant2_icon2 =  bant2?.icon2 ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bant2?.icon1})` : "/themes/vitalis/bant2_2.png"
    // let bant2_icon3 =  bant2?.icon3 ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bant2?.icon1})` : "/themes/vitalis/bant2_3.png"
    

    return (
                <div className={s.bantWr} style={{backgroundImage}}>
                    {/* {JSON.stringify(data)} */}


                    <div className={s.bantItems} >

                                                        {
                                                    items?.map(item=> {

                                                                        // let fileObject=fileObjects?.find(   a=> a?.slug_tr==item?.subitems?.[1].data_tr   )
                                                                        let link = `/c/${item?.slug_tr}/${item?.id}`;
                                                                        return <div>
                                                                                        {/* {JSON.stringify(pro?.files_tr)} */}

                                                                                        {/* <div className={s.productWr}> 
                                                                                            <div className={s.productTitle}> {pro?.title_tr} </div>
                                                                                            <Link href={link} >
                                                                                            <Image src={ `${process.env.NEXT_PUBLIC_IMGSOURCE}/${fileObject?.bigdata?.folder}/${fileObject?.bigdata?.filename}`  ?? "/themes/vitalis/product1.jpg"} width={300} height={225} className={s.imgstyle}/>                                 
                                                                                            </Link>
                                                                                        </div> */}

                                                                                    {/* {item?.subitems?.[1].data_tr} */}
                                                                                        <div className={s.bantitem}>
                                                                                            <Image src={`${process.env.NEXT_PUBLIC_IMGSOURCE}/${item?.subitems?.[1].data_tr}`} width={150} height={150}/>
                                                                                            <div>{item?.subitems?.[0]?.data_tr ?? "Farklı Tasarımlar"}</div>
                                                                                        </div>                                                    

                                                                            </div>


                                                    })

                                                }

                    </div>



                {/* <div className={s.bantinner}> 
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
                </div> */}


                

                <div className={s.bantinner}> 
                {data?.data_tr ?? "Yenilikçi ürünler, sizlere özel bambaşka bahçeler, rengârenk bitkiler ile nefes alan mekânlar..."}
                </div>


            </div>
    )
  }
  
  
  

  {/* <div className={s.bantWr} style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${"adsadsa"})`}}> */}