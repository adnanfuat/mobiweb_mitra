




export async function cacheCountries() {
   
  
  let countries=[];
    

            await fetch(process.env.NEXT_PUBLIC_API_URL, {
              next:{revalidate:100000},
              method: "POST",
              headers: { "Content-Type": "application/json", },
              body: JSON.stringify({
                query: CountriesNewQuery_Raw,
                // variables: {
                //   now: new Date().toISOString(),
                // },
              }),
            })
              .then((res) => res.json())
              .then((result) => {
                countries = result?.data?.countriesnewquery ?? [];
                //console.log("cache country :/", countries[1]);                
              });

          
          
    


    return countries



    //  return countries
    

}




 

const CountriesNewQuery_Raw = 
`  query CountriesNewQuery ($active: Int) {
          countriesnewquery (active:$active) {

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

            cities {
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
              
              districts {
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
                subdistricts {
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
                }
              }


            }

          }
  }`




