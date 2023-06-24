
import CS_Shell from "@/components/cs";
import { cacheCountries } from "@/components/utils/cachecountries";
import WebData from "@/components/utils/webdata";
import DictionaryData from "@/components/utils/dictionarydata";
import { get_FileObjects_SpecialRequests } from "@/src/components/utils/get_fileobjects_specialrequests";

let bigbigparent_slug="urunler"; // Soldaki menüde hangi kategoriden itibaren aşağısnı göstereceğiz  ?


export default function Index (props){ 
  
   let {params, dictionary, webdata, fileobjects, countries, item_type, card_type, aspectratio_image  } = props ?? {};
   props = {...props,  bigbigparent_slug } // Staticten gelenler ve modüle has olanlar...

   return (<CS_Shell {...props}/>)
  
  }



             export async function getStaticProps(data) {


              let {defaultLocale, locale, params} = data ?? {};                           

              let dictionary= await DictionaryData({locale: locale ?? "tr"});  
              let webdata=await WebData();
              let countries=await cacheCountries();

              let lang= webdata?.bigdata?.history?.[0]?.lang?.tr;
              let logofiles =  lang?.logofiles;                                            
              let fileobjects  = await get_FileObjects_SpecialRequests({files:logofiles})                   
              let logo = fileobjects?.find(f=>f?.slug_tr  == logofiles[0]);


              let theme = webdata?.bigdata?.theme;
              let theme_products = theme?.modules?.products;
              let item_type= theme_products?.item_type ?? {};
              let card_type= theme_products?.card_type ?? {};              
              let itemswr_specialstyle= theme_products?.itemswr_specialstyle ?? {};
              let aspectratio_image= theme_products?.aspectratio_image ?? {};

                          
                                                                                                                                   
              let props = { 
                                  webdata, 
                                  dictionary, 
                                  fileobjects, 
                                  logo, 
                                  countries,
                                  params, 
                                  item_type, card_type,  aspectratio_image , itemswr_specialstyle                             
                            };
                                    
              return { props, revalidate: 20 };


                                           
             }
             
             
                          
             export async function getStaticPaths({locales}) {
              // let  paths = await cacheSubsectorQuery_BuildList()    
              let paths=[{params:{slug:["asasa"]}}];           
              return { paths, fallback: 'blocking' }
                                                              }
    
    
    
    
    
    
    
    
    
    
    
    

                                                              
                                                              
                                                              
                                                 
                                                 
                                                 
                                                 
                                                 
                                                 
                                                 