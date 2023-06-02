//"use client"




//import {siteProxy} from "@/constants/siteproxy"




//import { SessionProvider } from "next-auth/react" 

//import { QueryClientProvider, QueryClient } from "react-query";
// import HeaderComp from '@/components/headercomp';



export default  function RootLayout({
  children,
  
}
: {
  children: React.ReactNode,  
}

) {

 
  
  {/* <div  onMouseOver={()=>{ siteProxy.interaction=true}} onTouchStart={()=>{ siteProxy.interaction=true}}>{children}</div> */}

  return children

  // return (<html><body><SessionProvider session={session} refetchInterval={5 * 60}>
  //                   <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  //         </SessionProvider></body></html>)
}

// onMouseOver={()=>{ siteProxy.interaction=true}} onTouchStart={()=>{ siteProxy.interaction=true}}

