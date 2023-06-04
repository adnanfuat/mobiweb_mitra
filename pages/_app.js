import {siteProxy} from "@/constants/siteproxy"
import dynamic from "next/dynamic";
import { SessionProvider } from "next-auth/react" 
import Head from 'next/head';
import  "/public/css/global.css";
import  "/public/css/reset.css";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { useState } from "react";
import { useSnapshot } from 'valtio';
import { useRouter } from "next/router";  
 

const MyApp = ({ Component,  pageProps:{ session, ...pageProps } }) => {
    
  
  const [queryClient] = useState(() => new QueryClient());
  const [googleanalytics, setgoogleanalytics] = useState(false);
      
  let siteState  = useSnapshot(siteProxy);
  // minHeight:"100vh",
    return (
      <div onMouseOver={()=>{ siteProxy.interaction=true}} onTouchStart={()=>{ siteProxy.interaction=true}}   style={{position:"relative"}}>
        
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
      

        <ChangeTarget/>
    
    </div>
    );
  }
  
  export default MyApp




  
  
  const ChangeTarget = () => {

    let router = useRouter();
    const changeTargetFunc = async (value) => {

      console.log("asdasdsadsad", 1)        
        await fetch("/api/repo?target="+{value});
        console.log("asdasdsadsad",2)        
        router.reload();
                      
    }

    return (
      <div style={{position:"absolute", zIndex:2500, backgroundColor:"black", padding:10, bottom:"43px", left:"38%"}}>                 
          <select onChange={(e)=>changeTargetFunc(e?.target?.value)} style={{fontSize:"1.4rem"}}>
                  <option value={""}> Seçiniz </option>
                  <option value={"argesinsaatmimarlik.com.tr"}> argesinsaatmimarlik.com.tr </option>
                  <option value={"mitraemlak.com"}> mitraemlak.com </option>
                  <option value={"vitalisbotanik.com"}> vitalisbotanik.com </option>
          </select>
      </div>
    )
  }
  



