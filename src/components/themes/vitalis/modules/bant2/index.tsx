import Image from 'next/image'
import s from "./index.module.css"    

 export   const Bant2 = (props) => {

    let {module, fileObjects} = props ?? {};
    let {items} = module ?? {};

    let bg=module?.data?.[1]?.data_tr
    let backgroundImage =  bg ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bg})` : "url(/themes/vitalis/bant2.jpg)" ;

    
    return (
                <div className={s.bantWr} style={{backgroundImage}}>
                    {/* {JSON.stringify(module)} */}

                    <div className={s.bantItems} >
                                                        {
                                                    items?.map(item=> {

                                                                        // let fileObject=fileObjects?.find(   a=> a?.slug_tr==item?.subitems?.[1].data_tr   )
                                                                        let link = `/c/${item?.slug_tr}/${item?.id}`;
                                                                        return <div>
                                                                                        {/* {JSON.stringify(pro?.files_tr)} */}                                                                                        
                                                                                        {/* {item?.subitems?.[1].data_tr} */}
                                                                                        <div className={s.bantitem}>
                                                                                            <Image src={`${process.env.NEXT_PUBLIC_IMGSOURCE}/${item?.data?.[1].data_tr}`} width={150} height={150}/>
                                                                                            <div>{item?.data?.[0]?.data_tr ?? "Farklı Tasarımlar"}</div>
                                                                                        </div>                                                    
                                                                            </div>

                                                    })

                                                }

                    </div>


                        <div className={s.bantinner}> 
                        {module?.data?.[0]?.data_tr ?? "Yenilikçi ürünler, sizlere özel bambaşka bahçeler, rengârenk bitkiler ile nefes alan mekânlar..."}
                        </div>


            </div>
    )
  }
  
  
  

  {/* <div className={s.bantWr} style={{backgroundImage:`url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${"adsadsa"})`}}> */}