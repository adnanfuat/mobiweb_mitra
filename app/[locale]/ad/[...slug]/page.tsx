
import { RiContrast2Line, RiShieldCheckFill , RiShieldFill} from "react-icons/ri";
import {Ad_LayoutMain_Visitor_V2} from "./ad_layoutmain_visitor_v2"; 
import {Advert_VisitorMode_MetaData} from "./advert_visitormode_metadata"; 
import {Advert_Visitor_Image} from "./advert_visitor_image"; 
import {Advert_Visitor_Tabs} from "./advert_visitor_tabs"; 
import s from "./s.module.css"
import Link from 'next/link';
import Image from "next/image";
import { DesignLayout } from "@/layouts/designlayout";
import DictionaryData from "@/components/utils/dictionarydata";
import WebData from "@/components/utils/webdata";
//import dynamic from 'next/dynamic'
// import {siteProxy} from "@/constants/siteproxy"
// import { useSnapshot } from 'valtio';
//const Advert_Google_Map_Dynamic = dynamic(() => import("./advert_googlemap_dynamic"), { loading: () => <div className={s.advert_visitor_image_dynamic_loading}><div>Yükleniyor</div></div> } );  



export default async function  Page ({params}) { 

  let {locale, slug} = params ?? {}

  
  let dictionary=await DictionaryData({locale});
  let webdata=await WebData();

  let rawdata_advert= await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({
      query: AdvertQuery_Raw,
      variables: {data:{id:slug?.[1]}},
    }),
  })       
    let datajson_advert=await rawdata_advert.json()
    let advert = datajson_advert?.data?.advertquery;   

    // console.log("paramssss", slug);
                        
    let parents=advert?.bigdata?.history?.[0]?.info?.parents;
    let detail=advert?.bigdata?.history?.[0]?.lang?.tr?.detail;
            
    // const [tab, settab] = useState(1)

    //  return <div>asdsaddsa</div>
    
          return (
              <DesignLayout  title={`${advert?.title_tr}`} dictionary={dictionary} params={params} webdata={webdata}>
                                <div className={s.shell}> 
                                      <div className={s.parents}><Advert_Visitor_Parents parents={parents} params={params}/></div>                                                                                                                                                                     
                                      <div className={s.metadata}> <Advert_VisitorMode_MetaData advert={advert}/>   </div>
                                      <div className={s.image}><Advert_Visitor_Image advert={advert}/></div>
                                      <div className={s.info}> <Advert_Visitor_Info advert={advert}/> </div>
                                      <div className={s.who}><Advert_Visitor_Owner advert={advert}/>                                       
                                      </div>         
                                      <Advert_Visitor_Tabs advert={advert}/>       
                                </div>
                </DesignLayout>
                )
    
    }

    



    const Advert_Visitor_Parents = (props) => {

      let {parents, params} = props ?? {};
      let {locale} = params ?? {};

      // let parents=advert?.bigdata?.history?.[0]?.info?.parents;

      parents=parents?.filter(item=> ( item?.slug_tr!="emlak" ) )
      
      
      let linkObj=parents?.map((item, index)=>{
                
                          item={value:item?.slug_tr, label:item?.title_tr, fulllink:(parents?.filter((p,i)=>i<=index)?.map(p=>p?.slug_tr)?.join("/"))}

                          return item
                
                }) ?? []
          
              linkObj= linkObj?.length>0 ? [{value:"", label:"İlanlar", fulllink:""}    , ...linkObj] : [] // Sadece ilan sayfasındayken yukarıdaki parent breadcrumbını göster. Haricinde ana sayfada gösterme

      return (
        <div>
          
          <div className={s.parentslist}>
              {linkObj?.map((item, i)=>{
                        return <Link href={`/${locale}/ads/`+item?.fulllink} key={"link_"+i}><span>{i>0 && " > "}</span> {item?.label}</Link>
              })}
          </div>
              {/* {JSON.stringify(linkObj)} */}          
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

      let {advert} = props;
      
      let advert_properties = advert?.bigdata?.history?.[0]?.info?.properties; // İlana atanmış özellikler 

      if (advert_properties?.length>0)  return (
                                                            <div className={s.infowr}>
                                                                  {advert_properties?.map((item, i )=>{

                                                                            if (item?.input_type=="multicheckbox" && item?.value?.length>0) {
                                                                            return <MultiCheckboxModule property={item} key={`mumo-${i}`}/>
                                                                          }
                                                                          else if (item?.input_type=="textfield") {
                                                                            return <TextFieldModule property={item} key={`tefi-${i}`}/>
                                                                          }
                                                                          else if (item?.input_type=="select") {
                                                                            return <SelectFieldModule property={item} key={`sefi-${i}`}/>
                                                                          }
                                                                          else if (item?.input_type=="radio") {
                                                                            return <RadioFieldModule property={item} key={`rafi-${i}`}/>
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

      let {property} = props;

      let selecteds=property?.value;

      // console.log("selectedsselectedsselectedsselecteds: ", selecteds);

        return <div className={s.propertywr}> 

                  <div className={s.propertytitle}> 
                      {property?.key_label_tr}                   
                  </div>
                  
                    <div className={s.propertyitemswr}> 
                                {selecteds?.map((o, i)=>{
                                              
                                                
                                                return <div key={`mu-${i}`}>{o?.value_label_tr}</div>

                                })}
                    </div>
              </div>
    }

    const TextFieldModule = (props) => {

      let {property} = props ?? {}
      

      return <div className={s.onelineproperty}>        
                          <div className={s.xxxxxxxxxxxx}> {property?.key_label_tr} </div>
                          <div className={s.xxxxxxxxxxxxxxx}> {property?.value_label_tr} </div>                          
             </div>
  }
  
      const SelectFieldModule = (props) => {

          let {property} = props ?? {}        
          
          

          return <div className={s.onelineproperty}>
                          <div className={s.ddd}> {property?.key_label_tr} </div>
                          <div className={s.eeee}> {property?.value_label_tr} </div>                          
                 </div>
      }

      const RadioFieldModule = (props) => {

        let {property} = props ?? {}

        return <div>Radio.........</div>
      }

                         
      
      // export async function getStaticPaths() {
      
      //   // const builddata = await graphcms?.request(CompanyQuery_BuildList, {take:buildcompany_count, full:buildcompany_full});  
      //   // const result = await builddata?.companyquery_buildlist;    
      //   // let paths=await result?.bigdata?.paths ?? [];
      
      //   let paths=[{params:{slug:["aaaa", "497615"]}}];    
      
      //     return { paths, fallback: 'blocking' }
      //   }  






        const AdvertQuery_Raw = 
        `  query AdvertQuery  ($data: JSON ) {
                advertquery (data:$data) {
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
                    parentObj{
                      title_tr
                      slug_tr
                    }
            
                    getfulladdress{
                      country
                      city
                      district
                      subdistrict
                    }                        
                    bigparentObj{
                      title_tr
                      slug_tr
                      properties
                    }     
                    getconnectedfiles {
                      id
                      bigdata
                      rank
                      slug_tr
                      title_tr
                      parent
                      user
                      i_key_1
                    }       
                  }
          }`
        ;        