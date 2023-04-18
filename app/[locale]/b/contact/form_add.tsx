import { signIn } from "next-auth/react"

import { Button} from "@/components/reuseable/button";
import { GraphQLClient } from "graphql-request";
import { isLogged} from  "@/components/hooksnew/islogged";
import { useState } from "react";
import {  useQueryClient } from "react-query";
import { useMutation } from "react-query"

export default function Form_Add ({props}) {
  
    let {slug, locale} = props
    const {name,permissions, user} = isLogged();
    const queryClient = useQueryClient()
  
    const [loading, setloading] = useState(false)
    // console.log("comments props---------->", user);
      
  const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL, { headers: {authorization: `Bearer ${user?.accessToken}`  }});
  const fetcher =async ()=> {
    await graphcms?.request( Form_Insert, { comment:_X, parent_slug:slug, project:"sakaryarehberim", active:1,  parent:0, accessToken:user?.accessToken, langCode:locale});
    queryClient.invalidateQueries();  
    set_X("");setloading(false);
}
    
const { mutate } = useMutation( () => fetcher(),    {onSuccess: () => { queryClient.invalidateQueries() }} );


    const [_X, set_X] = useState("");
    async function pusher() { if (_X.length > 5  ) {  mutate() } }
  
    return (
          <div  style={{display:"flex", flexDirection:"column"}}>     
  
                    <textarea id="w3review" name="w3review" rows={2} cols={10}                        
                        aria-label="maximum height"
                        placeholder="..."
                        //  defaultValue={_X}
                        value={_X}
                        style={{  padding:20, margin:"10px 0px",  fontSize: "1rem" }}
                        onChange={(e)=>set_X(e.target.value)}
                        disabled={!name }
                    >
                    </textarea>
  
  
  {/* (kullanıcı sisteme girdiğinde otomatik yorum yetkisini açıp, burada da o yetkinin varlığını aramamız lazım. Şu an loginauthorized yanlış olmuş...) */}
                      
  {(name) ?
                                                  
                        
                            <Button props={{loading, text: loading ? `Kaydediliyor` :  `Kaydet`, width:160, icon: `IoSave`, disabled:(_X.length < 6 || loading),  onClick:() => { if (_X.length > 5) { setloading(true) ;pusher(); }  }  }}/>  
  
                            :
  
                            // <Button variant="contained" color="primary"    startIcon={ <AddIcon/>} onClick={() => signIn()}> </Button>
                            <Button props={{text: `Yorum ekle` , width:140, icon: `IoAddOutline`, onClick:() => signIn()    }}/>  
  
  }
  
  
  
  
          </div>
    )
  }
  
  
  
  
  


  
const Form_Insert = `
mutation Form_Insert ( $data:JSON ) {
  form_insert (data:$data )  {
        id                                          
  }
}`
;
