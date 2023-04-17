
import HeaderComp from "@/components/headercomp"
import FooterComp from "@/components/footercomp"
import './globals.css';
import s from "./layout.module.css"
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({
  variable: '--inter-font',
  subsets:["latin","latin-ext"],
  weight:["100", "200","300","400","500","600", "700","800","900"]
})

import {Interaction} from "./interaction"
import Link from 'next/link';

// import { languages } from './i18n/settings'

// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }))
// }



export default async function RootLayout({
  children,  
  params: {locale}
}: {
  children: React.ReactNode
}) {

    
  // console.log("assadsd", WebQuery)

  let resdata =   await fetch(`${process.env.API_URL}/api/graphql`, { //process.env.API_URL
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({
      query: WebQuery,
      variables:{data:{slug:"mitraemlak.com.tr"}} 
    })
  })
    .then(async (res) =>{console.log("res:::",res);  
          return res?.json()
   })
    .then(async (result) =>   { return  result?.data?.webquery; });
      
    // console.log("data;;;", resdata)
    let lang= resdata?.bigdata?.history[0]?.lang?.tr;
    let logofiles =  lang?.logofiles;

    let fileobjects =   await fetch(`${process.env.API_URL}/api/graphql`, { //process.env.API_URL
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
      
  return (
    <html> 
        <body className={`${s.body} ${inter.variable}`} >

              <Interaction/>

              <HeaderComp logo={logo}/>

              <div className={s.main}>{children}</div> 

              <div className={s.footer}><FooterComp logo={logo}/></div>
        </body>
    </html>
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
