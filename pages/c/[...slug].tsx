import {Advert_VisitorMode_MetaData} from "@/components/ad/advert_visitormode_metadata"; 
import {Content_Visitor_Image} from "@/components/c/content_visitor_image"; 
import {Content_Visitor_MainText} from "@/components/c/content_visitor_maintext"; 
import {Advert_Visitor_Tabs} from "@/components/c/advert_visitor_tabs"; 
import s from "./s.module.css"
import Link from 'next/link';
import DictionaryData from "@/components/utils/dictionarydata";
import WebData from "@/components/utils/webdata";
import { DesignLayout_Vitalis_BackPages } from "@/src/components/themes/vitalis/layouts/designlayout_vitalis_backpages";
import { DesignLayout_Mitra_BackPages } from "@/themes/mitra/layouts/designlayout_mitra_backpages";
import { DesignLayout_Arges } from "@/themes/arges/layouts/designlayout_arges";
import { cacheCountries } from "@/components/utils/cachecountries";

let root_slug="cs";


const Content = (props) => {
  let {params, dictionary, webdata, fileobjects, countries} = props ?? {}
    let {locale, slug} = params ?? {}
      
    let contents= webdata?.o_key_2?.contents ?? [];      
    let content = contents?.find(co=>co?.id==slug[1]);
  
      //////////////////////////////////// --  
      let info = webdata?.bigdata?.history[0];
      let lang = info?.lang;
      let logofiles =  lang?.tr?.logofiles;

      let logo = fileobjects?.find(f=>f?.slug_tr  == logofiles[0]);
      /////////////////////////////////// --
      
     let theme_name = webdata?.bigdata?.theme?.name;
      
        if (theme_name=="mitra") {
          return (<DesignLayout_Mitra_BackPages title={`${content?.title_tr}`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RsData params={params}  webdata={webdata}/> </DesignLayout_Mitra_BackPages> )                      
        }
        else if (theme_name=="arges") {
          return (<DesignLayout_Arges title={`${content?.title_tr}`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RsData  params={params}  webdata={webdata}/> </DesignLayout_Arges> )                      
        }
        else if (theme_name=="vitalis") {
          return (<DesignLayout_Vitalis_BackPages title={`${content?.title_tr}`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}><RsData params={params} webdata={webdata}/> </DesignLayout_Vitalis_BackPages> )                      
        }     
        else 
        {
          return (<DesignLayout_Mitra_BackPages title={`${content?.title_tr}`} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RsData params={params}  webdata={webdata}/> </DesignLayout_Mitra_BackPages> )                      
        }   
      
        // return <div>ASSA{JSON.stringify(theme_name)}</div>
  
}

export default Content

    

    const RsData =  (props) => {

      let {params, dictionary, webdata} = props ?? {};
      let {locale, slug} = params ?? {};
          
      let fileObjects=webdata?.bigdata?.fileObjects ?? []    
      let advert=undefined;                                
      
      let contents= webdata?.o_key_2?.contents ?? [];      
      let content = contents?.find(co=>co?.id==slug[1]);
      let parents=content?.parents;
      
          return (
                  <div className={s.shell}> 
                      {/* {content?.title_tr}  {JSON.stringify(webdata?.bigdata?.fileObjects)} */}
                      {/* {JSON.stringify(content)}  */}
                      <div className={s.parents}>    <Content_Visitor_Parents parents={parents} params={params} root_slug={root_slug}/></div>                                                                                                                                                                     
                      <div className={s.metadata}>   <Advert_VisitorMode_MetaData content={content} params={params}/> </div>
                      <div className={s.image}>      <Content_Visitor_Image content={content} fileObjects={fileObjects} params={params}/> </div>
                      <div className={s.maintext}>   <Content_Visitor_MainText content={content} fileObjects={fileObjects} params={params}/> </div>
                      {/* <div className={s.info}>      <Advert_Visitor_Info advert={advert} params={params}/> </div> */}
                            
                      {/* <Advert_Visitor_Tabs advert={advert}/>        */}
                  </div>
            )

    }




    const Content_Visitor_Parents = (props) => {

      let {parents, params, root_slug} = props ?? {};
      let {locale} = params ?? {};
      

      // parents=parents?.filter(item=> ( item?.slug_tr!="emlak" ) )
      
      
      let linkObj=parents?.map((item, index)=>{
                
                          item={value:item?.slug_tr, label:item?.title_tr, fulllink:(parents?.filter((p,i)=>i<=index)?.map(p=>p?.slug_tr)?.join("/"))}

                          return item
                
                }) ?? []
          
             // linkObj= linkObj?.length>0 ? [{value:"", label:"İlanlar", fulllink:""}    , ...linkObj] : [] // Sadece ilan sayfasındayken yukarıdaki parent breadcrumbını göster. Haricinde ana sayfada gösterme

      return (<div className={s.parentslist}>
              {linkObj?.map((item, i)=>{
                        return <Link href={`/${root_slug}/`+item?.fulllink} key={"link_"+i}><span>{i>0 && " > "}</span>{item?.label}</Link>
              })}
          </div>)
    }



 
    





      export const WebQuery = 
      `  query WebQuery ($slug: JSON)  {
          webquery (slug: $slug) {
            id
            title_tr
            slug_tr
            bigdata
            createdat
            updatedat
            active
            o_key_1
            o_key_2
            
          }
        }`
      ;
      
      
      
      
      
      const FilesQuery_SpecialRequests =
      `  query FilesQuery_SpecialRequests ($data:JSON )  {
            filesquery_specialrequests (data:$data) {
            id
            title_tr
            bigdata
            slug_tr
            title_tr
            active
            user
            o_key_1
          }
        }`
      ;
      
      
      


      export async function getStaticProps(data) {


        let {defaultLocale, locale, params} = data ?? {};
       
        //  console.log("sadasdsadsd", params);
             
       
         let dictionary= await DictionaryData({locale: locale ?? "tr"});  
         let webdata=await WebData();
         let countries=await cacheCountries();
       
        //  console.log("webdatawebdata: ", webdata);


         let theme_name = webdata?.bigdata?.theme?.name;
       
        
          
         let cuffs= webdata?.bigdata?.history?.[0]?.lang?.tr?.cuffs;
         let lang= webdata?.bigdata?.history?.[0]?.lang?.tr;
         let logofiles =  lang?.logofiles;
         
       
           let fileobjects =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
             next:{revalidate:10},                                   
             method: "POST",
             headers: { "Content-Type": "application/json", },
             body: JSON.stringify({
               query: FilesQuery_SpecialRequests,
               variables:{data:{specialrequests:logofiles}} 
             })
           })
             .then((res) => res.json())
             .then((result) => { return result?.data?.filesquery_specialrequests; });    
             
             let logo = fileobjects?.find(f=>f?.slug_tr  == logofiles[0])
       
                                                                       
       
           let props = { webdata, dictionary, fileobjects, logo, countries,params };
                              
           return { props, revalidate: 20 };
                                     
       }
       
       
                    
       export async function getStaticPaths({locales}) {
        // let  paths = await cacheSubsectorQuery_BuildList()    
        let paths=[{params:{slug:["aaaaaaa"]}}];           
        return { paths, fallback: 'blocking' }
                                                        }
