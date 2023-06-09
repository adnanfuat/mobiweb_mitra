


const relatedCategory = async ({lastslugitem}) => {

  


                                  let rawdata_category= await fetch(process.env.NEXT_PUBLIC_API_URL, {
                                    next:{revalidate:5000},
                                    method: "POST",                                    
                                    headers: { "Content-Type": "application/json", },
                                    body: JSON.stringify({
                                      query: RelatedCategoryQuery,
                                      variables: {data:{origin:(lastslugitem) }},
                                    }),
                                  })     

                                    let datajson_category=await rawdata_category.json();
                                    let relatedcategory = datajson_category?.data?.relatedcategoryquery;
                                                                      

                      return relatedcategory                 
    
}


export  default relatedCategory 



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



  
const RelatedCategoryQuery = 
`  query RelatedCategoryQuery ($data:JSON)  {
    relatedcategoryquery (data:$data) {
      id
      active
      parent_slug
      bigdata
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
      rank
      user
      i_key_1
      o_key_1
      key
      parent_key      
      createdat        
    }
  }`
;
