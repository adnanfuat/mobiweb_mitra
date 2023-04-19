import s from "./re.module.css"
import Link from 'next/link';
import { BolgeIsmiOgren } from "@/components/utils/bolgeismiogren";
import { datetimeFunc } from "@/components/utils/datetimefunc";
import Head from "next/head";
import {AdsLayout} from "./adslayout"; 
import { RiEdit2Fill } from "react-icons/ri";
import Image from "next/image";
import { RiListUnordered, RiCloseFill } from "react-icons/ri";
import {LayoutLeft} from "./layoutleft";
import { cacheCountries } from "@/components/utils/cachecountries";
import { useRouter } from 'next/navigation'


export default async function Category ({params, searchParams}){
    
  // console.log("asdsaddsa::::", a);

  let {slug} = params ?? {} ;
  let  countries = await cacheCountries();

  slug = slug ? slug : []
  let sluglength=slug?.length;
  let lastslugitem=slug?.length==0 ? "ilanlar" :  slug?.[sluglength-1];
   let slugObj={slug, lastslugitem}

   let adverts     =   [];  
   let categories  =   [];  
   let category    =   {};  
   
   let rawdata= await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({
      query: AdvertsQuery_WithCategories_Raw,
      variables: {data:{slug, active:1, onlyauthdata:false}},
    }),
  })       
    let datajson=await rawdata.json()
    adverts = datajson?.data?.advertsquery_withcategories;           

  
  let rawdata_category= await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({
      query: RelatedCategoryQuery,
      variables: {data:{origin:(lastslugitem) }},
    }),
  })       
    let datajson_category=await rawdata_category.json()
    category = datajson_category?.data?.relatedcategoryquery;   

    
  // const router = useRouter();
  let {country, city, district, subdistrict} = searchParams ?? {}

  adverts=filterAdverts({adverts, country, city, district, subdistrict});

  let parents=category?.o_key_1?.parents;

  return (<AdsLayout  title={`${category?.title_tr}`}  countries={countries} >
                          <div className={s.mainwr}>
                            
                            {(country || city || district || subdistrict) && <div className={s.filtered}>                             
                                
                                    <Link href={"/ads"}><div  className={s.filteredinner}>
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

                              <div className={s.desktopmenu}><LayoutLeft props={{categories,  parents, category, countries, searchParams}}/></div>

                              <div className={s.bodywr}>
                                    {/* <div className={s.test}> Test ve geliştirme aşamasındadır. Siz de teste katılabilirsiniz. </div> */}
                                    <div className={s.itemswr}> {adverts?.map((item,index) =>{ return <Item props={{item,  countries}} key={index}/> }) } </div>                    
                              </div>

                              <Meta category={category} firstadvert={adverts[0]}/>

                          </div>
              </AdsLayout>  )

}



const Meta = (props) => {

        let {category, firstadvert} = props ?? {};

        let parents=category?.o_key_1?.parents;                       
        let parents_links=parents?.map((a)=> a?.slug_tr);    parents_links=parents_links?.filter(item=>item!="ilanlar")
        //parents=parents?.filter((a, i)=> i>1);
        parents=parents?.map((a)=> a?.title_tr);      
        parents=parents.join(" > ");

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
                                                                      "url":  "${`${process.env.NEXT_PUBLIC_API_URL}/ads/${parents_links?.join("/")} ${category?.slug_tr!="ilanlar" ? `/${category?.slug_tr}` : "" }`}",
                                                                    }
                                                                    }
                                                                `}}>
                                                                </script>
                                                                    
                                                              
                                                            <meta property="og:type" content="website" />
                                                            <meta name="og_site_name" property="og:site_name" content="sakaryarehberim.com"/>
                                                            <meta name="og_url" property="og:url" content={`${process.env.NEXT_PUBLIC_API_URL}/ads/${parents_links?.join("/")} ${category?.slug_tr!="ilanlar" ? `/${category?.slug_tr}` : "" }`}/>
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



const Item = ({props}) => {
  const {item,  countries} =props ?? {};
  let {parentObj, loggedUserMail} = item ?? {};
  // let {name} = mailName({mail:item?.user})  
  // let owner = user?.email==item?.user;

  let properties=item?.bigdata?.history?.[0]?.info?.properties;

  let fiyat=properties?.find(item=>item?.key=="fiyat");

  let advertiser=item?.bigdata?.history[0]?.info?.advertiser;
  let company = item?.bigdata?.instant_company;  
  
  let country_name = item?.country_slug; 
  let city_name = item?.city_slug; 
  let district_name = item?.district_slug; 
  let subdistrict_name = item?.subdistrict_slug;  

  // console.log("asdsasasdsadsaad:", item?.title_tr, item);

  function currencyFormat(num) {
                                  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')+ " TL"
                               }

  let {timeAgo, localeString} = datetimeFunc({datetime:item?.createdat});

  return ( 
          <div className={s.item}>            
              <div className={s.i_title}>{item?.title_tr}</div>
              <div className={s.parenttitle}>{parentObj?.title_tr}</div>      
              <div className={s.i_address}>

                                        {/* {BolgeIsmiOgren(country_name, "ulke", countries) ?? ""}     */}


                                        <span> {BolgeIsmiOgren(city_name, "il", countries) ?? ""} </span>

                                        <span> {BolgeIsmiOgren(district_name, "ilce", countries) ?? ""} </span>

                                        <span> {BolgeIsmiOgren(subdistrict_name, "mahalle", countries) ?? ""}  </span>               
                
              </div>      
      
              
              <div className={s.i_image}><CardImage props={{item, id: item?.id}}/></div>
              <div className={s.i_info}>
                            {fiyat && <div className={s.i_info_sub}>                                
                                <div>{currencyFormat(fiyat?.value)}</div>  
                            </div>}


                            <div className={s.i_info_sub}>                                
                                <div title={localeString}>{timeAgo}</div>  
                            </div>


              </div>

              <div className={s.i_user}>                
                    {!advertiser?.whoiscompany && <div style={{color:"#c1c1c1", display:"flex", alignItems:"center", gap:4}}>
                      <Image src={item?.userdata?.image} width={35} height={35} style={{borderRadius:6}}/> 
                    </div>}

                    {advertiser?.whoiscompany && <div style={{color:"#c1c1c1", display:"flex", alignItems:"center", gap:4}}>
                            <Image src={`${process.env.NEXT_PUBLIC_IMGSOURCE}/${company?.img_tr}`} width={35} height={24} alt={name} className={s.ownerimg}/>  
                            {company?.title_tr}
                    </div>}

                  {/* { owner && <Link href={`/console/advert/${item?.id}`}><RiEdit2Fill/></Link> } */}
              </div>                       
          </div> 
          )
}

  
const CardImage = ({props}) => {

  let {item, id} = props ?? {};

  let img=item?.img_tr
    
  return (    
      <Link href={`/ad/${item?.slug_tr}/${id}`}  prefetch={false}>   
        {img ?
          <div style={{width:150, height:100, backgroundImage:`url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${img})`, backgroundSize:"cover", backgroundPosition: "center"}}></div>
          :
          <div><img  width="150px" height="auto" src={`/images/common/sr.jpg`} title={"aaaa"} alt={"aaa"}  /></div>
          }
      </Link>    
  )
}


  

// export async function getStaticPaths() {
    
//   let paths=[{params:{ slug:["emlak"]}}];    

//     return { paths, fallback: 'blocking' }
//   }  

    


  
const RelatedCategoryQuery = 
`  query RelatedCategoryQuery ($data:JSON)  {
    relatedcategoryquery (data:$data) {
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
      createdat        
    }
  }`
;



const filterAdverts = ({adverts, country, city, district, subdistrict}) => {

  if (country) { adverts= adverts.filter(a=>a?.country_slug  ==  country) }

  if (city) { adverts= adverts.filter(a=>a?.city_slug  ==  city) }

  if (district) { adverts= adverts.filter(a=>a?.district_slug  ==  district) }

  if (subdistrict) { adverts= adverts.filter(a=>a?.subdistrict_slug  ==  subdistrict) }


  return adverts

}






const AdvertsQuery_WithCategories_Raw = 
`  query AdvertsQuery_WithCategories  ($data: JSON ) {
        advertsquery_withcategories (data:$data) {
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
            createdat
            country_slug
            city_slug
            district_slug
            subdistrict_slug    
            parentObj{
              title_tr
              slug_tr
            }
            getconnectedfiles {
              id
              bigdata
              rank
              slug_tr
              title_tr
              parent
              user
            }      
            
            userdata {
              image
            }
          }
  }`
;