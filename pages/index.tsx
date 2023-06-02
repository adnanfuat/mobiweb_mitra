import DictionaryData from "@/components/utils/dictionarydata";
import WebData from "@/components/utils/webdata-nodecache";
import { FilesQuery_SpecialRequests } from "../src/gql/filesquery_specialrequests";


export default  function Index(props) {                    
      
      let { cuffs, webdata, dictionary, } =props ?? {};

      let theme_name = webdata?.bigdata?.theme?.name;


                  return (
                    <div>
                      asdsasda


                    </div>                                                   
                            )
}








export async function getStaticProps({params, locale}) {
      

  let dictionary= await DictionaryData({locale: locale ?? "tr"});  
  let webdata=await WebData();

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
            


    let props = {cuffs, webdata, dictionary, };
                       
    return { props, revalidate: 20 };

  
  
}



