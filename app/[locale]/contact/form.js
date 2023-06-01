"use client"
import {Form_Logged_Standart} from "./form_logged_standart";
import dynamic from 'next/dynamic'
import {siteProxy} from "@/constants/siteproxy"
import { useSnapshot } from 'valtio';

const Form_Logged_Dynamic = dynamic(() => import("./form_logged_dynamic"));

export default function Form (props) {

let {session, usermessages, resdata} = props ?? {};    

// console.log("sdakjsdakjdsakj", resdata)
    
        let siteState  = useSnapshot(siteProxy);
        
        // Kullanıcı etkileşimi başladıysa ve session oluştuysa, (mesaj ekleme ve kendi mesajlarını görüntüleme sistemi açılmalı) ... Yoksa Login butonlarına yönlendirmeli
        // return (<div>sadssad</div>)
        // return (siteState?.interaction && session) ? <div>sadssad</div> : <Form_Logged_Standart props={props}/> 
        
        return ( session) ? <Form_Logged_Dynamic props={props}/> : <Form_Logged_Standart props={props}/> 


 }
  
  
  
  
  