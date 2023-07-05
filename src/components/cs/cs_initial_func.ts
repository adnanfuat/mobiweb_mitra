// Content sayfaları hep aynı mantıkta çalışıyor...
// Ve getstaticprops'ta aynı mantıkta çekiliyor...  
// Bu aynı yapı tekrar etmesin diye fonksiyona aldım..

import { cacheCountries } from "@/components/utils/cachecountries";
import WebData from "@/components/utils/webdata";
import DictionaryData from "@/components/utils/dictionarydata";
import { get_FileObjects_SpecialRequests } from "@/src/components/utils/get_fileobjects_specialrequests";


 const Cs_Initial_Func = async  ({params, locale, bigbigparent_slug}) => {

              let dictionary= await DictionaryData({locale: locale ?? "tr"});  
              let webdata=await WebData();
              let countries=await cacheCountries();

              let lang= webdata?.bigdata?.history?.[0]?.lang?.tr;
              let logofiles =  lang?.logofiles;                                            
              let fileobjects  = await get_FileObjects_SpecialRequests({files:logofiles}) ;
              // console.log("gggg::", logofiles)                  
              let logo = fileobjects?.find(f=>f?.slug_tr  == logofiles[0]);

              let theme = webdata?.bigdata?.theme;
              let theme_module=undefined;                                          

              switch (bigbigparent_slug) {
                  case "urunler": theme_module = theme?.modules?.products; break;
                  case "hizmetler": theme_module = theme?.modules?.services; break;              
                  case "galeri": theme_module = theme?.modules?.gallery; break;
                  default: theme_module = theme?.modules?.products; break;                                 
              }

            //   console.log("bigbigparent_slugbigbigparent_slug: ", bigbigparent_slug);

              
              let layout_type= theme_module?.layout_type ?? {};
              let item_type= theme_module?.item_type ?? {};
              let listing_type= theme_module?.listing_type ?? {};
              let card_type= theme_module?.card_type ?? {};              
              let itemswr_specialstyle= theme_module?.itemswr_specialstyle ?? {};
              let item_elementswr_specialstyle= theme_module?.item_elementswr_specialstyle ?? {};              
              let aspectratio_image= theme_module?.aspectratio_image ?? "4/3";
              

  return ({
            webdata, 
            dictionary, 
            fileobjects, 
            logo, 
            countries,
            params:{...params, locale}, 
            listing_type,
            layout_type,
            item_type, card_type,  aspectratio_image , itemswr_specialstyle, item_elementswr_specialstyle    
         })
}


export default Cs_Initial_Func 