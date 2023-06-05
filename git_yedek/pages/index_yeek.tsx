import DictionaryData from "@/components/utils/dictionarydata";
import WebData from "@/components/utils/webdata";
import { FilesQuery_SpecialRequests } from "../src/gql/filesquery_specialrequests";
import {Mitra} from "@/themes/mitra"
import { Arges } from "@/themes/arges";
import { Vitalis } from "@/themes/vitalis";



export default  function Index(props) {                    
      
      let { cuffs, webdata, dictionary, fileobjects, logo, locale, session } =props ?? {};

      let theme_name = webdata?.bigdata?.theme?.name;
            
      let component=<div>...</div>;

          // return (<div>{JSON.stringify(webdata)}</div>)

      if (theme_name=="mitra" && 1==1) { // && 1==3
        component=<Mitra logo={logo} locale={locale} dictionary={dictionary} webdata={webdata} cuffs={cuffs} session={session}/>                            
      }
      else if (theme_name=="arges" && 1==1) {
        component=<Arges logo={logo} locale={locale} dictionary={dictionary} webdata={webdata} cuffs={cuffs} session={session}/>   
      }
      else if (theme_name=="vitalis" && 1==1) {
        component=<Vitalis logo={logo} locale={locale} dictionary={dictionary} webdata={webdata} cuffs={cuffs} session={session}/>   
      }     
      else 
      {
        component=<div style={{color:"black"}}>Tema bulunamadı... {JSON.stringify(webdata)}  </div>
      }                       
         
      return component
      
       
      return <div>{JSON.stringify(webdata?.bigdata?.theme)}</div>
}








export async function getStaticProps(context) {


 let {defaultLocale, locale} = context ?? {};
  
 let webdata=await WebData(); // {} //
 

 let theme_name = webdata?.bigdata?.theme?.name;
    
 let cuffs= webdata?.bigdata?.history?.[0]?.lang?.tr?.cuffs;
 let lang= webdata?.bigdata?.history?.[0]?.lang?.tr;
 let logofiles =  lang?.logofiles;

//  console.log("logooo", webdata)
  

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
      
      let logo = fileobjects?.find(f=>f?.slug_tr  == logofiles[0]) ?? {}

      

        
            

    let createFileRequestsList=[]
    cuffs?.map(a=>{
          if (a?.img?.src) {
                createFileRequestsList= [...createFileRequestsList, a?.img?.src[0]] ; // Bunu neden yaptım... Her manşet için birden fazla resim var. bize her manşetin 0. resmi lazım vitrinde göstermek için.. Bu listeyi yukarıda oluşturup file objelerini çekiyorum anlık olarak
          }
    })



    let cuff_files =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
      next:{revalidate:10},                                   
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({
        query: FilesQuery_SpecialRequests,
        variables:{data:{specialrequests:createFileRequestsList}}
      })
    })
      .then((res) => res.json())
      .then((result) => { return result?.data?.filesquery_specialrequests; });
      

      cuffs=cuffs?.map(cuff=>{
               cuff= {...cuff, firstcufffile:cuff_files?.find(f=>f?.slug_tr==cuff?.img?.src?.[0]) } ; // File objeleri yanına ekliyorum. Sadece ilk dosya yeterli..
               return cuff
      }) ?? []
            

      // console.log("logooo", cuffs)

      let dictionary=[]//  await DictionaryData({locale: locale ?? "tr"});  

    let props = {cuffs, webdata, dictionary, fileobjects, logo };
                       
    return { props };

  
  
}



