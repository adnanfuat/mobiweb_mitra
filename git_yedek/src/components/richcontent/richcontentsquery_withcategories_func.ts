import {AdvertsQuery_WithCategories_Raw} from '@/__queries/global/advert/advertsquery_withcategories_raw';

export const advertsQuery_WithCategories_Func = async ({slug, bigbigparent_key}) => {

    let adverts=[];

    let rawdata= await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
          query: AdvertsQuery_WithCategories_Raw,
          variables: {data:{slug, active:1, onlyauthdata:false, bigbigparent_key}},
        }),
      })       
        let datajson=await rawdata.json()
        adverts = datajson?.data?.advertsquery_withcategories;      
  
       // console.log("adverts000-->:", adverts[0], adverts?.length)


  return (adverts)
}
