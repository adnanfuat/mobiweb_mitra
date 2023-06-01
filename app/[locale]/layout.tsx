"use client"

import './globals.css';
import {siteProxy} from "@/constants/siteproxy"





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
) 
{

 
  const queryClient = new QueryClient();
  {/* <div  onMouseOver={()=>{ siteProxy.interaction=true}} onTouchStart={()=>{ siteProxy.interaction=true}}>{children}</div> */}
     
  return (
  // <html>   
  //   <head>
  //     <title>My page ____</title>
  //   </head>       
  //         <body onMouseOver={()=>{ siteProxy.interaction=true}} onTouchStart={()=>{ siteProxy.interaction=true}}>          
          <SessionProvider session={session} refetchInterval={5 * 60}>
                    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
          </SessionProvider>
          // </body></html>
          )

  }




  // return (<html>   
  //   <head>
  //     <title>My page ____</title>
  //   </head>       
  //         <body onMouseOver={()=>{ siteProxy.interaction=true}} onTouchStart={()=>{ siteProxy.interaction=true}}>          
  //         <SessionProvider session={session} refetchInterval={5 * 60}>
  //                   <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  //         </SessionProvider>
  //         </body></html>)




