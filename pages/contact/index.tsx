import s from "./page.module.css"
import { BolgeIsmiOgren } from "@/components/utils/bolgeismiogren";
import Form from "@/components/contact/form";
import {localeStatic} from "@/constants/localestatic";
import { RiMapPin2Fill, RiMailFill, RiCellphoneFill } from "react-icons/ri";
import dictionaryFunc from "@/components/utils/dictionaryfunc";
import { DesignLayout_Vitalis_BackPages } from "@/themes/vitalis/layouts/designlayout_vitalis_backpages";
import { DesignLayout_Mitra_BackPages } from "@/themes/mitra/layouts/designlayout_mitra_backpages";
import { DesignLayout_Arges } from "@/themes/arges/layouts/designlayout_arges";
import DictionaryData from "@/components/utils/dictionarydata";
import WebData from "@/components/utils/webdata";
import { cacheCountries } from "@/components/utils/cachecountries";


const Contact = (props) => {

  let {params, dictionary, webdata, fileobjects, category, advert, countries} = props ?? {}
  let {locale, slug} = params ?? {}
    
  //params= locale ? params : {...params, locale:localeStatic}; // Eğer locale gelmemişse localestatic'i atıyoruz
      
  let iletisim =     dictionaryFunc({key:"1668310884_999", dictionary}).text;
  let mesaj_formu =  dictionaryFunc({key:"1668310884_999", dictionary}).text;

  let info = webdata?.bigdata?.history[0];
  let lang = info?.lang;
  let selectedlang = eval(`lang.${locale}`);
  let defaultlang = eval(`lang.${localeStatic}`);
  let selectedaddresses= selectedlang?.addresses;
  let defaultaddresses = defaultlang?.addresses;

  let addresses = (selectedaddresses && selectedaddresses?.length>0) ?  selectedaddresses : defaultaddresses  
  
  let logofiles =  lang?.tr?.logofiles;
      
  let logo = fileobjects?.find(f=>f?.slug_tr  == logofiles[0])


  let theme_name = webdata?.bigdata?.theme?.name;
    
  if (theme_name=="mitra") {
    return (<DesignLayout_Mitra_BackPages title={`İletişim`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RsData params={params}  webdata={webdata}/> </DesignLayout_Mitra_BackPages> )                      
  }
  else if (theme_name=="arges") {
    return (<DesignLayout_Arges title={`İletişim`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RsData  params={params}  webdata={webdata}/> </DesignLayout_Arges> )                      
  }
  else if (theme_name=="vitalis") {
    return (<DesignLayout_Vitalis_BackPages title={`İletişim`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}><RsData addresses={addresses} webdata={webdata}  countries={countries} /> </DesignLayout_Vitalis_BackPages> )                      
  }     
  else 
  {
    return (<DesignLayout_Mitra_BackPages title={`İletişim`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RsData params={params}  webdata={webdata}/> </DesignLayout_Mitra_BackPages> )                      
  }   


     
}

export default Contact



const RsData =  (props) => {

      let { addresses, countries, webdata, session } = props ?? {};

      let theme=webdata?.bigdata?.theme;

      let contact_page =  theme?.pages?.contact ?? {};

      let background_color = contact_page?.background_color;

      

      return <div className={s.shell}>                      
                  <div className={s.mainwr} style={{backgroundColor:background_color}}>
                      <div className={s.sectionwr}>                    
                            <div className={s.sectiontitle}>Mesaj Formu</div>
                            <div className={s.form}><ContactForm  webdata={webdata}/></div>                        
                      </div>
                      <div className={s.sectionwr}>                    
                            <div className={s.sectiontitle}>İletişim Bilgileri</div>
                            <div className={s.info}><ContactInfo addresses={addresses} countries={countries}/></div>   
                      </div>                                  
                  </div>
            </div>

}



const ContactForm = (props) => {

  let {session, usermessages, webdata} = props ?? {};

  return ( <div className={s.ci_shell}><Form  usermessages={usermessages} webdata={webdata}/></div> )
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




export async function getStaticProps(data) {

  let {defaultLocale, locale } = data ?? {};
  
 
   let dictionary= await DictionaryData({locale: locale ?? "tr"});  
   let webdata=await WebData();
   let countries=await cacheCountries();
   
   let theme_name = webdata?.bigdata?.theme?.name;               
    
   let cuffs= webdata?.bigdata?.history?.[0]?.lang?.tr?.cuffs;
   let lang= webdata?.bigdata?.history?.[0]?.lang?.tr;
   let logofiles =  lang?.logofiles;
   
 
     let fileobjects =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
       next:{revalidate:10},                                   
       method: "POST",
       headers: { "Content-Type": "application/json", },
       body: JSON.stringify({
         query: FilesQuery_SpecialRequests,
         variables:{data:{specialrequests:logofiles}} 
       })
     })
       .then((res) => res.json())
       .then((result) => { return result?.data?.filesquery_specialrequests; });    
       
       let logo = fileobjects?.find(f=>f?.slug_tr  == logofiles[0])
 
                                                                        
     let props = { webdata, dictionary, fileobjects, logo,  countries, params:{locale} };
                        
     return { props, revalidate: 20 };
                               
 }
 



 
const FilesQuery_SpecialRequests =
`  query FilesQuery_SpecialRequests ($data:JSON )  {
      filesquery_specialrequests (data:$data) {
      id
      title_tr
      bigdata
      slug_tr
      title_tr
      active
      user
      o_key_1
    }
  }`
;

