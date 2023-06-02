
import WebData from "@/components/utils/webdata"
import DictionaryData from "@/components/utils/dictionarydata";


//deneme yap //
import {Theme_Mitra} from "@/themes/theme_mitra"
import {Theme_Arges} from "@/themes/theme_arges"
import {Theme_Vitalis} from "@/themes/theme_vitalis"



// import { getServerSession } from "next-auth/next"

import { authOptions } from "../../pages/api/auth/[...nextauth]"

export default async function Home(props) {

const session = undefined //await getServerSession(authOptions) ;

let logo = fileobjects?.find(f=>f?.slug_tr  == logofiles[0])

// console.log("asdsadsaasd",session)

  let {params} = props ?? {}
  let {locale} = params ?? {}
    
  
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
      })
            
      // Yapmam gerken: Yukarıda cuffsları obje olarak yollamışım. halbuki cuffsları yollayıp yanlarına sadece objeleri koymalıydım...

      let component=<div>...</div>;

      // if (theme_name=="theme_mitra" && 1==1) { // && 1==3
      //   component=<Theme_Mitra logo={logo} params={params} dictionary={dictionary} webdata={webdata} cuffs={cuffs} session={session}/>                            
      // }
      // else if (theme_name=="theme_arges" && 1==1) {
      //   component=<Theme_Arges logo={logo} params={params} dictionary={dictionary} webdata={webdata} cuffs={cuffs} session={session}/>   
      // }
      // else if (theme_name=="theme_vitalis" && 1==1) {
      //   component=<Theme_Vitalis logo={logo} params={params} dictionary={dictionary} webdata={webdata} cuffs={cuffs} session={session}/>   
      // }     
      // else 
      // {
      //   component=<div style={{color:"black"}}>Teme bulunamadı... {JSON.stringify(webdata)}  </div>
      // }                       
                      
      // return component
       return <div>{JSON.stringify(webdata?.bigdata?.theme)}</div>
      
      

  
}







//


 const WebQuery =
`  query WebQuery ($data:JSON)  {
    webquery (data:$data) {
      id
      title_tr
      slug_tr
      img_tr
      bigdata
      createdat
      img_tr
      updatedat
      active
      user
      bigdata
      richcontents {
                      id
                      key
                      title_tr
                      slug_tr
                      img_tr
                      bigdata
                      createdat
                      updatedat
                      active
                      user
                      bigbigparent_key
                  }
    }
  }`
;
///////////








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


