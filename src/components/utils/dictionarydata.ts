

const DictionaryData = async ({locale}) => {
              
                                                              // console.log("process.env.NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL)
                                             
                          
                                                              let dictionarydata =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
                                                                next:{revalidate:1000},                                   
                                                                method: "POST",
                                                                headers: { "Content-Type": "application/json", },
                                                                body: JSON.stringify({
                                                                  query: DictionaryQuery,
                                                                  variables:{data:{locale}} 
                                                                })
                                                              })

                                                              dictionarydata= await dictionarydata?.json();
                                                              
                                                              dictionarydata= await dictionarydata?.data?.dictionaryquery?.o_key_1 ?? [];
                                                              // console.log("dictionarydatsa: ",locale, dictionarydata)


                                                                
                                                                
                                                                                                                                                                                                                                                                                                                                                                      
                                                              
                               

                             
                                                return dictionarydata    
                                                
                                              }



// Burada ilgili dile göre bir çözümleme yap.. bir de cacheden oku

export  default DictionaryData 


const DictionaryQuery = 
`  query DictionaryQuery ($data:JSON)  {
    dictionaryquery (data:$data) {
      id
      title_tr
      title_en
      title_fr
      title_ar
      title_sa
            slug_sa
      slug_tr
      slug_en
      slug_fr
      slug_ar
      key            
      img_tr      
      active
      user
      o_key_1

    }
  }`
;
