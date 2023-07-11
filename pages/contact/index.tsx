import s from "./page.module.css"


import Layout_Basic from "./layout_basic"; "./layout_basic"
import {localeStatic} from "@/constants/localestatic";
import { RiMapPin2Fill, RiMailFill, RiCellphoneFill } from "react-icons/ri";
import dictionaryFunc from "@/components/utils/dictionaryfunc";
import { DesignLayout_Vitalis_BackPages } from "@/src/components/themes/vitalis/layouts/designlayout_vitalis_backpages";
import { DesignLayout_Vitalis } from "@/src/components/themes/vitalis/layouts/designlayout_vitalis";
import { DesignLayout_Mitra_BackPages } from "@/themes/mitra/layouts/designlayout_mitra_backpages";
import { DesignLayout_Arges } from "@/themes/arges/layouts/designlayout_arges";
import DictionaryData from "@/components/utils/dictionarydata";
import WebData from "@/components/utils/webdata";
import { cacheCountries } from "@/components/utils/cachecountries";
import { useIsLogged} from "@/components/utils/islogged";


const Contact = (props) => {

  let {params, dictionary, webdata, fileobjects, category, advert, countries} = props ?? {}
  let {locale, slug} = params ?? {}
  
  let logged = useIsLogged();

  let {session} = logged ?? {}

     
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
  // console.log("sdsadsadssd", webdata?.bigdata)

  let contact_props={session, params, webdata, countries, addresses}
    
  if (theme_name=="mitra") {
    return (<DesignLayout_Mitra_BackPages title={`İletişim`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RsData {...contact_props}/> </DesignLayout_Mitra_BackPages> )                      
  }
  else if (theme_name=="arges") {
    return (<DesignLayout_Arges title={`İletişim`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RsData {...contact_props}/> </DesignLayout_Arges> )                      
  }
  else if (theme_name=="vitalis") {
    return (<DesignLayout_Vitalis_BackPages title={`İletişim`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}><RsData {...contact_props} /> </DesignLayout_Vitalis_BackPages> )                      
  }     
  else 
  {
    return (<DesignLayout_Mitra_BackPages title={`İletişim`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RsData {...contact_props}/> </DesignLayout_Mitra_BackPages> )                      
  }   


     
}

export default Contact


const RsData =  (props) => {

  let { addresses, countries, webdata, session } = props ?? {};

  let theme=webdata?.bigdata?.theme;
  let theme_contact=webdata?.bigdata?.theme?.modules?.contact;
  let layout_type = theme_contact?.layout_type

  let contact_page =  theme?.pages?.contact ?? {};

  let background_color = contact_page?.background_color;

  // console.log("sessssssasa", session)
  
  

    if (layout_type=="doctor" || !layout_type ) {return  <Layout_Basic {...props}/>}
    // else if (layout_type=="twocolumn") {  return  <Layout_TwoColumn {...props}/>}
                else return ( <div className={s.xxx}> Layout Type gelmedi... {layout_type} </div>)

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

