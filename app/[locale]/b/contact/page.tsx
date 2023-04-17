import WebData from "@/components/utils/webdata";
import s from "./page.module.css"

import { RiMapPin2Fill, RiMailFill, RiCellphoneFill } from "react-icons/ri";



export default async function Page  () {
  let resdata=await WebData();

  // console.log("resdata:::", resdata);

  return (
    <div className={s.shell}>
      
            
            <div className={s.pagetitle}>İletişim</div>

            <div className={s.mainwr}>

                <div className={s.sectionwr}>                    
                      <div className={s.sectiontitle}>İletişim Formu</div>
                      <div className={s.form}>Form</div>
                </div>


                <div className={s.sectionwr}>                    
                      <div className={s.sectiontitle}>İletişim Bilgileri</div>
                      <div className={s.info}><ContactInfo/></div>   
                </div>
                         
            </div>
    </div>
  )
}




const ContactInfo = () => {
    return (
        <div className={s.ci_shell}>
          

          <Address/>          
          <Phones/>          
          <Email/>          


        </div>    
    )
}




const Email = () => {
  return (
    <div className={s.ci_itemwr}>
            
            
    <div className={s.ci_itemicon}><RiMailFill/></div>
    <div className={s.ci_itemdatawr}>
          <div className={s.ci_itemtitle}>E-Posta</div>
          <div className={s.ci_itemdata}>info@mitraemlak.com</div>                                  
    </div>          

  </div>
  )
}



const Address = () => {
  return (
    <div className={s.ci_itemwr}>
            
            
    <div className={s.ci_itemicon}><RiMapPin2Fill/></div>
    <div className={s.ci_itemdatawr}>
          <div className={s.ci_itemtitle}>Adres</div>
          <div className={s.ci_itemdata}>Pazarcı Mah. Uğur Mumcu Cad. 134/A Antalya / Gazipaşa</div>                                  
    </div>          

  </div>
  )
}



const Phones = () => {
  return (
    <div className={s.ci_itemwr}>
            
            
    <div className={s.ci_itemicon}><RiCellphoneFill/></div>
    <div className={s.ci_itemdatawr}>
          <div className={s.ci_itemtitle}>Telefon</div>
          
          <div className={s.ci_itemdata}>
            <span>Sefa Demiral</span>
            <span>0 554 111 06 22</span>
          </div>       


          <div className={s.ci_itemdata}>
            <span>Ümit Demiral</span>
            <span>0 554 333 06 68</span>
          </div>       


          <div className={s.ci_itemdata}>
            <span>Valentina Koç</span>
            <span>0 554 555 06 68</span>
          </div>                                            
    </div>          

  </div>
  )
}
