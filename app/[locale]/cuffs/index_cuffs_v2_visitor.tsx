"use client"
import dynamic from "next/dynamic";
import {Index_Cuffs_V2_Visitor_Demo} from "./index_cuffs_v2_visitor_demo"
import { useSnapshot } from 'valtio';
import {siteProxy} from "@/constants/siteproxy"


const Index_Cuffs_V2_Visitor_Dynamic = dynamic(() => import("./index_cuffs_v2_visitor_real").then(res=>res.Index_Cuffs_V2_Visitor_Real), { loading: () => <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", minHeight:"260px"}}>Kısa bekletiyoruz</div>, });


export const  Index_Cuffs_V2_Visitor = (props) => {
      
      let siteState = useSnapshot(siteProxy);
            
      //  return <div style={{position:"relative", top:50}}>asdsadsadsadsadsad</div>
      // return siteState?.interaction ?<Index_Cuffs_V2_Visitor_Dynamic props={props}/> : <div style={{backgroundColor:"red", minHeight:250, width:"100%"}}>asdsaddssaddddddddddddddddddddddd</div> 
      return siteState?.interaction ?<Index_Cuffs_V2_Visitor_Dynamic props={props}/> : <Index_Cuffs_V2_Visitor_Demo props={props}/>  
     
         
     }