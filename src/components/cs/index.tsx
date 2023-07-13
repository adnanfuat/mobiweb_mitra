import s from "./index.module.css"
import Link from 'next/link';
import { BolgeIsmiOgren } from "@/components/utils/bolgeismiogren";
import { datetimeFunc } from "@/components/utils/datetimefunc";
import Head from "next/head";
import { localeStatic } from "@/constants/localestatic";
import relatedCategory_Bigdata from "@/components/utils/relatedcategory_bigdata";
// import { DesignLayout_Vitalis_BackPages } from "@/themes/vitalis/layouts/designlayout_vitalis_backpages";
import { DesignLayout_Vitalis_BackPages } from "@/src/components/themes/vitalis/layouts/designlayout_vitalis_backpages";
import { DesignLayout_Vitalis } from "@/src/components/themes/vitalis/layouts/designlayout_vitalis";
import { DesignLayout_Mitra_BackPages } from "@/themes/mitra/layouts/designlayout_mitra_backpages";
import { DesignLayout_Arges } from "@/themes/arges/layouts/designlayout_arges";
import { LayoutLeft } from "./layoutleft";
import ImageGallery from 'react-image-gallery';
import "/node_modules/react-image-gallery/styles/css/image-gallery.css";


export default function CS_Shell (props){ 
  
  let {params, dictionary, webdata, fileobjects, countries, bigbigparent_slug, listing_type, item_type, card_type, aspectratio_image, itemswr_specialstyle, item_elementswr_specialstyle  } = props ?? {}
  let {locale, slug} = params ?? {};

  locale = locale ? locale : localeStatic;
  
  let  fileObjects = webdata?.bigdata?.fileObjects;
  
  let lastslugitem = slug?.[slug?.length-1];
  
  let contents = webdata?.o_key_2?.contents ?? []; // Bize tüm kategoriler geldi..  
  

  let categories = webdata?.o_key_1?.categories ?? []; // Bize tüm kategoriler geldi..
  
  let relatedcategory = categories?.find(cat=>cat?.slug_tr==lastslugitem); // Şimdi o tüm kategoriler içinden son slug itemına göre kategorileri getir bize...

  let parentkeys_forsubcontents = relatedcategory?.o_key_1?.parentkeys_forsubcontents ?? []; // Şimdi biz bir kategorideyiz ama bize bu bu kategoriye bağlı olup, aynı zamanda altlarındaki kategorilere de bağlı olan içerikler lazım... Bunu ben backendde hesaplamıştım zaten. O keyleri alıyorum

  // console.log("itemitemitem: ", slug, contents);

  // return (<div>{JSON.stringify(contents)}</div>)

  contents=contents?.filter(co=> { // içeriklerimizi tarayacağız ve içeriklerimizin parentlarından herhangi biri yukarıdaki key lerin arasında varsa listeleyeceğiz...

          let co_parents=co?.parents?.map(c=>c?.key); // önce parentların gereksiz teferruatlarını atalım...

          if (co_parents?.find(a=>parentkeys_forsubcontents?.includes(a))) // Şimdi bu içeriğin parentları arasında, içinde bulunduğumuz sayfa/kategoriye bağlı keylerden herhangi biri var mı bakalım..
          {
            return co // İşte bu durumda dönelim...
          }        
  })
    


  //////////////////////////////////// --

        let info = webdata?.bigdata?.history[0];
        let lang = info?.lang;

        let logofiles =  lang?.tr?.logofiles;          
            
        let logo = fileobjects?.find(f=>f?.slug_tr  == logofiles[0])  ?? null

  /////////////////////////////////// --

      // return (<div>{JSON.stringify(contents)}</div>)
   return (<Rs_Shell contents={contents} root_category={"emlak"} countries={countries} logo={logo} bigbigparent_slug={bigbigparent_slug} categories={categories} root_slug={`cs`} dictionary={dictionary} webdata={webdata} fileObjects={fileObjects}  sidepadding={42}  {...props}/>) 
  
  }


function Rs_Shell (props){
    
  let {contents, params, countries, searchParams, root_category, root_slug,  bigbigparent_slug, logo, categories, webdata, dictionary, fileObjects} = props ?? {};  

  let {slug} = params ?? {} ;

  let theme_name = webdata?.bigdata?.theme?.name;
  

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

  let category= relatedCategory_Bigdata({lastslugitem, categories})  ?? {}
  let {country, city, district, subdistrict} = searchParams ?? {}
  adverts=filterAdverts({adverts, country, city, district, subdistrict});
  
  

  // return (<div>{JSON.stringify(contents)}</div>)




  if (theme_name=="mitra") {
    return (<DesignLayout_Mitra_BackPages title={`${category?.title_tr ?? "Başlık!!"}`} countries={countries} dictionary={dictionary} params={params} webdata={webdata} logo={logo}> <RichContents {...props}/> </DesignLayout_Mitra_BackPages> )                      
  }
  else if (theme_name=="arges") {
    return (<DesignLayout_Arges title={`${category?.title_tr}`} dictionary={dictionary} params={params} webdata={webdata}  logo={logo}> <RichContents {...props}/> </DesignLayout_Arges> )                      
  }
  else if (theme_name=="vitalis") {
    return (<DesignLayout_Vitalis_BackPages title={`${category?.title_tr}`} dictionary={dictionary} params={params} webdata={webdata}  logo={logo}> <RichContents {...props}/> </DesignLayout_Vitalis_BackPages> )                      
  }     
  // else 
  // {
  //   return (<DesignLayout_Mitra_BackPages title={`${category?.title_tr}`} dictionary={dictionary} params={params} webdata={webdata}  logo={logo}> <RichContents {...props}/> </DesignLayout_Mitra_BackPages> )                      
  // }     
  

}





const RichContents =  (props) => {
  
  let {contents, params, countries, searchParams, root_category, root_slug,  bigbigparent_slug, categories, webdata, dictionary, fileObjects, itemswr_specialstyle, listing_type, layout_type} = props ?? {};  

  let {slug} = params ?? {} ;
  // let  countries = await cacheCountries();
  
  slug = slug ? slug : []
  let sluglength=slug?.length;
  let lastslugitem=slug?.length==0 ? root_category :  slug?.[sluglength-1];

  let category= relatedCategory_Bigdata({lastslugitem, categories})  ?? {}
  let {country, city, district, subdistrict} = searchParams ?? {}

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


  adverts=filterAdverts({adverts, country, city, district, subdistrict});
  let parents=category?.o_key_1?.parents;

  let listingComp=<div> Listing </div>

  if (listing_type=="grid") { listingComp = <Listing_Grid {...props}/>                                     }
  else if (listing_type=="cake") { listingComp = <Listing_Cake {...props}/>}                                            
                         else  listingComp = <div className={s.item}> Listing Type gelmedi.. {`${listing_type}`} </div>

  let meta = <Meta category={category} firstadvert={contents[0]} root_slug={root_slug} params={params}/>    
  
  props = {...props, meta, listingComp, parents, category }
  //  return  <div className={s.xxx}> {`${JSON.stringify(layout_type)}`} </div>
  if (layout_type=="basic") {return  <Layout_Basic {...props}/>}
  else if (layout_type=="twocolumn") {  return  <Layout_TwoColumn {...props}/>}
  else return ( <div className={s.xxx}> Layout Type gelmedi... {`${layout_type}`} </div>)

}





const Layout_Basic = (props) => {
  
  let {listingComp, countries, searchParams, root_slug, bigbigparent_slug, categories, parents, category, meta } = props ?? {};  

  let {country, city, district, subdistrict} = searchParams ?? {}

  return (
          <div className={s.mainwr}>                                                                                                                                            
                          <div className={s.bodywr}> {listingComp} </div>
                          {meta}
        </div>
  )
}



const Layout_TwoColumn = (props) => {
  
  let {listingComp, countries, searchParams, root_slug, bigbigparent_slug, categories, parents, category, meta } = props ?? {};  

  let {country, city, district, subdistrict} = searchParams ?? {}

  return (
          <div className={s.mainwr}>  
                                                                                                                
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

                        {/* item, countries, params, fileObjects, */}
                        
                          {/* <div className={s.mobilmenu}>
                                  <div className={s.mobilmenu_close}  onClick={()=>setmobilmenu(old=>!old)}>{mobilmenu ? <RiCloseFill size={30} /> :  <RiListUnordered size={30} />  }</div>                
                                  { mobilmenu ? <Ad_LayoutLeft_Visitor_V2 props={{categories, parents, category, countries}} /> : "" }
                          </div> */}

                          <div className={s.desktopmenu}><LayoutLeft props={{ parents, category, categories, root_slug, bigbigparent_slug, countries, searchParams}}/></div>

                          <div className={s.bodywr}>
                                  {listingComp}                                                
                          </div>

                          {meta}

        </div>
  )
}




let Listing_Cake = (props) => 

{
    let {contents, itemswr_specialstyle} = props;
    
    return  <div className={s.itemswr_cake} style={itemswr_specialstyle}> { contents?.map((item,index) =>{ return <Item props={{item, ...props}} key={index}/> })   }   </div>     

  }




let Listing_Grid = (props) => 

{
    let {contents, itemswr_specialstyle} = props;
    
    return  <div className={s.itemswr_grid} style={itemswr_specialstyle}>{ contents?.map((item,index) =>{ return <Item props={{item, ...props}} key={index}/> })   }   </div>     

  }




const Item = ({props}) => {
  const {item,  countries,  fileObjects, item_type} =props ?? {};  
  // let {name} = mailName({mail:item?.user})  
  // let owner = user?.email==item?.user;
  
  let properties=item?.bigdata?.history?.[0]?.info?.properties;
  let fiyat=properties?.find(item=>item?.key=="fiyat");

  let advertiser=item?.bigdata?.history[0]?.info?.advertiser;
  let company = item?.bigdata?.instant_company;  
  // console.log("asdsasasds${root_slug}aad:", item?.title_tr, item);

  let {timeAgo, localeString} = datetimeFunc({datetime:item?.createdat});
  // let props = {item, countries, fileObjects}

  let link = `/c/${item?.slug_tr}/${item?.id}`;

  props={ link, ...props}

  // return <div>{JSON.stringify(item)}</div>

  if (item_type=="basic")      return  <Item_Basic   {...props}/>                                     
  if (item_type=="cluster")    return  <Item_Cluster {...props}/>       
  if (item_type=="carousel")    return <Item_Carousel {...props}/>       
  if (item_type=="detail")     return  <Item_Detail  {...props}/>  
  if (item_type=="tower")      return  <Item_Tower   {...props}/>                                      
                         else return ( <div className={s.item}> Item Type gelmedi.. </div>)
          
  
}






const Item_Basic = (props) => {

  let {item,  countries, fileObjects } = props ?? {};

  let country_name = item?.country_slug; 
  let city_name = item?.city_slug; 
  let district_name = item?.district_slug; 
  let subdistrict_name = item?.subdistrict_slug; 
  
  let {parentObj, loggedUserMail} = item ?? {};

  


  return ( 
    <div className={s.item_basic}>     
        {/* {JSON.stringify(item?.slug_tr)}        */}
        {parentObj?.title_tr && <div className={s.parenttitle}>{parentObj?.title_tr}</div>      }
              
        <div className={s.basicitem_imagewr}><Card props={{item, id: item?.id,  fileObjects, ...props}}/></div>
        <div className={s.i_title}>{item?.title_tr}</div>
                              
    </div> 
    )
}



const Item_Carousel = (props) => {

  let {item,  countries, fileObjects,  item_elementswr_specialstyle } = props ?? {};

  let images: any[]=[] 
  
  item?.files_tr?.map((file, index)=> {

    let fileObject=fileObjects?.find(f=>f?.slug_tr==file);

    let img =!!fileObject ? fileObject?.bigdata?.folder + "/" + fileObject?.bigdata?.filename : undefined
   
     img = img ? `${process.env.NEXT_PUBLIC_IMGSOURCE}/${img}` : "/images/placeholder-image.png"

     images=[...images, {original:img, thumbnail:img}]

  } )


    

  return ( 
    <div className={s.item_basic}>              
        {/* {JSON.stringify(props)}              */}
        <div className={s.i_title}>{item?.title_tr}</div>                              
        <div className={s.carouselitem_imagewr} style={item_elementswr_specialstyle}> 
          {/* {JSON.stringify(fileObjects?.map(a=>a?.slug_tr))} */}
            {images?.length>0 && <ImageGallery items={images} />}
              
        </div>
    </div> 
    )
}




const Item_Cluster = (props) => {

  let {item,  countries, fileObjects,  item_elementswr_specialstyle } = props ?? {};
    

  return ( 
    <div className={s.item_basic}>              
        {/* {JSON.stringify(props)}              */}
        <div className={s.i_title}>{item?.title_tr}</div>                              
        <div className={s.clusteritem_imagewr} style={item_elementswr_specialstyle}> 

            {
              item?.files_tr?.map((file, index)=> <Card_ClusterElement file={file} {...props} key={index} /> )
            }
              

        </div>
    </div> 
    )
}



const Item_Tower = (props) => {

  let {item,  countries, fileObjects, link, index } = props ?? {};    
  let {parentObj, loggedUserMail} = item ?? {};

  return ( 
    <div className={s.item_tower} > 

            <div className={s.toweritem_imagewr}><Card props={{item, id: item?.id,  fileObjects, ...props}}/></div>    
            
            <div className={s.toweritem_data}>
                
                    <div className={s.toweritem_title}><h2>{item?.title_tr}</h2></div>
                    <div className={s.toweritem_content}>{item?.maintext_tr}</div>        
                    <div className={s.toweritem_button}> <Link href={link}>Devamı... </Link> </div>        

            </div>                              



    </div> 
    )
}



const Item_Detail = (props) => {

  let {item,  countries, fileObjects } = props ?? {};

  let country_name = item?.country_slug; 
  let city_name = item?.city_slug; 
  let district_name = item?.district_slug; 
  let subdistrict_name = item?.subdistrict_slug; 
  
  let {parentObj, loggedUserMail} = item ?? {};

  
  function currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')+ " TL"
 }

  return ( 
    <div className={s.item}>  sadsads   
        {/* {JSON.stringify(item?.slug_tr)}        */}
        <div className={s.i_title}>{item?.title_tr}</div>
        {parentObj?.title_tr && <div className={s.parenttitle}>{parentObj?.title_tr}</div>      }
        {city_name && <div className={s.i_address}>

                                  
                                  <span> {BolgeIsmiOgren(city_name, "il", countries) ?? ""} </span>

                                  <span> {BolgeIsmiOgren(district_name, "ilce", countries) ?? ""} </span>

                                  <span> {BolgeIsmiOgren(subdistrict_name, "mahalle", countries) ?? ""}  </span>               
          
        </div>}      

        
        <div className={s.i_image}><Card props={{item, id: item?.id,  fileObjects, ...props}}/></div>
        <div className={s.i_info}>
                      {/* {fiyat && <div className={s.i_info_sub}>                                
                          <div>{currencyFormat(fiyat?.value)}</div>  
                      </div>} */}


                      {/* <div className={s.i_info_sub}>                                
                          <div title={localeString}>{timeAgo}</div>  
                      </div> */}


        </div>

                              
    </div> 
    )
}


  
const Card = ({props}) => {

  let {item, id, fileObjects, card_type} = props ?? {};
  
  let fileObject=fileObjects?.find(f=>f?.slug_tr==item?.files_tr?.[0]);

  let img =!!fileObject ? fileObject?.bigdata?.folder + "/" + fileObject?.bigdata?.filename : undefined

  img = img ? `${process.env.NEXT_PUBLIC_IMGSOURCE}/${img}` : "/images/placeholder-image.png"

  let link = `/c/${item?.slug_tr}/${id}`;

  props={img, link, ...props}

  // return <div>{JSON.stringify(fileObjects)}</div>
  
  if (card_type=="bigfoot")            return <Card_BigFoot {...props}/>                                     
  // if (card_type=="clusterelement")     return <Card_ClusterElement {...props}/>
  if (card_type=="detail")             return <Card_Detail {...props}/>                                     
                         else          return ( <div className={s.item}> Card Tipi gelmedi </div>)
    
  
}
{/* <ResponsiveGallery images={images}/> */}


const Card_ClusterElement = (props) => {

  let {file,fileObjects,index,  aspectratio_image} = props ?? {};

  let fileObject=fileObjects?.find(f=>f?.slug_tr==file);

 let img =!!fileObject ? fileObject?.bigdata?.folder + "/" + fileObject?.bigdata?.filename : undefined

  img = img ? `${process.env.NEXT_PUBLIC_IMGSOURCE}/${img}` : "/images/placeholder-image.png"

  // let link = `/c/${item?.slug_tr}/${id}`;



  return (                          
              img ?                
                <div style={{ backgroundImage:`url(${img})`, backgroundSize:"cover", backgroundPosition: "center", aspectRatio:aspectratio_image}}></div>
                :
                <div><img  width="150px" height="auto" src={`/whitelogo.jpg`} title={"Resim bulunmadı"} alt={"Resim bulunmadı"}  /></div>
          )
}



const Card_BigFoot = (props) => {

  let {link, img, aspectratio_image} = props ?? {};

  return (
          <Link href={link}  >
                
              {img ?
                
                <div style={{ backgroundImage:`url(${img})`, backgroundSize:"cover", backgroundPosition: "center", aspectRatio:aspectratio_image}} ></div>
                :
                <div><img  width="150px" height="auto" src={`/whitelogo.jpg`} title={"Resim bulunmadı"} alt={"Resim bulunmadı"}  /></div>

                }
            </Link>  
  )
}

  
const Card_Detail = (props) => {

  let {link, img} = props ?? {};

  return (
          <Link href={link}  >
                
              {img ?
                
                <div style={{width:150, height:100, backgroundImage:`url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${img})`, backgroundSize:"cover", backgroundPosition: "center"}}></div>
                :
                <div><img  width="150px" height="auto" src={`/whitelogo.jpg`} title={"Resim bulunmadı"} alt={"Resim bulunmadı"}  /></div>

                }
            </Link>  
  )
}

    




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






             
    
    
    
    
    
    
    
    
    
    
    

             const images = [
              {
                original: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
              },
              {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
              },
              {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
              },
            ];