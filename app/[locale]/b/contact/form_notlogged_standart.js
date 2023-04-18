import s from "./form.module.css"

 
 export default function Form_NotLogged_Standart ({props}) {

  let {slug, comments,  locale} = props;    

  comments=comments?.filter(item=> { // sadece o dile ait olan yorumları göstereyim

    let historylength = item?.bigdata?.history?.length ?? 0 ;
  
    let lasthistory = item?.bigdata?.history?.[historylength-1]
  
    let langcontrol= eval(`lasthistory?.lang?.${locale ?? localeStatic}?.comment`)  
  
    if (langcontrol)   {return true } else  {return false}
  
  })
  
    console.log("article:::", comments);
    

  return ( 
                    <div className={s.shell}> 
                    <div className={s.wr}>
                              <div className={s.title}> Yorumlar </div>

                              <div className={s.items}>                   
                                      
                                      {comments?.map((comment, index)=>{

                                              return <Comment props={{comment, locale}} key ={index}/> 

                                      })}
                                      {comments?.length==0 && <div className={s.empty}> [İlk yorum yapan siz olun]  </div>} 

                              </div>
                                      
                              {/* <buttton onClick={()=> signIn()} className={s.addbutton}> Yorum ekle </buttton> */}

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





  
  
  
  
  
  
  
  