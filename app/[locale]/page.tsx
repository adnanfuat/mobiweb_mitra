import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Estates from './estates';
import {Index_Cuffs_V2_Visitor} from "./cuffs/index_cuffs_v2_visitor"

const inter = Inter({ subsets: ['latin'] })


export default async function Home({params}) {

  // console.log("paramssss", params)

let resdata =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({
      query: WebQuery,
      variables:{data:{slug:"mitraemlak.com.tr"}}
    })
  })
    .then((res) => res.json())
    .then((result) => { return result?.data?.webquery; });

    let cuffs= resdata?.bigdata?.history[0]?.lang?.tr?.cuffs;

    

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

    return (
    <div>             
             <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/>             
             <Estates adverts={resdata?.realestates}/>
             
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
      realestates {
                      id
                      title_tr
                      slug_tr
                      img_tr
                      bigdata
                      createdat
                      updatedat
                      active
                      user
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


