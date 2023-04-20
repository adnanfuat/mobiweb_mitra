// import {commentsClientMode} from  "@/components/hooksnew/commentsclientmode";
import s from "./form.module.css"
import dynamic from 'next/dynamic'
import { useState } from "react";

 const DynamicAdd = dynamic(() => import("./form_add"));
 
 export default function Form_Logged ({props}) {

  let {slug,   session} = props ?? {};
  
  let contactmessages=session?.user?.contactmessages ?? [];

  console.log(" : ", props);

  const [show, setshow] = useState(false)

  return ( <form onSubmit={() => formik?.handleSubmit()}>Form_Logged {JSON.stringify(contactmessages)}
                    <div className={s.shell}> 
                    <div className={s.wr} onMouseOver={()=>setshow(true)}>
                              <div className={s.title}> Yorumlar </div>

                              <div className={s.items}>                   
                                      
                                      {contactmessages?.map((message, index)=>{

                                              return <Comment props={{message}} key ={index}/> 

                                      })}
                                      {contactmessages?.length==0 && <div className={s.empty}> [İlk yorum yapan siz olun]  </div>} 
                                                  
                                                  
                                      
                                      
                              </div>
                                      
                                  {show && <DynamicAdd props={{slug}}/>} 

                              </div>

                        </div>
            </form>
  )
}




const Comment = ({props}) => {

    let {message, locale} = props;

    let historylength = message?.bigdata?.history?.length ?? 0 ;
    let lasthistory = message?.bigdata?.history?.[historylength-1];

    let text =  message?.title_tr;
    
    console.log("asdsaddsa:--> ", message);


  return (
    <div className={s.item}> 
        {text}
        <div className={s.user}> <img src={lasthistory?.info?.user?.image} style={{width:40, height:40}}/>{lasthistory?.info?.user?.name} </div>        
    </div>
  )
}





  
  
  
  
  
  
  
  