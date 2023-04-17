import s from "./estates.module.css"

import {datetimeFunc} from "../../src/components/utils/datetimefunc"
import {cacheCountries} from "../../src/components/utils/cachecountries"
import Link from "next/link";
import Image from "next/image";
import { RiListUnordered, RiCloseFill,RiEdit2Fill } from "react-icons/ri";
import { useState } from "react";


const  Estates = ({adverts}) =>{

  
  

  

  return (
                          <div className={s.mainwr}>
                                                                                        
                              <div className={s.bodywr}>                                    
                                    <div className={s.itemswr}> {adverts?.map((item,index) =>{ return <Item props={{item}} key={index}/> }) } </div>                    
                              </div>
                              
                          </div>
               )

}
export default Estates




const Item = ({props}) => {
  const {item} =props ?? {};
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

  return ( 
          <div className={s.item}>            
              <div className={s.i_title}>{item?.title_tr}</div>
              <div className={s.parenttitle}>{parentObj?.title_tr}</div>               
              
              <div className={s.i_image}><CardImage props={{item, id: item?.id}}/></div>
              <div className={s.i_info}>
                            {fiyat && <div className={s.i_info_sub}>
                                <div>Fiyat</div>  
                                <div>{currencyFormat(fiyat?.value)}</div>  
                            </div>}

                            <div className={s.i_info_sub}>
                                <div>Tarih</div>  
                                <div title={localeString}>{timeAgo}</div>  
                            </div>

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
