"use client"

import dynamic from 'next/dynamic'
import Form_NotLogged_Standart from "./form_notlogged_standart";
import {siteProxy} from "@/constants/siteproxy"
import { useSnapshot } from 'valtio';

const Form_Logged_Dynamic = dynamic(() => import("./form_logged"));

export default Form = ({props}) => {

let siteState  = useSnapshot(siteProxy);

return siteState?.interaction ? <Form_Logged_Dynamic props={props}/> : <Form_NotLogged_Standart props={props}/> 

 }
  
  
  
  
  