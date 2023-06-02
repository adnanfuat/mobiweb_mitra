import { cache} from "./cache";

const DictionaryData = async ({locale}) => {
              
                                            // console.log("process.env.NEXT_PUBLIC_API_URL", process.env.NEXT_PUBLIC_API_URL)
                          
                                                              let dictionarydata =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
                                                                next:{revalidate:10},                                   
                                                                method: "POST",
                                                                headers: { "Content-Type": "application/json", },
                                                                body: JSON.stringify({
                                                                  query: DictionaryQuery,
                                                                  // variables:{data:{slug:"mitraemlak.com"}} 
                                                                })
                                                              })

                                                              dictionarydata= await dictionarydata?.json();

                                                              dictionarydata= await dictionarydata?.data?.dictionaryquery ?? [];
                                                              // console.log("dictionarydata: ", dictionarydata[0])

                                                                
                                                                // let data = await dictionarydata?.json();
                                                                // let data = await data?.dictionaryquery;
                                                                                                                                                                                                                                                                                                                                                                      
                                                              //console.log("dictionarydata is cached first time :/ ", cachekey, locale);
                                                                                                                                  

                                                dictionarydata= dictionarydata?.map( d=> {
                                                                        
                                                  // console.log("asdsadsadsda:",d, locale);
                                                  d = {title:eval(`d?.title_${locale}`), img:eval(`d?.img_${locale}`), slug:eval(`d?.slug_${locale}`), key:d?.key} 
                                                  return  d
                                                                        } )

                                                //  console.log("dictionarydata:::. 2", dictionarydata?.[0]?.title)
                             
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

    }
  }`
;
