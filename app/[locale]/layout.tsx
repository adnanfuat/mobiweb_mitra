"use client"

import './globals.css';
import s from "./layout.module.css"
import { Inter } from 'next/font/google'
import {siteProxy} from "@/constants/siteproxy"


const inter = Inter({
  variable: '--inter-font',
  subsets:["latin","latin-ext"],
  weight:["100", "200","300","400","500","600", "700","800","900"]
})


import { SessionProvider } from "next-auth/react" 

import { QueryClientProvider, QueryClient } from "react-query";
// import HeaderComp from '@/components/headercomp';



export default  function RootLayout({
  children,
  session
}
: {
  children: React.ReactNode,  
}

) {

 

    const queryClient = new QueryClient();
     
  return (
    <html> 
        <body className={`${s.body} ${inter.variable}`} >
        {/* <HeaderComp params={params} sidepadding={42} topbottom={5}/> */}
          <SessionProvider session={session} refetchInterval={5 * 60}>
                    <QueryClientProvider client={queryClient}>       
                                              <div  onMouseOver={()=>{ siteProxy.interaction=true}} onTouchStart={()=>{ siteProxy.interaction=true}}>{children}</div>
                    </QueryClientProvider>
          </SessionProvider>
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
