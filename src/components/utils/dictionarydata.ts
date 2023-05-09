import { cache} from "./cache";

const DictionaryData = async ({locale}) => {
              
                            let cachekey= `dictionarydata`
                            let dictionarydata = cache.get(cachekey);
                            
                            if (dictionarydata?.length>0)  { 
                                                        // console.log("dictionarydata is alreadycached:)", cachekey, locale, dictionarydata?.[0]?.slug_tr);
                                                   }  //dictionarydata[0]

                                          else {
                          
                                                              dictionarydata =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
                                                                method: "POST",
                                                                headers: { "Content-Type": "application/json", },
                                                                body: JSON.stringify({
                                                                  query: DictionaryQuery,
                                                                  // variables:{data:{slug:"mitraemlak.com"}} 
                                                                })
                                                              })
                                                                .then(async (res) =>{ return res?.json() })
                                                                .then(async (result) =>   {  return  result?.data?.dictionaryquery;  });

                                                                // let data = await dictionarydata?.json();
                                                                // let data = await data?.dictionaryquery;

                                                                cache.set(cachekey, dictionarydata, 100000);    
                                                                                                                                                                                                                                                                                                      
                                                              console.log("dictionarydata is cached first time :/ ", cachekey, locale);
                          
                                                }
        
                                                // console.log("dictionarydata:::. 1", dictionarydata?.[0]?.title_tr)

                                                dictionarydata= dictionarydata?.map( d=> d = {title:eval(`d?.title_${locale}`), img:eval(`d?.img_${locale}`), slug:eval(`d?.slug_${locale}`), key:d?.key}  )

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
