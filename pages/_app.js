import {siteProxy} from "@/constants/siteproxy"
import dynamic from "next/dynamic";
import { SessionProvider } from "next-auth/react" 
// import Design from "@/layouts/design"; 
import Head from 'next/head';
import  "/public/css/global.css";
import  "/public/css/reset.css";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
// import {_userState} from "@/constants/states/user"
import { useState } from "react";
// import { open_sans} from "@/constants/fonts/index"; className={open_sans.className}
 

const MyApp = ({ Component,  pageProps:{ session, ...pageProps } }) => {
    
  
  const [queryClient] = useState(() => new QueryClient());
  const [googleanalytics, setgoogleanalytics] = useState(false);
      
  // minHeight:"100vh",
    return (
      <div onMouseOver={()=>{ siteProxy.interaction=true}} onTouchStart={()=>{ siteProxy.interaction=true}}  >
        
      {/* <main className={open_sans.className}> */}
      {/* <style jsx global>{`
        :root {            
          --roboto_condensed: ${roboto_condensed.style.fontFamily};
          --oswald: ${oswald.style.fontFamily};
          --poppins: ${poppins.style.fontFamily};
        }
      `}</style> */}

      <SessionProvider session={session} refetchInterval={5 * 60}>
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              {/* {process.env.NEXT_PUBLIC_NODE_ENV=="development" &&<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />} */}

              <Head> <meta name="viewport" content="initial-scale=1, width=device-width" />
                  <meta name="Googlebot" content="index, follow" />
                  <meta name="robots" content="index, follow" />
                  <meta name="Robots" content="all" />              
                  <title>Sakarya'yı seviyoruz. Sakarya için çalışıyoruz.</title>
              </Head> 

                  {/* {googleanalytics && <Dynamic_GoogleAnalyticsComp/> }       */}                                    
                  <Component {...pageProps} />                  
            </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
      
    
    </div>
    );
  }
  
  export default MyApp



  // --font-base: ${oswald.style.fontFamily} , ${prosto_one.style.fontFamily}, ${abhaya_libre.style.fontFamily}, ${rubik_bubbles.style.fontFamily} ;  



  // MyApp.propTypes = {
  //   Component: PropTypes.elementType.isRequired,
  //   // emotionCache: PropTypes.object,
  //   pageProps: PropTypes.object.isRequired,
  // };



  


