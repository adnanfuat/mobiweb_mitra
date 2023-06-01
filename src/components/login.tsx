"use client"
import s from "./login.module.css";
import {  signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {RiUserStarFill, RiUser3Fill} from "react-icons/ri";
import { useQuery } from 'react-query';
import dictionaryFunc from "./utils/dictionaryfunc";
import { useSession } from "next-auth/react";



export const Login = (props) => {

  const { dictionary} = props?? {}// isLogged();

  const { data: session } = useSession();


  let {user} =  session ?? {};
  
        const fetcher = async () => {
                
                return await fetch(process.env.NEXT_PUBLIC_API_URL, {
                  method: "POST",
                  headers: { "Content-Type": "application/json", authorization: `Bearer ${user?.accessToken}`},
                  body: JSON.stringify({
                    query: SwissArmyKnifeQuery_Raw,
                    variables: { data: {type:"notifications_count"} }
                  }),
                })
                  .then((res) => res.json())
                  .then((result) => { return  result?.data?.swissarmyknifequery; });
        }
   

      const { data  } = useQuery( ["notifications_count"], () => fetcher() , {refetchOnWindowFocus:true})  // daha sonra false'a çevir...
            

  //**************************** (sitemap fecth) */

  let log_out      =   dictionaryFunc({key:"1683707781276", dictionary}).text;

  let router = useRouter();

  return (        
               !session ?  <div onClick={()=> signIn()}  className={s.icon}> {  <RiUser3Fill/> }</div>              
              
              : <div  className={s.icon} style={{ backgroundImage:`url(${session?.user?.image})`, backgroundSize:"cover"}}  title={session?.user?.name} >                                                                                                 
                                  
                                  {!session?.user?.image && <RiUserStarFill/> }    

                                  {/* {JSON.stringify(dictionary?.find(a=>a?.slug=="log_out"))}    */}

                                  {data?.i_key_1>0 && <div onClick={()=>!user && signIn()}  className={s.notifications}>{data?.i_key_1}</div>        }

                                  <div className={s.popup}>                                                                                                                              
                                          <div  onClick={()=>{signOut(); router.push(`/`) }}>{log_out}</div>
                                          <div  onClick={()=>{fetch("/api/clearcache"); }}>Cache temizle</div>
                                  </div>
                            </div>
              
        
    )
}











const SwissArmyKnifeQuery_Raw = 
`  query SwissArmyKnifeQuery ($data:JSON)  {
    swissarmyknifequery (data:$data) {
      id
      title_tr
      o_key_1
      i_key_1
      createdat
    }
  }`
;
