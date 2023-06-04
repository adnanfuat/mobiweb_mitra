
//cache.set("cached_domain", "argesinsaat.com.tr"); // argesinsaat.com.tr // vitalisbotanik.com

const WebData = async () => {
                                                                                                 
  
                                 let relatedData =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL                                    
                                    next:{revalidate:10},                                   
                                    method: "POST",
                                    headers: { "Content-Type": "application/json", },
                                    body: JSON.stringify({
                                      query: WebQuery,
                                      variables:{data:{slug:process.env.DOMAIN, repo:process.env.REPO}}  //cached_domain ?? 
                                    })
                                  })

                                  relatedData =  await relatedData?.json();
                                  relatedData =  await relatedData?.data?.webquery;


                                  // console.log("relatedDatarelatedData: ", relatedData)
                                         
                                  
                                  return relatedData; 
                                  
                                                
                                                                        
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
        key
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
