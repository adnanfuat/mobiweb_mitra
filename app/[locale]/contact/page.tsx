import s from "./page.module.css"
import { BolgeIsmiOgren } from "@/components/utils/bolgeismiogren";
import WebData from "@/components/utils/webdata";
import Form from "./form";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../pages/api/auth/[...nextauth]"
import {localeStatic} from "@/constants/localestatic";
import { RiMapPin2Fill, RiMailFill, RiCellphoneFill } from "react-icons/ri";
import { cacheCountries } from "@/components/utils/cachecountries";
import HeaderComp from "@/components/header/headercomp";
import { DesignLayout } from "@/layouts/designlayout";
import DictionaryData from "@/components/utils/dictionarydata";
import dictionaryFunc from "@/components/utils/dictionaryfunc";
import { DesignLayout_Theme_Vitalis } from "@/themes/theme_vitalis/layouts/designlayout_theme_vitalis";
import { DesignLayout_Theme_Mitra } from "@/themes/theme_mitra/layouts/designlayout_theme_mitra";


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


  
  let logofiles =  lang?.tr?.logofiles;

    let fileobjects =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
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


  let theme_name = webdata?.bigdata?.theme?.name;
    
  if (theme_name=="theme_mitra") {
    return (<DesignLayout_Theme_Mitra title={`İletişim`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RsData params={params}  webdata={webdata}/> </DesignLayout_Theme_Mitra> )                      
  }
  else if (theme_name=="theme_arges") {
    return (<DesignLayout_Theme_Arges title={`İletişim`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RsData  params={params}  webdata={webdata}/> </DesignLayout_Theme_Arges> )                      
  }
  else if (theme_name=="theme_vitalis") {
    return (<DesignLayout_Theme_Vitalis title={`İletişim`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}><RsData addresses={addresses} webdata={webdata} session={session} countries={countries} /> </DesignLayout_Theme_Vitalis> )                      
  }     
  else 
  {
    return (<DesignLayout_Theme_Mitra title={`İletişim`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RsData params={params}  webdata={webdata}/> </DesignLayout_Theme_Mitra> )                      
  }   


     
}





const RsData = async (props) => {

      let { addresses, countries, webdata, session } = props ?? {};

      let theme=webdata?.bigdata?.theme;

      let contact_page =  theme?.pages?.contact ?? {};

      let background_color = contact_page?.background_color;

      

      return <div className={s.shell}>                      
                  <div className={s.mainwr} style={{backgroundColor:background_color}}>
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


