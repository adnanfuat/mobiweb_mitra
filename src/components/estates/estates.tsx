import s from "./estates.module.css"

import {datetimeFunc} from "@/components/utils/datetimefunc"
import {cacheCountries} from "@/components/utils/cachecountries"
import Link from "next/link";
import Image from "next/image";
import { RiListUnordered, RiCloseFill,RiEdit2Fill } from "react-icons/ri";
import { useState } from "react";
import dictionaryFunc from "@/components/utils/dictionaryfunc";
import DictionaryData from "@/components/utils/dictionarydata";


const  Estates = async ({adverts, sidepadding, params}) =>{

  let {locale} = params ?? {};    
  let dictionary=await DictionaryData({locale});
  
  return (
                          <div className={s.mainwr} style={{paddingLeft: sidepadding, paddingRight: sidepadding }}>                                                                                        
                                <div className={s.bodywr}>
                                      <div className={s.itemswr}> {adverts?.map((item,index) =>{ return <Item props={{item, dictionary, params}} key={index}/> }) } </div>                    
                                </div>
                          </div>
               )

}
export default Estates




const Item = ({props}) => {
  const {item, dictionary, params} =props ?? {};
  
  let {locale} = params ?? {};    

  let {parentObj, loggedUserMail} = item ?? {};
    
  let properties=item?.bigdata?.history?.[0]?.info?.properties;

  let fiyat=properties?.find(item=>item?.key=="fiyat");

  let advertiser=item?.bigdata?.history[0]?.info?.advertiser;
  let company = item?.bigdata?.instant_company;

    //  console.log("asdsasad: ",item );

    function currencyFormat(num) {
      return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')+ " TL"
   }

  let {timeAgo, localeString} = datetimeFunc({datetime:item?.createdat});

  let fiyat_text = dictionaryFunc({key:"1683442733652", dictionary}).text;
  let tarih_text = dictionaryFunc({key:"1683442804941", dictionary}).text;

  return ( 
          <div className={s.item}>            
              <div className={s.i_title}>{item?.title_tr}</div>
              <div className={s.parenttitle}>{parentObj?.title_tr}</div>               
              
              <div className={s.i_image}><CardImage props={{item, id: item?.id, params}}/></div>
              <div className={s.i_info}>
                            {fiyat && <div className={s.i_info_sub}>
                                <div>{fiyat_text}</div>  
                                <div>{currencyFormat(fiyat?.value)}</div>  
                            </div>}

                            <div className={s.i_info_sub}>
                                <div>{tarih_text}</div>  
                                <div title={localeString}>{timeAgo}</div>  
                            </div>

              </div>


          </div> 
          )
}

  
const CardImage = ({props}) => {

  let {item, id, params} = props ?? {};

  let img=item?.img_tr;

  let {locale} = params ?? {};    

    
  return (    
      <Link href={`/${locale}/ad/${item?.slug_tr}/${id}`} >
        {img ?
          <div style={{width:150, height:100, backgroundImage:`url(${process.env.NEXT_PUBLIC_IMGSOURCE}/${img})`, backgroundSize:"cover", backgroundPosition: "center"}}></div>
          :
          <div><img  width="150px" height="auto" src={`/images/common/sr.jpg`} title={"aaaa"} alt={"aaa"}  /></div>
          }
      </Link>    
  )
}


  
export async function getStaticProps(params) {
   
  let {slug} = params ?? {} ;
  let  countries = await cacheCountries();

  // console.log("asdsaddsas::: ", params );

  slug = slug ? slug : []
  let sluglength=slug?.length;
  let lastslugitem=slug?.length==0 ? "ilanlar" :  slug?.[sluglength-1];
   let slugObj={slug, lastslugitem}

   let adverts     =    [];  
   let categories  =    [];  
   let category    =    {};  
   
  try {    
    

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

     // console.log("adverts000-->:", adverts[0], adverts?.length)

    
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

      

  } catch (error) {
    
    console.error("advertsquery_withcategories ____  _____ ____ ", error)
  }



    return {
      props: {category, categories , adverts , slugObj, countries }, 
      revalidate: 500,      
    };
  }
  
  
  

export async function getStaticPaths() {
    
  let paths=[{params:{ slug:["emlak"]}}];    

    return { paths, fallback: 'blocking' }
  }  

    


  
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
      title_sa
      slug_sa
      slug_tr
      slug_en
      slug_fr
      slug_ar
      img_tr
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
