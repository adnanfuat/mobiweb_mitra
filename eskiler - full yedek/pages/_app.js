import {siteProxy} from "@/constants/siteproxy"

import  "/public/css/global.css";
import  "/public/css/reset.css";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { useState } from "react";
import { useSnapshot } from 'valtio';
import { useRouter } from "next/router";  
 

const MyApp = ({ Component,  pageProps:{ session, ...pageProps } }) => {
    
  
      
  let siteState  = useSnapshot(siteProxy);
  // minHeight:"100vh",
    return (<Component {...pageProps} />);
  }
  
  export default MyApp




  
  
  const ChangeTarget = () => {

    let router = useRouter();
    const changeTargetFunc = async (value) => {

      console.log("asdasdsadsad", 1)        
        await fetch("/api/repo?target="+value);
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
  



