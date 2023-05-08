import s from "./form.module.css"
import { signIn } from "next-auth/react"
import { RiSendPlaneLine } from "react-icons/ri";

export default function Form_Logged_Standart ({props}) {

  let {session} = props ?? {};    
         
  return ( 
                    <div className={s.shell}> 
                    <div className={s.wr}>

                              {/* <div className={s.title}> Mesaj </div> */}

                              <div className={s.items_empty}  onClick={()=> signIn()}>                                                         

                                      {<div className={s.empty}> <span><RiSendPlaneLine size={"4rem"}/></span><span>[Mesaj yollamak için tıklayın]</span>  </div>} 

                              </div>
                                      
                              <buttton onClick={()=> signIn()} className={s.addbutton}> Mesaj yolla </buttton>

                              </div>

                        </div>            
  )
}




const Comment = ({props}) => {
    let {comment, locale} = props;
    let historylength = comment?.bigdata?.history?.length ?? 0 ;
    let lasthistory = comment?.bigdata?.history?.[historylength-1];

    // console.log("lasthistorylasthistory:--> ", lasthistory);

  return (
    <div className={s.item}>
        
        {eval(`lasthistory?.lang?.${locale}?.comment`)}
    
        <div className={s.user}>
            
              <img src={lasthistory?.info?.user?.image} width={40} height={40} alt={lasthistory?.info?.user?.name}/> <div  className={s.username}>{lasthistory?.info?.user?.name}</div>

        </div>

    </div>
  )
}





  
  
  
  
  
  
  
  