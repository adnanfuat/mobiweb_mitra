import Image from 'next/image'


import { MdCallEnd, MdFacebook, MdEmail } from "react-icons/md";

import { RiInstagramLine, RiFacebookBoxLine, RiMailFill, RiWhatsappFill, RiPhoneFill   } from "react-icons/ri";





import s from "./index.module.css"    

 export   const Shortcuts = (props) => {

  let {instagram, facebook, whatsapp, whatsapp_text, phone} = props ?? {};

    return (
      <div className={s.shell}>
        
          {/* assda{JSON.stringify(props)} */}

          <div className={s.item} style={{color:"#cb06cd"}}><a href={instagram} target={"_blank"}><RiInstagramLine size={35}/></a></div>
          <div className={s.item} style={{color:"#22529c"}}><a href={facebook} target={"_blank"}><RiFacebookBoxLine size={35}/></a></div>
          {/* <div className={s.item} style={{color:"#e5b117"}}><a href={}><RiMailFill size={35}/></a></div>                 */}
          
          
          
          <div className={s.item}> <a href={`tel:${phone}`}><RiMailFill size={35}/></a> </div>
          <div className={s.item} style={{marginTop:30}}> <a href={`https://wa.me/+9${whatsapp}?text="${whatsapp_text}"`}><RiWhatsappFill size={40} color="#075E54"/></a> </div>
      </div>
    )
  }
  
  
  