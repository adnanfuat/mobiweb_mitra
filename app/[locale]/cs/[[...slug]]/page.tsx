import s from "./re.module.css"
import Link from 'next/link';
import { BolgeIsmiOgren } from "@/components/utils/bolgeismiogren";
import { datetimeFunc } from "@/components/utils/datetimefunc";
import Head from "next/head";
import Image from "next/image";
import {LayoutLeft} from "./layoutleft";
import { cacheCountries } from "@/components/utils/cachecountries";
import relatedCategory from "@/components/utils/relatedcategory";
import { DesignLayout } from "@/layouts/designlayout";
import WebData from "@/components/utils/webdata";
import DictionaryData from "@/components/utils/dictionarydata";
import { localeStatic } from "@/constants/localestatic";
import relatedCategory_Bigdata from "@/components/utils/relatedcategory_bigdata";

let bigbigparent_slug="urunler"; // Soldaki menüde hangi kategoriden itibaren aşağısnı göstereceğiz  ?

export default async function Category (props){ 
  
  let {params} = props ?? {}
  let {locale, slug} = params ?? {}

  locale = locale ? locale : localeStatic;

  let dictionary=await DictionaryData({locale}) ;
  let webdata=await WebData()                   ;

  let  fileObjects = webdata?.bigdata?.fileObjects;
  // console.log("itemitemitem: ", fileObjects);

  let lastslugitem = slug?.[slug?.length-1]

  let contents = webdata?.o_key_2?.contents ?? []; // Bize tüm kategoriler geldi..  

  let categories = webdata?.o_key_1?.categories ?? []; // Bize tüm kategoriler geldi..
  
  let relatedcategory = categories?.find(cat=>cat?.slug_tr==lastslugitem); // Şimdi o tüm kategoriler içinden son slug itemına göre kategorileri getir bize...

  let parentkeys_forsubcontents = relatedcategory?.o_key_1?.parentkeys_forsubcontents ?? []; // Şimdi biz bir kategorideyiz ama bize bu bu kategoriye bağlı olup, aynı zamanda altlarındaki kategorilere de bağlı olan içerikler lazım... Bunu ben backendde hesaplamıştım zaten. O keyleri alıyorum

  contents=contents?.filter(co=> { // içeriklerimizi tarayacağız ve içeriklerimizin parentlarından herhangi biri yukarıdaki key lerin arasında varsa listeleyeceğiz...

          let co_parents=co?.parents?.map(c=>c?.key); // önce parentların gereksiz teferruatlarını atalım...

          if (co_parents?.find(a=>parentkeys_forsubcontents?.includes(a))) // Şimdi bu içeriğin parentları arasında, içinde bulunduğumuz sayfa/kategoriye bağlı keylerden herhangi biri var mı bakalım..
          {
            return co // İşte bu durumda dönelim...
          }        
  })
    
   return (  <Rs_Shell contents={contents} root_category={"emlak"} bigbigparent_slug={bigbigparent_slug} categories={categories} root_slug={`cs`} dictionary={dictionary} webdata={webdata} fileObjects={fileObjects}  sidepadding={42}  {...props}/>  ) 
  
  }


export async function Rs_Shell (props){
    
  let {contents, params, searchParams, root_category, root_slug,  bigbigparent_slug, categories, webdata, dictionary, fileObjects} = props ?? {};  

  let {slug} = params ?? {} ;
  let  countries = await cacheCountries();

  slug = slug ? slug : []
  let sluglength=slug?.length;
  let lastslugitem=slug?.length==0 ? root_category :  slug?.[sluglength-1];

  let adverts =  webdata?.o_key_2?.contents//.filter(a=>a?.bigbigparent_key==bigbigparent_key);

  if (slug?.length>0) { 
    // Sol taraftaki menüden alt kategorilerden biri seçildiğinde, diyelim //--> İş yeri > Satılık İş yeri... İlgili ilanların içinde parentlarında Satılık İş Yeri var mı diye bakıp, onları filitreler. 
    // Böylece sadece gidilen linkteki son slugı içeren ilanları verir bize...
            adverts = adverts?.filter(ad=> {
                                              let parents= ad?.bigdata?.history[0]?.info?.parents ?? [];
                                              parents=parents?.map(item=>item?.slug_tr)
                                              let lastslugitem = slug?.[sluglength-1];                          
                                              return parents?.find(pa=>pa==lastslugitem);
                                          })            
  }

  let category=await relatedCategory_Bigdata({lastslugitem, categories})  ?? {}
  let {country, city, district, subdistrict} = searchParams ?? {}
  adverts=filterAdverts({adverts, country, city, district, subdistrict});
  let parents=category?.o_key_1?.parents;


  
  return (<DesignLayout title={`${category?.title_tr}`} dictionary={dictionary} params={params} webdata={webdata}><div className={s.mainwr}>  
                            
                            {/* {JSON.stringify(contents)} */}
                                                  
                          {(country || city || district || subdistrict) && <div className={s.filtered}>                             
                              
                                  <Link href={`/${root_slug}`}><div  className={s.filteredinner}>
                                        <div className={s.filteredtitle} >Filtre</div>                              
                                            {country && <div> {country} </div>}
                                            {city && <div> {city} </div>}
                                            {district && <div> {district} </div>}
                                            {subdistrict && <div> {subdistrict} </div>}
                                        </div>
                                  </Link>

                            </div>
                          }
                          
                            <div className={s.mobilmenu}>
                                    {/* <div className={s.mobilmenu_close}  onClick={()=>setmobilmenu(old=>!old)}>{mobilmenu ? <RiCloseFill size={30} /> :  <RiListUnordered size={30} />  }</div>                 */}
                                    {/* { mobilmenu ? <Ad_LayoutLeft_Visitor_V2 props={{categories, parents, category, countries}} /> : "" } */}
                            </div>

                            <div className={s.desktopmenu}><LayoutLeft props={{ parents, category,categories, root_slug, bigbigparent_slug, countries, searchParams}}/></div>

                            <div className={s.bodywr}>                                    
                                  <div className={s.itemswr}> {contents?.map((item,index) =>{ return <Item props={{item, countries, params, fileObjects}} key={index}/> }) } </div>                    
                            </div>

                            <Meta category={category} firstadvert={contents[0]} root_slug={root_slug} params={params}/>

                        </div></DesignLayout>)

}



const Item = ({props}) => {
  const {item,  countries, params, fileObjects} =props ?? {};
  let {parentObj, loggedUserMail} = item ?? {};
  // let {name} = mailName({mail:item?.user})  
  // let owner = user?.email==item?.user;
  const {locale} =params ?? {};

  let properties=item?.bigdata?.history?.[0]?.info?.properties;

  let fiyat=properties?.find(item=>item?.key=="fiyat");

  let advertiser=item?.bigdata?.history[0]?.info?.advertiser;
  let company = item?.bigdata?.instant_company;  
  
  let country_name = item?.country_slug; 
  let city_name = item?.city_slug; 
  let district_name = item?.district_slug; 
  let subdistrict_name = item?.subdistrict_slug;  

  // console.log("asdsasasds${root_slug}aad:", item?.title_tr, item);

  function currencyFormat(num) {
                                  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')+ " TL"
                               }

  let {timeAgo, localeString} = datetimeFunc({datetime:item?.createdat});

  return ( 
          <div className={s.item}>     
              {/* {JSON.stringify(item?.slug_tr)}        */}
              <div className={s.i_title}>{item?.title_tr}</div>
              <div className={s.parenttitle}>{parentObj?.title_tr}</div>      
              <div className={s.i_address}>

                                        
                                        <span> {BolgeIsmiOgren(city_name, "il", countries) ?? ""} </span>

                                        <span> {BolgeIsmiOgren(district_name, "ilce", countries) ?? ""} </span>

                                        <span> {BolgeIsmiOgren(subdistrict_name, "mahalle", countries) ?? ""}  </span>               
                
              </div>      
      
              
              <div className={s.i_image}><CardImage props={{item, id: item?.id, params, fileObjects}}/></div>
              <div className={s.i_info}>
                            {fiyat && <div className={s.i_info_sub}>                                
                                <div>{currencyFormat(fiyat?.value)}</div>  
                            </div>}


                            <div className={s.i_info_sub}>                                
                                <div title={localeString}>{timeAgo}</div>  
                            </div>


              </div>

                                    
          </div> 
          )
}

  
const CardImage = ({props}) => {

  let {item, id, params, fileObjects} = props ?? {};
  
  let fileObject=fileObjects?.find(f=>f?.slug_tr==item?.files_tr?.[0]);

  let img =!!fileObject ? fileObject?.bigdata?.folder + "/" + fileObject?.bigdata?.filename : undefined

  
    
  return (    
      <Link href={`/${params?.locale}/c/${item?.slug_tr}/${id}`}  >
          {/* {JSON.stringify(item)}  */}
        {img ?
          <div style={{width:150, height:100, backgroundImage:`url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${img})`, backgroundSize:"cover", backgroundPosition: "center"}}></div>
          :
          <div><img  width="150px" height="auto" src={`/whitelogo.jpg`} title={"Resim bulunmadı"} alt={"Resim bulunmadı"}  /></div>
          }
      </Link>    
  )
}


  

// export async function getStaticPaths() {
    
//   let paths=[{params:{ slug:["emlak"]}}];    

//     return { paths, fallback: 'blocking' }
//   }  

    




const filterAdverts = ({adverts, country, city, district, subdistrict}) => {

  if (country) { adverts= adverts.filter(a=>a?.country_slug  ==  country) }

  if (city) { adverts= adverts.filter(a=>a?.city_slug  ==  city) }

  if (district) { adverts= adverts.filter(a=>a?.district_slug  ==  district) }

  if (subdistrict) { adverts= adverts.filter(a=>a?.subdistrict_slug  ==  subdistrict) }


  return adverts

}





const Meta = (props) => {

  let {category, firstadvert, root_slug, params} = props ?? {};

  let parents=category?.o_key_1?.parents;                       
  let parents_links=parents?.map((a)=> a?.slug_tr);    parents_links=parents_links?.filter(item=>item!="ilanlar")
  //parents=parents?.filter((a, i)=> i>1);
  parents=parents?.map((a)=> a?.title_tr);      
  parents=parents?.join(" > ");

  let description=category?.bigdata?.history?.[0]?.lang?.tr?.decription;
  let title=category?.title_tr;
  
  description=description?.replace(/["']+/g, ' ');   // Tırnaklar sıkıntı oluşturuyorum. Çözümü kaldrımakta buldum
  title=title?.replace(/["']+/g, ' ');    

  let img =  process.env.NEXT_PUBLIC_IMGSOURCE+"/" + firstadvert?.img_tr;

                      return ( 
                                // <div>  
                                              <Head> 
                                                  <title> {title} </title>    

                                                      <meta name="description" content={description ? description : title } />

                                                          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
                                                              { 
                                                              "@context": "https://schema.org", 
                                                              "@type": "Advert",
                                                              "headline": "${parents} ${title}",
                                                              "alternativeHeadline": "${parents} ${title}",
                                                              "image": "${img}",
                                                              "award": "xxxxx",
                                                              "editor": "John Doe", 
                                                              "genre":  "${title}", 
                                                              "keywords":  "${title}", 
                                                              "wordcount":  "${title?.length}",
                                                              "publisher": {
                                                                "@type": "Organization",
                                                                "name": "PROWEB"
                                                              },
                                                              "url":  "${`${process.env.NEXT_PUBLIC_API_URL}/ad/${category?.slug_tr}/${description}`}",
                                                              "datePublished": "${category?.createdat}",
                                                              "dateCreated":  "${category?.createdat}",
                                                              "dateModified":  "${category?.createdat}",
                                                              "description": "${description ?? title}",
                                                              "articleBody": "${description ?? title}",
                                                                "author": {
                                                                "@type": "Person",
                                                                "name": "Steve",
                                                                "url":  "${`${process.env.NEXT_PUBLIC_API_URL}/${root_slug}/${parents_links?.join("/")} ${category?.slug_tr!="ilanlar" ? `/${category?.slug_tr}` : "" }`}",
                                                              }
                                                              }
                                                          `}}>
                                                          </script>
                                                              
                                                        
                                                      <meta property="og:type" content="website" />
                                                      <meta name="og_site_name" property="og:site_name" content="sakaryarehberim.com"/>
                                                      <meta name="og_url" property="og:url" content={`${process.env.NEXT_PUBLIC_API_URL}/${root_slug}/${parents_links?.join("/")} ${category?.slug_tr!="ilanlar" ? `/${category?.slug_tr}` : "" }`}/>
                                                      <meta name="og_title" property="og:title" content={`${parents} ${title}`}/>
                                                      <meta name="og_description" property="og:description" content={description ?  description: title}/>
                                                      <meta name="og_image" property="og:image" content={img}/>
                                                      {/* <meta name="og_image2" property="og:image" content={resimler[0]}/> */}
                                                      {/* Niye 2 tane koyulmuş önceden anlayamadım... */}
                                                      <meta name="twitter:title" content={`${parents} ${title}`}/>
                                                      <meta name="twitter:description" content={description}/>
                                                      <meta name="twitter:image" content={img}/>
                                                      <meta name="twitter:card" content="summary_large_image"/>
                                                      <meta property="og:image:width" content="900"/>
                                                      <meta property="og:image:height" content="475"/>
                                  </Head>

                              // </div>
                             )
             }


