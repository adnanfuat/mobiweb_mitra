import { signIn } from "next-auth/react"
import { Button} from "@/components/reuseable/button";
import { useState } from "react";
import {  useQueryClient } from "react-query";
import { useMutation } from "react-query"


export default function Form_Add (props) {
  
    let { slug, session } = props ??  {};

    let {user} = session ?? {};

    let {accessToken, name} = user ?? {};
    
    const queryClient = useQueryClient()  
    const [loading, setloading] = useState(false)
    
    
    const inserter = async () => {
                
                                    return await fetch(process.env.NEXT_PUBLIC_API_URL, {
                                      method: "POST",
                                      headers: { "Content-Type": "application/json", authorization: `Bearer ${accessToken}`},
                                      body: JSON.stringify({
                                        query: SwissArmyKnifeMutation,
                                        variables: { data: {type:"message", parent_slug:"contact", bigparent_slug:"web", parent_key:"mitraemlak.com", message} },
                                      }),
                                    })
                                      .then((res) => res.json())
                                      .then((result) => { 
                                                    queryClient.invalidateQueries(); 
                                                    setmessage(""); setloading(false);
                                                    return  result?.data?.swissarmyknifemutation;
                                              });
                
                                  }


    // Buradan mesaj yollamayı yap
    
    const { mutate } = useMutation( () => inserter(),    {onSuccess: () => { queryClient.invalidateQueries() }} );

    const [message, setmessage] = useState("");

    async function pusher() { if (message.length > 5  ) {  mutate() } }
  
    return (
          <div  style={{display:"flex", flexDirection:"column"}}>     
  
                    <textarea id="w3review" name="w3review" rows={2} cols={10}                        
                        aria-label="maximum height"
                        placeholder="..."                        
                        value={message}
                        style={{  padding:20, margin:"10px 0px",  fontSize: "1rem" }}
                        onChange={(e)=>setmessage(e.target.value)}
                        
                    >
                    </textarea>
    
  {/* (kullanıcı sisteme girdiğinde otomatik yorum yetkisini açıp, burada da o yetkinin varlığını aramamız lazım. Şu an loginauthorized yanlış olmuş...) */}
                      
  {(name) ?
                                                  
                        
                            <Button props={{loading, text: loading ? `Kaydediliyor` :  `Gönder`, width:160, icon: `IoSave`, disabled:(message.length < 6 || loading),  onClick:() => { if (message.length > 5) { setloading(true) ;pusher(); }  }  }}/>  
  
                            :
  
                            // <Button variant="contained" color="primary"    startIcon={ <AddIcon/>} onClick={() => signIn()}> </Button>
                            <Button props={{text: `Yorum ekle` , width:140, icon: `IoAddOutline`, onClick:() => signIn()    }}/>  
  
  }
  
  
  
  
          </div>
    )
  }
  
  
  
  
  


  




const SwissArmyKnifeMutation = 
 `
  mutation SwissArmyKnifeMutation (  $data: JSON  ) {
    swissarmyknifemutation ( data:$data ) 
        {
          title_tr         
          o_key_1 
        }
  }
`;
