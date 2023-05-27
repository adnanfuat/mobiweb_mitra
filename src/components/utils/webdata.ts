


const WebData = async () => {

  

                                 return  await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL                                    
                                    next:{revalidate:10},                                   
                                    method: "POST",
                                    headers: { "Content-Type": "application/json", },
                                    body: JSON.stringify({
                                      query: WebQuery,
                                      variables:{data:{slug:"mitraemlak.com"}} 
                                    })
                                  })
                                    .then(async (res) =>{  
                                          return res?.json()
                                  })
                                    .then(async (result) =>   {  return  result?.data?.webquery; });
                                                
                                  
                                  console.log("webdata is cached first time :/");      

    

}


export  default WebData 


const WebQuery = 
`  query WebQuery ($data:JSON)  {
    webquery (data:$data) {
      id      
      title_tr
      slug_tr
      img_tr
      bigdata
      createdat
      img_tr
      updatedat
      active
      user
      bigdata
      o_key_1
      o_key_2
      richcontents {
                      id            
                      title_tr
                      slug_tr
                      img_tr
                      bigdata
                      createdat
                      updatedat
                      active
                      bigbigparent_key
                      user
                      userdata {
                        image
                      }
                  }
    }
  }`
;
