import { cache} from "./cache";

const DictionaryData = async ({locale}) => {
              
                            let cachekey= `dictionarydata_${locale}`
                            let dictionarydata = cache.get(cachekey);
                            
                            if (!!dictionarydata)  { console.log("dictionarydata is alreadycached:)", cachekey); } 
                                          else {
                          
                                                              let dictionarydata =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
                                                                method: "POST",
                                                                headers: { "Content-Type": "application/json", },
                                                                body: JSON.stringify({
                                                                  query: DictionaryQuery,
                                                                  // variables:{data:{slug:"mitraemlak.com"}} 
                                                                })
                                                              })
                                                                .then(async (res) =>{ return res?.json() })
                                                                .then(async (result) =>   {  return  result?.data?.dictionaryquery;  });


                                                                dictionarydata=await dictionarydata?.map( d=> d = {title:eval(`d?.title_${locale}`), img:eval(`d?.img_${locale}`), slug:eval(`d?.slug_${locale}`), key:d?.key}  )
                                                                          
                                                              cache.set(cachekey, dictionarydata, 100000);                                                                                                  
                                                              //console.log("dictionarydata is cached first time :/ ", cachekey);
                          
                                                }
        

                                                // console.log("dictionarydata:::.", dictionarydata)

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
