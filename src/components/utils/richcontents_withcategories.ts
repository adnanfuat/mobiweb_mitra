
import { cache} from "./cache";

const richContents_WithCategories = async ({slug, active}) => {

  let cachekey= `richcontents_${active ? "active" : "passive"}_${JSON.stringify(slug)}`
  let richcontents = cache.get(cachekey);
  
  if (!!richcontents)  {        
                                   console.log("richcontents is alreadycached:)", cachekey);      
                                } 
                 else {

                                    let rawdata= await fetch(process.env.NEXT_PUBLIC_API_URL, {
                                      method: "POST",
                                      headers: {  "Content-Type"  : "application/json" },
                                      body: JSON.stringify({
                                        query: AdvertsQuery_WithCategories_Raw,
                                        variables: {data:{slug, active:1, onlyauthdata:false}},
                                      }),
                                    })       
                                      let datajson=await rawdata.json()
                                      richcontents = datajson?.data?.advertsquery_withcategories;     
                                                
                                  cache.set(cachekey, richcontents, 100000);
                                  console.log("richcontents is cached first time :/ ", cachekey);      
                      }
  
                      return richcontents                 
    

}


export  default richContents_WithCategories 



const AdvertsQuery_WithCategories_Raw = 
`  query AdvertsQuery_WithCategories  ($data: JSON ) {
        advertsquery_withcategories (data:$data) {
            id
            active
            parent_slug
            parent_key
            bigparent_slug
            bigdata
            title_tr
            slug_tr
            slug_en
            slug_fr
            slug_ar
            rank
            img_tr
            user
            createdat
            country_slug
            city_slug
            district_slug
            subdistrict_slug    
            parentObj{
              title_tr
              slug_tr
            }
            getconnectedfiles {
              id
              bigdata
              rank
              slug_tr
              title_tr
              parent
              user
            }      
            
            userdata {
              image
            }
          }
  }`
;