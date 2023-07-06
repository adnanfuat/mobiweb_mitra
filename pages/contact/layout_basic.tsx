import s from "./page.module.css"
import { BolgeIsmiOgren } from "@/components/utils/bolgeismiogren";
import { RiMapPin2Fill, RiMailFill, RiCellphoneFill } from "react-icons/ri";
import Form from "@/components/contact/form";

const Layout_Basic = (props) => {


  let { addresses, countries, webdata, session, params } = props ?? {};

  let {locale} = params ?? {};


  let localized_data=eval(`webdata?.bigdata?.history?.[0]?.lang?.${locale}`)

  let theme=webdata?.bigdata?.theme;  
  let theme_contact=webdata?.bigdata?.theme?.modules?.contact;
  let layout_type = theme_contact?.layout_type

  let contact_page =  theme?.pages?.contact ?? {};

  let background_color = contact_page?.background_color;

  //  return <div>{JSON.stringify(localized_data)}</div>

  props = {...props, localized_data}

  return <div className={s.shell}>                      
  <div className={s.mainwr} style={{backgroundColor:background_color}}>
      <div className={s.sectionwr}>                    
            <div className={s.sectiontitle}>Mesaj Formu</div>
            <div className={s.form}><ContactForm  {...props}/></div>                        
      </div>
      <div className={s.sectionwr}>                    
            <div className={s.sectiontitle}>İletişim Bilgileri</div>
            <div className={s.info}><ContactInfo {...props}/></div>   
      </div>                                  
  </div>
</div>
}

export default Layout_Basic






const ContactForm = (props) => {

  let {session, usermessages, webdata} = props ?? {};

  return ( <div className={s.ci_shell}><Form  {...props}/></div> )
}



const ContactInfo = (props) => {

  let {addresses, countries, localized_data} = props ?? {};
  
    return (
        <div className={s.ci_shell}>          
              <Addresses {...props}/>          
              <Phones {...props}/>
              <Email {...props}/>
        </div>    
    )
}





const Email = (props) => {

  let {addresses, countries, localized_data} = props ?? {};


    // return (<div>{JSON.stringify(localized_data)}</div>)
  return (
    <div className={s.ci_itemwr}>
            
            
    <div className={s.ci_itemicon}><RiCellphoneFill/></div>
    <div className={s.ci_itemdatawr}>
          <div className={s.ci_itemtitle}>Telefon</div>
          
            {localized_data?.emails?.map((item, i)=>{
                                
                                    return <div className={s.ci_itemdatawr}  key={i}> {item?.label}
                                                  
                                                  <div className={s.ci_itemdata}>
                                                                                                        
                                                    <span>{item?.mail} </span>
                                                  </div>        
                                          
                                          </div>  

                              })
                        }

    </div>          

  </div>
  )
}



const Addresses = (props) => {
  
  let {addresses, countries, localized_data} = props ?? {};

  
  return (
    <div className={s.ci_itemwr}>
            
        
          <div className={s.ci_itemicon}><RiMapPin2Fill/></div>
          <div className={s.ci_itemdatawr}>
                <div className={s.ci_itemtitle}>Adres</div>

                <div className={s.itemswr}>
                        {localized_data?.addresses?.map((addressitem, i)=>{
                                
                                    return <div className={s.ci_itemdata}  key={i}>{addressitem?.address} {BolgeIsmiOgren(addressitem?.subdistrict_slug, "mahalle", countries) ?? ""} {BolgeIsmiOgren(addressitem?.district_slug, "ilce", countries) ?? ""} {BolgeIsmiOgren(addressitem?.city_slug, "il", countries) ?? ""} {BolgeIsmiOgren(addressitem?.country_slug, "ulke", countries) ?? ""}</div>  

                              })
                        }
                </div>
          </div>     
           

  </div>
  )
}



const Phones = (props) => {
  
  let {addresses, countries, localized_data} = props ?? {};

  return (
    <div className={s.ci_itemwr}>
            
            
    <div className={s.ci_itemicon}><RiCellphoneFill/></div>
    <div className={s.ci_itemdatawr}>
          <div className={s.ci_itemtitle}>Telefon</div>
          
            {localized_data?.phones?.map((item, i)=>{
                                
                                    return <div className={s.ci_itemdatawr}  key={i}> {item?.label}
                                                  
                                                  <div className={s.ci_itemdata}>
                                                    <span>0</span>
                                                    <span>{item?.areacode} </span>
                                                    <span>{item?.phone} </span>
                                                  </div>        
                                          
                                          </div>  

                              })
                        }

    </div>          

  </div>
  )
}

