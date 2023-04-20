"use client"

import dynamic from 'next/dynamic'
import Form_Logged_Standart from "./form_logged_standart";
import {siteProxy} from "@/constants/siteproxy"
import { useSnapshot } from 'valtio';

const Form_Logged_Dynamic = dynamic(() => import("./form_logged"));

export default function Form  (props) {

    // console.log("asdasdsdads", props);
let siteState  = useSnapshot(siteProxy);

return siteState?.interaction ? <Form_Logged_Dynamic props={props}/> : <Form_Logged_Standart props={props}/> 

 }
  
  
  
  
  