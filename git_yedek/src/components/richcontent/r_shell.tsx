import s from "./r_shell.module.css";
import { RiContrast2Line, RiShieldCheckFill, RiShieldFill} from "react-icons/ri";
import {RichContent_LayoutMain_Visitor} from "@/components/commonnew/richcontent/richcontent_layoutmain_visitor"; 
import {Advert_VisitorMode_MetaData} from "@/components/commonnew/richcontent/richcontent_visitormode_metadata"; 
import {isLogged} from "@/components/hooksnew/islogged";
import { AdvertQuery_Raw } from '@/__queries/global/advert/advertquery_raw';
import { RiEdit2Fill } from "react-icons/ri";
import Link from 'next/link';
import Image from "next/image";
import dynamic from 'next/dynamic'
import {_userState} from "@/constants/states/user";
import { useSnapshot } from 'valtio';
import { useState } from "react";

const Advert_Visitor_Image_Dynamic = dynamic(() => import("./richcontent_visitor_image_dynamic"), { loading: () => <div className={s.advert_visitor_image_dynamic_loading}><div>Yükleniyor</div></div> } );  
const Advert_Google_Map_Dynamic = dynamic(() => import("@/components/commonnew/richcontent/richcontent_googlemap_dynamic"), { loading: () => <div className={s.advert_visitor_image_dynamic_loading}><div>Yükleniyor</div></div> } );  


export default function  R_Shell (props) { 

        let {advert, locale,consolelink } = props;
        const { user} = isLogged();
        let owner = user?.email==advert?.user;
        
        let parents=advert?.bigdata?.history?.[0]?.info?.parents ?? [];
        let detail=advert?.bigdata?.history?.[0]?.lang?.tr?.detail;

        let bigbigparent_key=advert?.bigbigparent_key;        
        
        const [tab, settab] = useState(1);      

          return (
              <RichContent_LayoutMain_Visitor  title={advert?.title_tr} parents={parents}  bigbigparent_key={bigbigparent_key}  pagetype="richcontent" urlprefix_parents={"rs"}>     
                                                         
                            <div className={s.shell}>    
                                  <div className={s.metadata}> <Advert_VisitorMode_MetaData advert={advert}/> </div>
                                  <div className={s.image}> <Advert_Visitor_Image advert={advert}/>  </div>
                                  <div className={s.info}> <Advert_Visitor_Info advert={advert}/> </div>
                                  <div className={s.who}> <Advert_Visitor_Owner advert={advert}/> 
                                      { owner && <Link href={`/${consolelink}/${advert?.id}`} style={{alignItems:"center", display:"flex", gap:6}}> <RiEdit2Fill size={25}/> İlan düzenle </Link> } 
                                  </div>         
                                  
                                                           
                                
                                  <div className={s.tabswr}>

                                      <div className={s.tabs}> 
                                          <div className={s.tab} style={{borderTopColor:tab==1 ? "darkgray" : "transparent"}} onClick={()=>settab(1)}>Açıklama</div>
                                          <div className={s.tab} style={{borderTopColor:tab==2 ? "darkgray" : "transparent"}} onClick={()=>settab(2)}>Konum</div>                                      
                                      </div>

                                      <div className={s.tabpanelwr}>                                          
                                          {tab==1 &&  <div dangerouslySetInnerHTML={{__html: detail}} ></div>}
                                          {tab==2 && <Advert_Google_Map_Dynamic  advert={advert}/>}                                          
                                      </div>

                                </div>

                            </div>
                  </RichContent_LayoutMain_Visitor>
                )
    
    }

    

    const Advert_Visitor_Image = (props) => {

      let {advert, interaction} = props;      
      let advert_properties = advert?.bigdata?.history?.[0]?.info?.properties; // İlana atanmış özellikler 
      let _userStateData = useSnapshot(_userState);

      return (
        <div className={s.advert_visitor_image_wr}>            
              {<Advert_Visitor_Image_Standart advert={advert}/>            }
              {_userStateData.interaction && <Advert_Visitor_Image_Dynamic advert={advert}/> }
        </div>
      )
    }



    const Advert_Visitor_Image_Standart = (props) => {

      let {advert} = props;
          
      let img = advert?.img_tr ? `${process.env.NEXT_PUBLIC_IMGSOURCE}/${advert?.img_tr}` :"/images/common/sr.jpg";

      return(
          <div className={s.imagestandartwr} style={{ backgroundImage: `url(${img})`, backgroundSize:"cover" , backgroundPosition: 'center', backgroundRepeat:"no-repeat"}}>
                        {/* <Image src={`${process.env.NEXT_PUBLIC_IMGSOURCE}/${advert?.img_tr}`} fill alt={advert?.slug_tr}/>  */}
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
                              {phones?.map(p=>
                                  
                                        <div className={s.phoneitem} key={p.phone}>
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
      let advert_parents = advert?.bigdata?.history?.[0]?.info?.parents ?? []

      advert_properties = advert_properties?.filter(a=>advert_parents?.find(p=>p.key==a?.categorykey)); // sadece advert parentslara ait özellikleri listeleyelim. Çünkü bir ilanda diğer kategoriler ait özelliklerde kalmış olabilir...      
      //  console.log("advert_parentsadvert_parents: ", advert_properties, advert_parents);

      if (advert_properties?.length>0)  return (
                                                            <div className={s.infowr}>
                                                               {/* {JSON.stringify(advert_properties)} */}
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
      
      
      
          return {
            props: { categories, advert, locale  }, 
            revalidate: 3000,      
          };
        }
        
        
        
      
      export async function getStaticPaths() {
      
        // const builddata = await graphcms?.request(CompanyQuery_BuildList, {take:buildcompany_count, full:buildcompany_full});  
        // const result = await builddata?.companyquery_buildlist;    
        // let paths=await result?.bigdata?.paths ?? [];
      
        let paths=[{params:{slug:["aaaa", "497615"]}}];    
      
          return { paths, fallback: 'blocking' }
        }  



