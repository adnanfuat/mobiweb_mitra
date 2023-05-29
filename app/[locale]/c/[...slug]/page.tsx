
import { RiContrast2Line, RiShieldCheckFill , RiShieldFill} from "react-icons/ri";
import {Ad_LayoutMain_Visitor_V2} from "./ad_layoutmain_visitor_v2"; 
import {Advert_VisitorMode_MetaData} from "./advert_visitormode_metadata"; 
import {Content_Visitor_Image} from "./content_visitor_image"; 
// import {Content_Visitor_Image} from "./content_visitor_"; 
import {Advert_Visitor_Tabs} from "./advert_visitor_tabs"; 
import s from "./s.module.css"
import Link from 'next/link';
import Image from "next/image";
import { DesignLayout } from "@/layouts/designlayout";
import DictionaryData from "@/components/utils/dictionarydata";
import WebData from "@/components/utils/webdata";
import { localeStatic } from "@/constants/localestatic";
//import dynamic from 'next/dynamic'
// import {siteProxy} from "@/constants/siteproxy"
// import { useSnapshot } from 'valtio';
//const Advert_Google_Map_Dynamic = dynamic(() => import("./advert_googlemap_dynamic"), { loading: () => <div className={s.advert_visitor_image_dynamic_loading}><div>Yükleniyor</div></div> } );  

let root_slug="cs"


export default async function  Page ({params}) { 

  let {locale, slug} = params ?? {}

  
  let dictionary=await DictionaryData({locale});
  let webdata=await WebData();

  let fileObjects=webdata?.bigdata?.fileObjects ?? []

  let advert=undefined
                            
  // let parents=[];
  
  let contents= webdata?.o_key_2?.contents ?? [];
  
  let content = contents?.find(co=>co?.id==slug[1])
  let parents=content?.parents;
    // let detail=advert?.bigdata?.history?.[0]?.lang?.tr?.detail;              
    // const [tab, settab] = useState(1)
    //  return <div>asdsaddsa</div>    
    // console.log("fileObjects::::.", webdata)

          return (
              <DesignLayout  title={`${content?.title_tr}`} dictionary={dictionary} params={params} webdata={webdata}>
                                <div className={s.shell}> 
                                      {/* {content?.title_tr}  {JSON.stringify(webdata?.bigdata?.fileObjects)} */}
                                      {/* {JSON.stringify(content)}  */}
                                      <div className={s.parents}>  <Content_Visitor_Parents parents={parents} params={params} root_slug={root_slug}/></div>                                                                                                                                                                     
                                      <div className={s.metadata}> <Advert_VisitorMode_MetaData content={content} params={params}/> </div>
                                      <div className={s.image}>   <Content_Visitor_Image content={content} fileObjects={fileObjects} params={params}/> </div>
                                      {/* <div className={s.maintext}> <Content_Visitor_MainText content={content} fileObjects={fileObjects} params={params}/> </div> */}
                                      {/* <div className={s.info}>      <Advert_Visitor_Info advert={advert} params={params}/> </div> */}
                                             
                                      <Advert_Visitor_Tabs advert={advert}/>       
                                </div>
                </DesignLayout>
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

      return (
        <div>
          
          <div className={s.parentslist}>
              {linkObj?.map((item, i)=>{
                        return <Link href={`/${locale}/${root_slug}/`+item?.fulllink} key={"link_"+i}><span>{i>0 && " > "}</span> {item?.label}</Link>
              })}
          </div>              
        </div>
      )
    }




    const Advert_Visitor_Owner = (props) => {

      let {advert} = props ?? {};

      let advertowner = advert?.bigdata?.instant_userdata;
      let phones = advert?.bigdata?.history[0]?.info?.user?.phones;      
      let advertiser=advert?.bigdata?.history[0]?.info?.advertiser;
      let company = advert?.bigdata?.instant_company;
      
        // console.log("adverttttttttt: ", company)   
           
      return (        
              <div className={s.ownerwr}>

                {!advertiser?.whoiscompany &&  <div className={s.ownerwho}>                          
                          <div>{advertowner?.name}</div>
                          <Image src={advertowner?.image} width={50} height={50} alt={advertowner?.name} className={s.ownerimg}/>                   
                </div>}

                {advertiser?.whoiscompany && <div className={s.whoiscompany}>                                                    
                          <Link href={`/co/${advertiser?.whoiscompany}`} style={{color:"white"}}  className={s.whoiscompanylink}>
                              <Image src={`${process.env.NEXT_PUBLIC_IMGSOURCE}/${company?.img_tr}`} width={50} height={50} alt={advertowner?.name} className={s.ownerimg}/>  
                              {company?.title_tr}
                          </Link>
                </div> }               


                          {phones?.length>0 && <div className={s.ownerphones}>
                              {phones?.map((p,i)=>
                                  
                                        <div className={s.phoneitem}  key={i}>
                                                <span> {p.verified ? <RiShieldCheckFill title='Doğrulanmış' size={20} color="green"/> : <RiShieldFill title="Doğrulanmamış" size={20} color="gray"/>} </span>
                                                <span> {p?.phone} </span>
                                        </div>

                                  )}
                          </div>}
              </div>
      )
    }
    

    
 
    

    
     const Advert_Visitor_Info = (props) => {

      let {advert, params} = props;
      
      let advert_properties = advert?.bigdata?.history?.[0]?.info?.properties; // İlana atanmış özellikler 

      if (advert_properties?.length>0)  return (
                                                            <div className={s.infowr}> 
                                                                {/* {JSON.stringify(params)} */}
                                                                  {advert_properties?.map((item, i )=>{

                                                                            if (item?.input_type=="multicheckbox" && item?.value?.length>0) {
                                                                            return <MultiCheckboxModule property={item} key={`mumo-${i}`}  params={params}/>
                                                                          }
                                                                          else if (item?.input_type=="textfield") {
                                                                            return <TextFieldModule property={item} key={`tefi-${i}`}  params={params}/>
                                                                          }
                                                                          else if (item?.input_type=="select") {
                                                                            return <SelectFieldModule property={item} key={`sefi-${i}`}  params={params}/>
                                                                          }
                                                                          else if (item?.input_type=="radio") {
                                                                            return <RadioFieldModule property={item} key={`rafi-${i}`}  params={params}/>
                                                                          }
                                                                      
                                                                  })}
                                                            
                                                            </div>
                                                )



      if (advert_properties?.length==0)  return (
                          <div className={s.infoemptywr}>
                                  <RiContrast2Line size={"5rem"}/>
                                  <span>Özellik tanımlanmamış</span>
                          </div>
              )                                                




    }
    



    const MultiCheckboxModule = (props) => {

      let {property, params} = props;

      let selecteds=property?.value;

      let {locale} = params ?? {}

      // console.log("selectedsselectedsselectedsselecteds: ", selecteds);

        return <div className={s.propertywr}> 

                  <div className={s.propertytitle}> 
                      {property?.key_label_tr}                   
                  </div>
                  
                    <div className={s.propertyitemswr}> 
                                {selecteds?.map((o, i)=>{
                                              
                                                
                                                return <div key={`mu-${i}`}>{eval(`o?.value_label_${locale}`)}</div>

                                })}
                    </div>
              </div>
    }

    const TextFieldModule = (props) => {

      let {property, params} = props ?? {}

      let {locale} = params ?? {}
      

      return <div className={s.onelineproperty}>
         {/* {JSON.stringify(property)}        */}
                          <div className={s.xxxxxxxxxxxx}>  {eval(`property?.key_label_${locale}`) ?? eval(`property?.key_label_${localeStatic}`)} </div>
                          <div className={s.xxxxxxxxxxxxxxx}> {property?.value_label_tr} </div>                          
             </div>
  }
  
      const SelectFieldModule = (props) => {

          let {property, params} = props ?? {}        
          
          let {locale} = params ?? {}
          

          return <div className={s.onelineproperty}>
                          <div className={s.ddd}> {property?.key_label_tr} </div>
                          <div className={s.eeee}> {property?.value_label_tr} </div>                          
                 </div>
      }

      const RadioFieldModule = (props) => {

        let {property, params} = props ?? {}

        let {locale} = params ?? {}

        return <div>Radio.........</div>
      }

                         
      
      // export async function getStaticPaths() {
      
      //   // const builddata = await graphcms?.request(CompanyQuery_BuildList, {take:buildcompany_count, full:buildcompany_full});  
      //   // const result = await builddata?.companyquery_buildlist;    
      //   // let paths=await result?.bigdata?.paths ?? [];
      
      //   let paths=[{params:{slug:["aaaa", "497615"]}}];    
      
      //     return { paths, fallback: 'blocking' }
      //   }  





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
      
      
      
      
      
      