import { cache} from "./cache";


const fileSpecialRequests = async ({logofiles}) => {

  let cachekey= `fileobjects_${JSON.stringify(logofiles)}`
  let fileobjects = cache.get(cachekey);
  
  if (fileobjects)  {        
                                   console.log("fileSpecialRequests is alreadycached:)", cachekey);      
                    } 

                 else {

                                  fileobjects =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
                                    method: "POST",
                                    headers: { "Content-Type": "application/json", },
                                    body: JSON.stringify({
                                      query: FilesQuery_SpecialRequests,
                                      variables:{data:{specialrequests:logofiles}} 
                                    })
                                  })
                                    .then((res) => res.json())
                                    .then((result) => { return result?.data?.filesquery_specialrequests; });   
                                                
                                  cache.set(cachekey, fileobjects, 100000);
                                  console.log("fileSpecialRequests is cached first time :/", cachekey);      

                 }
  
    return fileobjects                 
    
}


export  default fileSpecialRequests 





const FilesQuery_SpecialRequests =
`  query FilesQuery_SpecialRequests ($data:JSON )  {
      filesquery_specialrequests (data:$data) {
      id
      title_tr
      bigdata
      slug_tr
      title_tr
      active
      user
      o_key_1
    }
  }`
;

