import R_Shell from  "@/components/commonnew/richcontent/r_shell";
import { AdvertQuery_Raw } from '@/__queries/global/advert/advertquery_raw';
import {_userState} from "@/constants/states/user";


export default function Index  (props)  { return <R_Shell  {...props}/> }


export async function getStaticProps({params:{slug}, locale}) {
        
  let advert=null;
  let categories=[];         
  let id=slug?.[1];
   
  try {    
          // const  data_category   = await graphcms?.request(CategoryQuery_Raw, {data:{parent_slug:(lastslugitem=="index" ?  undefined : lastslugitem )   }});
          // category = data_category?.categoryquery ?? [];
          let rawdata_advert= await fetch(process.env.NEXT_PUBLIC_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({
              query: AdvertQuery_Raw,
              variables: {data:{id}},
            }),
          })       
            let datajson_advert=await rawdata_advert.json()
            advert = datajson_advert?.data?.advertquery;   

            
            // let rawdata_categories= await fetch(process.env.NEXT_PUBLIC_API_URL, {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json", },
            //   body: JSON.stringify({
            //     query: CategoriesQuery_Raw,
            //     variables:  {data:{origin:"ilanlar"}},
            //   }),
            // })       
            //   let datajson_categories=await rawdata_categories.json()
            //   categories = datajson_categories?.data?.categoriesquery;                    
            


  } catch (error) {    
          console.log("advertedit getStaticProps error::::::::::::::::::::::::", error)
  }


  // title="Emlak kategorileri" consolelink="console/realestates" category={category}  adverts={adverts}  countries={countries} bigbigparent_key={bigbigparent_key}  bigbigparent_slug={bigbigparent_slug} urlprefix={`rs`}  urlprefix_editpage={"realestate"} urlprefix_viewpage={"r"}


    return {
      props: { 
          categories, 
          advert:advert ?? null, 
          locale,
          consolelink:"console/realestate",                        
      }, 
      revalidate: 3000,      
    };
  }
  
  
  

export async function getStaticPaths() {

  // const builddata = await graphcms?.request(CompanyQuery_BuildList, {take:buildcompany_count, full:buildcompany_full});  
  // const result = await builddata?.companyquery_buildlist;    
  // let paths=await result?.bigdata?.paths ?? [];

    let paths=[{params:{slug:["satilik-luks-ofis-kati", "496666"]}}];    
    
    return { paths, fallback: 'blocking' }

  }  








//   export async function getStaticProps({params}) {
   
//     // let {params} = props ?? {} ;     
//     let {slug} = params ?? {} ;  

//     console.log("params", params);
      
//     let  adverts     =    [];    
//     let  category    =  undefined;
//     let  countries = [];
     
//     let bigbigparent_key="";

//     let bigbigparent_slug=slug?.[0];

//     if (bigbigparent_slug=="emlak") {
//       bigbigparent_key="1668310884"
//     }

//     try {    
          
//       adverts=await advertsQuery_WithCategories_Func({slug, bigbigparent_key})     
//       countries = await cacheCountries();
//       category  = await relatedCategoryQuery_Func({lastslugitem:slug[slug?.length-1]})           
  
//     } catch (error) {
      
//       console.error("advertsquery_withcategories ____  _____ ____ ", error)
//     }
  
  
  
//       return {
//         props: {category,  adverts ,  countries , slug ,  bigbigparent_key, bigbigparent_slug }, 
//         revalidate: 500,      
//       };
//     }
    
    

  
  


// export async function getStaticPaths() {
    
//   let paths=[{params:{ slug:["ilanlar"]}}];    

//     return { paths, fallback: 'blocking' }
//   }  

    


