import s from "./page.module.css"
import { BolgeIsmiOgren } from "@/components/utils/bolgeismiogren";
import WebData from "@/components/utils/webdata";
import Form from "./form";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"

import {localeStatic} from "@/constants/localestatic";
// import userMessages from "@/components/utils/usermessages";

import { RiMapPin2Fill, RiMailFill, RiCellphoneFill } from "react-icons/ri";
import { cacheCountries } from "@/components/utils/cachecountries";


export default async function Page  ({params}) {

  let  countries = await cacheCountries();

  let {locale} = params ?? {}

  let resdata=await WebData();
  const session = await getServerSession(authOptions);

  let info = resdata?.bigdata?.history[0];
  let lang = info?.lang;
  let selectedlang = eval(`lang.${locale}`);
  let defaultlang = eval(`lang.${localeStatic}`);
  let selectedaddresses= selectedlang?.addresses;
  let defaultaddresses = defaultlang?.addresses;

  let addresses = (selectedaddresses && selectedaddresses?.length>0) ?  selectedaddresses : defaultaddresses

    // console.log("resdata::::::::sadasdsdadsa", resdata);
  
  return (
    <div className={s.shell}>
      
            
            <div className={s.pagetitle}>İletişim</div>

            <div className={s.mainwr}>

                <div className={s.sectionwr}>                    
                      <div className={s.sectiontitle}>Mesaj Formu</div>
                      <div className={s.form}><ContactForm session={session} resdata={resdata}/></div>
                      {/* usermessages={usermessages} */}
                </div>


                <div className={s.sectionwr}>                    
                      <div className={s.sectiontitle}>İletişim Bilgileri</div>
                      <div className={s.info}><ContactInfo addresses={addresses} countries={countries}/></div>   
                </div>
                         
            </div>
    </div>
  )
}



const ContactForm = (props) => {

  let {session, usermessages, resdata} = props ?? {};

  return (
      <div className={s.ci_shell}>
        
          <Form session={session} usermessages={usermessages} resdata={resdata}/>
              
      </div>    
  )
}



const ContactInfo = (props) => {

  let {addresses, countries} = props ?? {};
  
    return (
        <div className={s.ci_shell}>
          

          <Addresses addresses={addresses} countries={countries}/>          
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



const Addresses = (props) => {
  
  let {addresses, countries} = props ?? {};

  
  return (
    <div className={s.ci_itemwr}>
            
        
          <div className={s.ci_itemicon}><RiMapPin2Fill/></div>
          <div className={s.ci_itemdatawr}>
                <div className={s.ci_itemtitle}>Adres</div>

                <div className={s.itemswr}>
                        {addresses?.map((addressitem, i)=>{
                                
                                    return <div className={s.ci_itemdata}  key={i}>{addressitem?.address} {BolgeIsmiOgren(addressitem?.subdistrict_slug, "mahalle", countries) ?? ""} {BolgeIsmiOgren(addressitem?.district_slug, "ilce", countries) ?? ""} {BolgeIsmiOgren(addressitem?.city_slug, "il", countries) ?? ""} {BolgeIsmiOgren(addressitem?.country_slug, "ulke", countries) ?? ""}</div>  

                              })
                        }
                </div>
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
