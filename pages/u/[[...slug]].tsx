
import CS_Shell from "@/components/cs";
import { cacheCountries } from "@/components/utils/cachecountries";
import WebData from "@/components/utils/webdata";
import DictionaryData from "@/components/utils/dictionarydata";


let bigbigparent_slug="urunler"; // Soldaki menüde hangi kategoriden itibaren aşağısnı göstereceğiz  ?
let item_type="basic";
let card_type="bigfoot";
let aspectRatio_Image="4.5/6";

let module_props={bigbigparent_slug, item_type, card_type, aspectRatio_Image};


export default function Urunler (props){ 
  
   let {params, dictionary, webdata, fileobjects, countries} = props ?? {};

   props = {...props, ...module_props } // Staticten gelenler ve modüle has olanlar
 
   return (<CS_Shell {...props}/>) 
  
  }




             export async function getStaticProps(data) {


              let {defaultLocale, locale, params} = data ?? {};
             
              //  console.log("sadasdsadsd", params);
                   
             
               let dictionary= await DictionaryData({locale: locale ?? "tr"});  
               let webdata=await WebData();
               let countries=await cacheCountries();
             
              //  console.log("webdatawebdata: ", webdata);


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
             
                                                                             
             
                 let props = { webdata, dictionary, fileobjects, logo, countries,params };
                                    
                 return { props, revalidate: 20 };
                                           
             }
             
             
                          
             export async function getStaticPaths({locales}) {
              // let  paths = await cacheSubsectorQuery_BuildList()    
              let paths=[{params:{slug:["aaaaaaa"]}}];           
              return { paths, fallback: 'blocking' }
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
                                                              
                                                              
                                                              
                                                 
                                                 
                                                 
                                                 
                                                 
                                                 
                                                 