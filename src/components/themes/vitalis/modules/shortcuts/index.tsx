import Image from 'next/image'


import { MdCallEnd, MdFacebook, MdEmail } from "react-icons/md";

import { RiInstagramLine, RiFacebookBoxLine, RiMailFill  } from "react-icons/ri";





import s from "./index.module.css"    

 export   const Shortcuts = () => {
    return (
      <div className={s.shell}>

          <div className={s.item} style={{color:"#cb06cd"}}><RiInstagramLine size={35}/></div>
          <div className={s.item} style={{color:"#22529c"}}><RiFacebookBoxLine size={35}/></div>
          <div className={s.item} style={{color:"#e5b117"}}><RiMailFill size={35}/></div>                
          <div className={s.item} style={{marginTop:30}}><MdCallEnd size={40}/></div>
      </div>
    )
  }
  
  
  