import Image from 'next/image'
import Link from 'next/link';
import s from "./index.module.css"    

 export   const ImageBoards = () => {


    return (

<div className={s.imageboardsMainWr}>
                
        <div className={s.imageboardsWr}>

              <Board title={"Hakkımızdaki Yorumlar"} bgimage={"ib_1.jpg"} />                                                                                                       

              <Board title={"Videolar"} bgimage={"ib_2.jpg"}/>       
              
        </div>
                                                                                   
      </div>
    )
  }
  
  
  

  
  
  const Board = (props) => {

    let {title, bgimage} = props ?? {};

    return (
      <div className={s.imageboardWr} style={{backgroundImage:`url(/themes/vitalis/${bgimage})`}}> 
                  
                  <div className={s.imageboardTitle}> <Link href={"#"}>{title}</Link> </div>
                  {/* <Image src={"/themes/vitalis/product1.jpg"} width={300} height={225}/>                                  */}                                    
              </div>
    )
  }
  