// import {commentsClientMode} from  "@/components/hooksnew/commentsclientmode";
import s from "./form.module.css"
import dynamic from 'next/dynamic'
import { useState } from "react";

const DynamicAdd = dynamic(() => import("./form_add"));

 
 export default function Form_Logged ({props}) {

  let {slug, comments,  locale} = props;
  
  // const  commentsclient  = commentsClientMode({parent_slug:slug});  // , whichPermissions:["article_edit", "article_add"]

  // comments=commentsclient?.filter(item=> { // sadece o dile ait olan yorumları göstereyim

  //   let historylength = item?.bigdata?.history?.length ?? 0 ;
  
  //   let lasthistory = item?.bigdata?.history?.[historylength-1]
  
  //   let langcontrol= eval(`lasthistory?.lang?.${locale ?? localeStatic}?.comment`)  
  
  //   if (langcontrol)   {return true } else  {return false}
  
  // })
  
  //  console.log("article:::", comments);
    const [show, setshow] = useState(false)

  return ( <form onSubmit={() => formik?.handleSubmit()}>
                    <div className={s.shell}> 
                    <div className={s.wr} onMouseOver={()=>setshow(true)}>
                              <div className={s.title}> Yorumlar </div>

                              <div className={s.items}>                   
                                      
                                      {comments?.map((comment, index)=>{

                                              return <Comment props={{comment, locale}} key ={index}/> 

                                      })}
                                      {comments?.length==0 && <div className={s.empty}> [İlk yorum yapan siz olun]  </div>} 

                              </div>
                                      
                                  {show && <DynamicAdd props={{slug, locale}}/>} 

                              </div>

                        </div>
            </form>
  )
}




const Comment = ({props}) => {
    let {comment, locale} = props;
    let historylength = comment?.bigdata?.history?.length ?? 0 ;
    let lasthistory = comment?.bigdata?.history?.[historylength-1];

    let text =  lasthistory?.lang?.tr?.comment;

     console.log("lasthistorylasthistory:--> ", lasthistory);

  return (
    <div className={s.item}> 
        {text}
        <div className={s.user}> <img src={lasthistory?.info?.user?.image} style={{width:40, height:40}}/>{lasthistory?.info?.user?.name} </div>

    </div>
  )
}





  
  
  
  
  
  
  
  