
const DictionaryData = async () => {

  
    let resdata =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
          query: DictionaryQuery,
          // variables:{data:{slug:"mitraemlak.com"}} 
        })
      })
        .then(async (res) =>{  
          
              return res?.json()
       })
        .then(async (result) =>   {  return  result?.data?.dictionaryquery; });


        return resdata

}


export  default DictionaryData 


const DictionaryQuery = 
`  query DictionaryQuery ($data:JSON)  {
    dictionaryquery (data:$data) {
      id
      title_tr
      title_en
      title_fr
      title_ar
      slug_tr
      slug_en
      slug_fr
      slug_ar

            
      img_tr
      
      active
      user

    }
  }`
;
