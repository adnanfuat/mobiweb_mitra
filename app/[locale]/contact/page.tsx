import s from "./page.module.css"
import { BolgeIsmiOgren } from "@/components/utils/bolgeismiogren";
import WebData from "@/components/utils/webdata";
import Form from "./form";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]"
import {localeStatic} from "@/constants/localestatic";
import { RiMapPin2Fill, RiMailFill, RiCellphoneFill } from "react-icons/ri";
import { cacheCountries } from "@/components/utils/cachecountries";
import HeaderComp from "@/components/headercomp";
import { DesignLayout } from "@/layouts/designlayout";
import DictionaryData from "@/components/utils/dictionarydata";
import dictionaryFunc from "@/components/utils/dictionaryfunc";


export default async function Page  ({params}) {

  let  countries = await cacheCountries();
  
  params= params.locale ? params : {...params, locale:localeStatic}; // Eğer locale gelmemişse localestatic'i atıyoruz

  let {locale} = params ?? {}

  let webdata=        await WebData();
  let dictionary  =   await DictionaryData({locale});
  const session   =   await getServerSession(authOptions);

  let iletisim =         dictionaryFunc({key:"1668310884_999", dictionary}).text;
  let mesaj_formu =         dictionaryFunc({key:"1668310884_999", dictionary}).text;

  let info = webdata?.bigdata?.history[0];
  let lang = info?.lang;
  let selectedlang = eval(`lang.${locale}`);
  let defaultlang = eval(`lang.${localeStatic}`);
  let selectedaddresses= selectedlang?.addresses;
  let defaultaddresses = defaultlang?.addresses;

  let addresses = (selectedaddresses && selectedaddresses?.length>0) ?  selectedaddresses : defaultaddresses
  // console.log("webdata::::::::sadasdsdadsa", webdata);  
  let sidepadding = 42;

     return (
      <DesignLayout title={iletisim} dictionary={dictionary} params={params} webdata={webdata}> 

        <div className={s.shell}>
              
              <div className={s.mainwr}>
                  <div className={s.sectionwr}>                    
                        <div className={s.sectiontitle}>Mesaj Formu</div>
                        <div className={s.form}><ContactForm session={session} webdata={webdata}/></div>                        
                  </div>


                  <div className={s.sectionwr}>                    
                        <div className={s.sectiontitle}>İletişim Bilgileri</div>
                        <div className={s.info}><ContactInfo addresses={addresses} countries={countries}/></div>   
                  </div>
                          
              </div>
        </div>

        </DesignLayout>        
  )
}



const ContactForm = (props) => {

  let {session, usermessages, webdata} = props ?? {};

  return ( <div className={s.ci_shell}><Form session={session} usermessages={usermessages} webdata={webdata}/></div> )
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
