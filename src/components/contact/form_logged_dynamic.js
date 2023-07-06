// import {commentsClientMode} from  "@/components/hooksnew/commentsclientmode";
import s from "./form.module.css"
import dynamic from 'next/dynamic'
import {siteProxy} from "@/constants/siteproxy";
import { useQuery } from 'react-query';
import userMessages from "@/components/utils/usermessages";

import { useSnapshot } from 'valtio';

 const DynamicAdd = dynamic(() => import("./form_add"));
 

 export default  function Form_Logged_Dynamic ({props}) {
  

  let {slug,   session, webdata} = props ?? {};

  // console.log("zxczxccxzcxxcz", props);
    let web = webdata?.slug_tr;

  let siteState  = useSnapshot(siteProxy);
  const { data, error  } = useQuery( ["userMessages", web ], () =>  userMessages({user:session?.user, web}) , {refetchOnWindowFocus:true})  // daha sonra false'a çevir...
  
    
   

  return ( <form onSubmit={() => formik?.handleSubmit()}>
                    <div className={s.shell}> 
                    <div className={s.wr_dynamic}>
                              
                              <div className={s.title}> Yolladığım mesajlar </div>

                              <div className={s.items}>                                                                   
                                      
                                      { data?.map((message, index)=>{

                                              return <Comment message={message} key ={index}/> 

                                      }) }
                                      
                                      { data?.length==0 && <div className={s.empty}> [Hiç mesajınız yok]  </div> }
                                                                                                                                                                                
                              </div>
                                      
                                  {siteState?.interaction && <DynamicAdd {...props}/>} 

                              </div>

                        </div>
            </form>
  )
}




const Comment = (props) => {

    let {message, locale} = props ?? {};

    // let historylength = message?.bigdata?.history?.length ?? 0 ;
    // let lasthistory = message?.bigdata?.history?.[historylength-1];

    let text =  message?.title_tr;    

    // Textare disabled??
    console.log("asdsaddsa:--> ", message);

  return (
    <div className={s.item}> 
        {text}
        <div className={s.user}> <img src={message?.bigdata?.info?.user?.image} style={{width:40, height:40}}/> {message?.bigdata?.info?.user?.name} </div>        
    </div>
  )
}





  
  
  
  
  
  
  
  