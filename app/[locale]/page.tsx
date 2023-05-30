import s from "./layout.module.css"
import HeaderComp from "@/components/header/headercomp"
import FooterComp from "@/components/footercomp"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {Index_Cuffs_V2_Visitor} from "./cuffs/index_cuffs_v2_visitor"
import WebData from "@/components/utils/webdata"
import DictionaryData from "@/components/utils/dictionarydata"
import { localeStatic } from "@/constants/localestatic"
import Estates from "./estates"

const inter = Inter({ subsets: ['latin'] })


export default async function Home(props) {

  let {params} = props ?? {}
  let {locale} = params ?? {}
    
  
  let dictionary=await DictionaryData({locale});  
  let webdata=await WebData();
   
  let cuffs= webdata?.bigdata?.history?.[0]?.lang?.tr?.cuffs;

  let lang= webdata?.bigdata?.history?.[0]?.lang?.tr;
  let logofiles =  lang?.logofiles;

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

    

    let createFileRequestsList=[]
    cuffs?.map(a=>{
          if (a?.img?.src) {
                createFileRequestsList= [...createFileRequestsList, a?.img?.src[0]] ; // Bunu neden yaptım... Her manşet için birden fazla resim var. bize her manşetin 0. resmi lazım vitrinde göstermek için.. Bu listeyi yukarıda oluşturup file objelerini çekiyorum anlık olarak
          }
    })



    let cuff_files =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
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
      
    return ( <Theme1 logo={logo} params={params} dictionary={dictionary} webdata={webdata} cuffs={cuffs}/> )



  
}





const Theme1 = async (props) => {

  let {logo, params, dictionary, webdata, cuffs} = props ?? {};

  return (
              <div style={{position:"relative"}}>  sasasa
              {/* sadsaddsa {webdata?.bigdata?.theme?.name} */}
              {/* PROPSSSS : {JSON.stringify(params)} -------------- */}
                
                      <HeaderComp logo={logo} params={params} dictionary={dictionary} webdata={webdata} position="absolute"  sidepadding={42} topbottom={5}/>

                      <div className={s.main}>              
                                                                      
                                              <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/>             
                                              {/* asdas : {JSON.stringify(props)} */}
                                               <Estates adverts={webdata?.richcontents?.filter(a=>a?.bigbigparent_key=="1668310884")} params={params} sidepadding={42} />
                                        
                      </div> 

                        <div className={s.footer}><FooterComp logo={logo}/></div>             
              </div>          
        )
}










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


