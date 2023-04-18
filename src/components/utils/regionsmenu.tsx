
import s from "./regionsmenu.module.css"
import Link from "next/link"
import { useRouter } from 'next/router';

import { BiWorld, BiMapAlt, BiMapPin, BiMap } from "react-icons/bi";



export const RegionsMenu = ({props}) => 
{
    let { countries} =props;       
    const router = useRouter();      
    let { rightbar } = projectsettingsFunc() ?? {}
    let { country, city , district, slug } = router?.query;

    let list= 1 ////Sr gibi bir sitede şehirlerin listelenmesi anlamlımı ? Tabi ki değil. Tek şehir var zaten
    let fixedcountry = "turkiye"
    let fixedcity = "sakarya"; // Sabiltenmiş şehir

    country= country ?? fixedcountry; // Eğer query paramaterstan country gelmemesine karşına sabitlenmiş bir country varsa onu al

    // console.log("countries::. ", fixedcountry);
    countries= fixedcountry ? countries?.filter(c=>c?.slug_tr==fixedcountry) : countries; // Sabit bir ülke atandıysa sadece onu ver..

    

    slug= slug ? slug.join("/") :""
    
    let fulllink=`${"/ads/"}` + slug
    
    

    return ( 
      <div style={wrapperForWithSubmenus}> 

        <div style={sublinkscontainer}> 
                            
               <div className={s.rmainwr}>
      
                        {
                          countries.map(countryitem=> {      
                            
                                                let selected = countryitem.slug_tr==country;

                                                let cities = fixedcity ? countryitem?.cities?.filter(c=>c?.slug_tr==fixedcity) : countryitem?.cities; // Sabit bir ülke atandıysa sadece onu ver..

                                                        return (                                                                
                                                                    <div className={s.categorynamewr}>  

                                                                            {/* { console.log("categories::.:::::", countryitem) } */}

                                                                            

                                                                        {<div className={s.categorynameitem}  style={{fontSize:16}}>  
                                                                              { <BiWorld/> }                                                                        
                                                                              <span><Link  href={{pathname:fulllink, query:{country:countryitem?.slug_tr}}}  style={{textDecoration:selected ? "underline": "none"}}>{countryitem?.title_tr}</Link></span>                                                                              
                                                                        </div>}
                                                                          
                                                                        {selected && <Cities cities={cities} countryitem={countryitem} fulllink={fulllink}/>}
                                                                                
                                                                                                                                                                                                                              
                                                                    </div>      
                                                              )                      
                                                  })
                        }

                </div>
      </div>
      </div> 
    )
}



const Cities = (props) => {

  
    let { selected, cities, countryitem, fulllink} = props ?? {} 

    const router = useRouter();      
    let { rightbar } = projectsettingsFunc() ?? {}
    let fixedcity = rightbar?.fixedcity; // Sabiltenmiş şehir
    let { country, city , district } = router?.query;

   // city= city ?? fixedcity; // Eğer query paramaterstan country gelmemesine karşına sabitlenmiş bir country varsa onu al
    
    return(
                  <div className={s.citieswr}> 
                  
                            {cities?.map(cityitem=>{
              
                                                                let selected = cityitem.slug_tr==city;
              
                                                                return  <div className={s.categorynamewr}>
                                                                            <div className={s.categorynameitem}  style={{fontSize:15}}>  
                                                                                { <BiMapAlt/> } 
                                                                                <span><Link href={{pathname:fulllink, query:{country:countryitem?.slug_tr, city:cityitem?.slug_tr}}} style={{textDecoration:selected ? "underline": "none"}}>{cityitem?.title_tr}</Link></span>                                                                              
                                                                            </div>
                                                  
                                                                            {/* {JSON.stringify(cityitem?.districts)} */}
                                                                                    {
                                                                                      selected && <Districts districts={cityitem?.districts} countryitem={countryitem} cityitem={cityitem} fulllink={fulllink}/>
                                                                                    }
                                                  
                                                            </div>
              
              
                          }) }  
                          
                        </div>                    
            )
  
}







const Districts = (props) => {

  let { districts, cityitem, fulllink, countryitem  } = props ?? {}     

  const router = useRouter();      
  let { rightbar } = projectsettingsFunc() ?? {}
  let { country, city , district } = router?.query;

  return (
            <div className={s.citieswr}> 
                {districts?.map(districtitem=>{

                          let selected = districtitem.slug_tr==district;

                          

                            return( <div className={s.categorynamewr}>
                                              <div className={s.categorynameitem}  style={{fontSize:14}}>  
                                                  { <BiMapPin/> } 
                                                  <span><Link  href={{pathname:fulllink, query:{country:countryitem?.slug_tr, city:cityitem?.slug_tr, district:districtitem?.slug_tr}}} style={{textDecoration:selected ? "underline": "none"}}>{districtitem?.title_tr}</Link></span>                                                                              
                                              </div>
              
                                              {
                                                selected && <Subdistricts subdistricts={districtitem?.subdistricts} districtitem={districtitem} countryitem={countryitem} cityitem={cityitem} fulllink={fulllink}/>
                                              }              
                                      </div>)


        }) }  
                                                  </div>
  )
}







const Subdistricts = (props) => {
  
  let { selected,  city, subdistricts,  cityitem, fulllink, countryitem, districtitem   } = props ?? {}      

  const router = useRouter();
  let { rightbar } = projectsettingsFunc() ?? {}
  let { country, district, subdistrict } = router?.query;

  console.log("subdistrictsubdistrict: ", subdistricts);
  

  return (
    <div className={s.citieswr}> 
                                  { subdistricts?.map(subdistrictitem=>{

                                                                              let selected = subdistrictitem.slug_tr==subdistrict;

                                                                              return  (<div className={s.categorynamewr}>
                                                                              <div className={s.categorynameitem} style={{fontSize:13}}>  
                                                                                  { <BiMap/> } 
                                                                                  <span><Link  href={{pathname:fulllink, query:{country:countryitem?.slug_tr, city:cityitem?.slug_tr, district:districtitem?.slug_tr,  subdistrict:subdistrictitem?.slug_tr}}} style={{textDecoration:selected ? "underline": "none"}}>{subdistrictitem?.title_tr}</Link></span>                                                                              
                                                                              </div>                                                                                                                                                                                                              
                                                                          
                                                                          </div>)


                                          }) }  
                                        </div>
  )
}







const RelatedSubCategoriesQuery = 
`  query RelatedSubCategoriesQuery ($data:JSON)  {
    relatedsubcategoriesquery (data:$data) {
      id
      active
      parent_slug
      bigdata
      title_tr
      title_en
      title_fr
      title_ar
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
      
    }
  }`
;



const wrapperForWithSubmenus = {display:"flex", flexDirection:"column", gap:10}

let sublinkscontainer = {border:"0px solid black", display:"flex", gap:6, flexDirection:"column", padding:"10px 0px 10px 0px" , backgroundColor:"transparent" }