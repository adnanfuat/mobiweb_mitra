
const WebData = async () => {

  
    let resdata =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
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
        .then(async (result) =>   { return  result?.data?.webquery; });


        return resdata

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
      richcontents {
                      id            
                      title_tr
                      slug_tr
                      img_tr
                      bigdata
                      createdat
                      updatedat
                      active
                      user
                  }
    }
  }`
;
