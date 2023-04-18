

export function BolgeIsmiOgren(slug, type, countries) {


    let result=null;
    if (type=="mahalle") {
                            countries?.map(country=>{   
                                    country?.cities?.map(city=>{
                                            city?.districts?.map(district=>{
                                                
                                                district?.subdistricts?.map(subdistrict=>{
                                
                                                                        if (subdistrict.slug_tr==slug)
                                                                        {
                                                                                result= subdistrict.title_tr;
                                                                        }    

                                                })                                
                                            })

                                    })
                            });        
                        }  






if (type=="ilce") {
        countries?.map(country=>{   
                country?.cities?.map(city=>{
                        city?.districts?.map(district=>{
                                if (district.slug_tr==slug)
                                {
                                        result= district.title_tr;
                                }

                        })

                })
        });        
        }                         

     
      if (type=="il") {
                                countries?.map(country=>{   
                                        country?.cities?.map(city=>{
                                                
                                                        if (city.slug_tr==slug)
                                                        {
                                                                result= city.title_tr;
                                                        }
    
                                                
    
                                        })
                                });        
                            }   
                            
     
     if (type=="ulke") {
   
            
                                countries?.map(country=>{   

                                        // console.log("ggggg",country.slug_tr)
                                                
                                                        if (country.slug_tr==slug)
                                                        {
                                                                result= country.title_tr;
                                                                // console.log("countries ilce.ilce_adii",result,">>", slug, type, countries);
                                                        }
    
                                                
    
                                        
                                });        
                            }                               






return result;
}                
                        

