// import { advertsQuery_WithCategories_Func } from "@/components/commonnew/richcontent/richcontentsquery_withcategories_func";
// import { relatedCategoryQuery_Func } from "@/components/commonnew/category/relatedcategoryquery_func";
// import Rs_Shell from  "@/components/commonnew/richcontent/rs_shell";
// import { cacheCountries } from "@/components/commonnew/cachecountries";

import Rs_Shell from "@/components/richcontent/rs_shell";



export default function Index  (props)  {

  console.log("props::::::.", props);

  let {params} = props ?? {};
  let {slug} = params ?? {};
  //  return <div>sadsaddsa</div>

    // let {slug, category, adverts, countries,  bigbigparent_key, bigbigparent_slug, parents } = props ?? {};

    if (slug[0]=="emlak") {
                              return <Rs_Shell  title="Emlak kategorileri" consolelink="console/realestates" category={category}  adverts={adverts}  countries={countries} bigbigparent_key={bigbigparent_key}   bigbigparent_slug={bigbigparent_slug} urlprefix={`rs`}  urlprefix_editpage={"realestate"} urlprefix_viewpage={"r"} parents={parents}/>
                          }
                            
  
                                        }


 

  



  // export async function getStaticProps({params}) {
   
  //   // let {params} = props ?? {} ;     
  //   let {slug} = params ?? {} ;  

  //   console.log("params", params);
      
  //   let  adverts     =    [];    
  //   let  category    =  undefined;
  //   let  countries = [];
  //   let parents=[];  // Bu sadece tekil sayfada dolu geliyor... Kategori sayfalarında undefined gelince hata verdirmesin diye...
     
  //   let bigbigparent_key="";

  //   let bigbigparent_slug=slug?.[0];

  //   if (bigbigparent_slug=="emlak") {
  //     bigbigparent_key="1668310884"
  //   }

  //   try {    
          
  //     adverts=await advertsQuery_WithCategories_Func({slug, bigbigparent_key})     
  //     countries = await cacheCountries();
  //     category  = await relatedCategoryQuery_Func({lastslugitem:slug[slug?.length-1]})           
  
  //   } catch (error) {
      
  //     console.error("advertsquery_withcategories ____  _____ ____ ", error)
  //   }
  
  
  
  //     return {
  //       props: {category,  adverts ,  countries , slug ,  bigbigparent_key, bigbigparent_slug, parents }, 
  //       revalidate: 500,      
  //     };
  //   }
    
    

  
  


// export async function getStaticPaths() {
    
//   let paths=[{params:{ slug:["ilanlar"]}}];    

//     return { paths, fallback: 'blocking' }
//   }  

    


