import Image from 'next/image'
import Link from 'next/link';
import s from "./index.module.css"    

 export   const ImageBoards = (props) => {

  let {module} = props ?? {}
  let {items} = module ?? {}


    return (

<div className={s.imageboardsMainWr}>

  {/* {JSON.stringify(module)} */}
                
        <div className={s.imageboardsWr}>

            {items?.map((item, index)=>{


              return  <Board title={item?.data?.[0]?.data_tr} bgimage={item?.data?.[1]?.data_tr} key={index}/>

            })}


              {/* <Board title={"Hakkımızdaki Yorumlar"} bgimage={"ib_1.jpg"} />                                                                                                       

              <Board title={"Videolar"} bgimage={"ib_2.jpg"}/>        */}
              
        </div>
                                                                                   
      </div>
    )
  }
  
  
  

  
  
  const Board = (props) => {

    let {title, bgimage} = props ?? {};

    let backgroundImage = bgimage ? `url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${bgimage})` : `url(/themes/vitalis/ib_1.jpg)`

    return (
      <div className={s.imageboardWr} style={{backgroundImage}}> 

      {/* {backgroundImage} */}
                  
                  <div className={s.imageboardTitle}> <Link href={"#"}>{title}</Link> </div>
                  {/* <Image src={"/themes/vitalis/product1.jpg"} width={300} height={225}/>                                  */}                                    
              </div>
    )
  }
  