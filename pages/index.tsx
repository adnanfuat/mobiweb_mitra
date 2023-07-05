// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
 import DictionaryData from "@/components/utils/dictionarydata";
import WebData from "@/components/utils/webdata";
// import { FilesQuery_SpecialRequests } from "../src/gql/filesquery_specialrequests";
import { Mitra } from "@/themes/mitra"
import { Arges } from "@/themes/arges";
import { Vitalis } from "@/themes/vitalis";
import { Proweb } from "@/themes/proweb";



export default  function Index(props) {                    
      
      let {  webdata, dictionary,   params, session } =props ?? {};

      let theme_name = webdata?.bigdata?.theme?.name;
      let cuffs = webdata?.bigdata?.cuffs;
      let logo = webdata?.bigdata?.logo;
      
      // console.log("cuffscuffs: ", cuffs);

       let component=<div>..</div>;

      //  return (<div>{locale}</div>)
      // return (<div>{JSON.stringify(cuffs)}</div>)

      if (theme_name=="mitra" && 1==1) { // && 1==3
        component=<Mitra logo={logo} params={params} dictionary={dictionary} webdata={webdata} cuffs={cuffs} session={session}/>                            
      }
      else if (theme_name=="arges" && 1==1) {
        component=<Arges logo={logo} params={params} dictionary={dictionary} webdata={webdata} cuffs={cuffs} session={session}/>   
      }
      else if (theme_name=="vitalis" && 1==1) {
        component=<Vitalis logo={logo} params={params} dictionary={dictionary} webdata={webdata} cuffs={cuffs} session={session}/>   
      }  
      else if (theme_name=="proweb" && 1==1) {
        component=<Proweb logo={logo} params={params} dictionary={dictionary} webdata={webdata} cuffs={cuffs} session={session}/>   
      }           
      else 
      {
        component=<div style={{color:"black"}}>Tema bulunamadı... {JSON.stringify(webdata)}  </div>
      }                       
         
      return component
      
       
      return <div>{JSON.stringify(webdata?.bigdata?.theme)}</div>
}





// export async function getStaticProps(context) {


//  let {defaultLocale, locale} = context ?? {};
  
//  let webdata=await WebData() ?? {}; // {} //
 

//  let theme_name = webdata?.bigdata?.theme?.name;
    
 
     
//       //let dictionary = await DictionaryData({locale: locale ?? "tr"});  
      

//     let props = {cuffs:webdata?.bigdata?.cuffs, webdata,dictionary:[],  logo:webdata?.bigdata?.logo };
                       
//     return { props };

  
  
// }

  
export const getServerSideProps = async (context) => {
 
  let {defaultLocale, locale} = context ?? {};
   
  let dictionary = await DictionaryData({locale: locale ?? "tr"});  

  let webdata=  await WebData() ?? {}; // {} 
  //console.log("webdatawebdata: ", webdata);
  
  let theme_name = webdata?.bigdata?.theme?.name;
           
       
   let props = { webdata,dictionary, params:{locale}};
                        
   return { props };
 
 };
  



 