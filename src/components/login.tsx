"use client"
// import {isLogged} from "./utils/islogged";
import s from "./login.module.css";
import {  signIn, signOut } from "next-auth/react";
// import { userNotifications } from "@/components/hooksnew/usernotifications";  
import { useRouter } from "next/navigation";
import Link from "next/link";
import {RiLockUnlockFill, RiLockUnlockLine, RiEmotionHappyLine, RiEmotionUnhappyLine, RiStarSFill, RiCloseFill, RiMenuLine, RiUserStarFill, RiUser3Fill, RiVideoFill, RiVideoLine, RiLock2Fill, RiLock2Line, RiPlayMiniFill,RiMagicFill, RiPlayMiniLine, RiMailLine, RiMailSendFill, RiStarHalfFill, RiStarFill, RiEditBoxLine, RiEditBoxFill,  RiToggleFill, RiToggleLine , RiAncientPavilionFill, RiAncientPavilionLine, RiInstagramLine, RiInstagramFill, RiDeleteBin2Fill, RiDeleteBin2Line, RiEyeLine, RiEyeOffLine, RiCodeBoxFill, RiCodeBoxLine, RiFileTextFill, RiFileTextLine} from "react-icons/ri";
import {useMutation, useQueryClient, useQuery } from 'react-query';


export const Login = ({props}) => {

  const {session, user, accessToken} = props?? {}// isLogged();
  
        const fetcher = async () => {
                
                return await fetch(process.env.NEXT_PUBLIC_API_URL, {
                  method: "POST",
                  headers: { "Content-Type": "application/json", authorization: `Bearer ${accessToken}`},
                  body: JSON.stringify({
                    query: SwissArmyKnifeQuery_Raw,
                    variables: { data: {type:"notifications_count"} },
                  }),
                })
                  .then((res) => res.json())
                  .then((result) => { return  result?.data?.swissarmyknifequery; });
        }
   

      const { data} = useQuery( ["notifications_count"], () => fetcher() , {refetchOnWindowFocus:true})  // daha sonra false'a çevir...
      
      //  console.log("sdsa--->", user);

  //**************************** (sitemap fecth) */

  let router = useRouter();

  return (        
               !session ?  <div onClick={()=> signIn()}  className={s.icon}> {  <RiUser3Fill/> }</div>              
              
              : <div onClick={()=>router.push("/console")}  className={s.icon} style={{ backgroundImage:`url(${session?.user?.image})`, backgroundSize:"cover"}}  title={session?.user?.name} >                                                                                                 
                                  
                                  {!session?.user?.image && <RiUserStarFill/> }       

                                  {data?.i_key_1>0 && <div onClick={()=>!user && signIn()}  className={s.notifications}>{data?.i_key_1}</div>        }

                                  <div className={s.popup}>                                    
                                                
                                                <Link href={"/console"}>Konsol</Link>
                                                
                                                {/* <Link href={"/console/notifications"}>Bildirimler</Link> */}
                                                <a href={"/console/notifications"}>Bildirimler</a>

                                                {/* <Link href={"/console/adverts"}>İlan</Link> */}
                                                <a href={"/console/adverts"}>İlan</a>

                                                {/* <Link href={"/console/contents"}>Haber</Link> */}
                                                <a href={"/console/contents"}>Haber</a>
                                                                                                                                                
                                                <div  onClick={()=>{signOut(); router.push(`/`) }}>Çıkış</div>

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
