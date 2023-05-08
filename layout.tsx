

// import './globals.css';
// import s from "./layout.module.css"
import { Inter } from 'next/font/google'
import {siteProxy} from "@/constants/siteproxy"


const inter = Inter({
  variable: '--inter-font',
  subsets:["latin","latin-ext"],
  weight:["100", "200","300","400","500","600", "700","800","900"]
})






export default  function RootLayout({
  children,
  session
}
: {
  children: React.ReactNode,  
}

) {
  

    // const queryClient = new QueryClient();
     
  return (
    // <html> 
    //     <body className={`${s.body} ${inter.variable}`} >

    //     </body>
    // </html>
    <div>
      {children}
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
