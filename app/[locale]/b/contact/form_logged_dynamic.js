// import {commentsClientMode} from  "@/components/hooksnew/commentsclientmode";
import s from "./form.module.css"
import dynamic from 'next/dynamic'
import {siteProxy} from "@/constants/siteproxy";
import { useQuery } from 'react-query';
import userMessages from "@/components/utils/usermessages";

import { useSnapshot } from 'valtio';

 const DynamicAdd = dynamic(() => import("./form_add"));
 

 export default  function Form_Logged_Dynamic ({props}) {
  

  let {slug,   session, resdata} = props ?? {};
    
  let siteState  = useSnapshot(siteProxy);
  const { data, error  } = useQuery( ["userMessages"], () =>  userMessages({user:session?.user}) , {refetchOnWindowFocus:true})  // daha sonra false'a çevir...
  
    
  // console.log("sadsadsa", data, error, session?.user)

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
                                      
                                  {siteState?.interaction && <DynamicAdd slug={slug} session={session} resdata={resdata}/>} 

                              </div>

                        </div>
            </form>
  )
}




const Comment = (props) => {

    let {message, locale} = props ?? {};

    let historylength = message?.bigdata?.history?.length ?? 0 ;
    let lasthistory = message?.bigdata?.history?.[historylength-1];

    let text =  message?.title_tr;    

    // Textare disabled??
    console.log("asdsaddsa:--> ", message);

  return (
    <div className={s.item}> 
        {text}
        <div className={s.user}> <img src={lasthistory?.info?.user?.image} style={{width:40, height:40}}/> {lasthistory?.info?.user?.name} </div>        
    </div>
  )
}





  
  
  
  
  
  
  
  