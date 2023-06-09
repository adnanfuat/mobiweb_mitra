import s from "./richcontent_categoriesmenu_visitor.module.css"
import Link from "next/link"
import { useEffect, useState } from "react";
import { tabStatesFunc_WithKey} from "@/components/utilsnew/tabstatesfunc_withkey";
import {RiFolder3Fill,RiFolder5Fill, RiGamepadLine} from "react-icons/ri";
import { useRouter } from 'next/router';
import {  useQuery } from "react-query";


export const CategoriesMenu_Visitor = ({props}) => 
{
    let {  category, bigbigparent_key, bigbigparent_slug, urlprefix} =props ?? {};       
    const router = useRouter();  
    let slug= router?.query?.wrong ?? [];
        
    // console.log("slugggg---:", router);
    //***
    let parents=[]; // category?.o_key_1?.parents; // ["ilanlar", "emlak", "konut"] diye bize parentslar geliyor.
    //let bigbigparent_slug_index  = parents?.findIndex(p=>p?.slug_tr==bigbigparent_slug); // Ama bize parents olarak sadece onut lazım. Sağdaki menüde  selected olarak işaretlemek için... O zaman biz ilanlar/emlak kısmını sıyırıp atmalıyız
    // parents=parents?.filter((a,i)=>i>bigbigparent_slug_index); // Bize ilgili parentstan sonrası lazım..
    // parents=[...parents, { slug_tr:category?.slug_tr ,  key:category?.key,  }  ]
    //***


    let full_parents= category?.o_key_1?.parents

    let paths_inurl= slug?.filter(g=>g!=bigbigparent_slug); // ["emlak", "konut"] // diye geldi ama bize sadece konut lazım.. konutu selected yapacağız..
    
    paths_inurl = paths_inurl?.map(a=>full_parents?.find(f=>f?.slug_tr==a)) ; //Obje şeklinde döndürdk

    let init_selecteds=paths_inurl?.map(s=>s={key:s?.key, state:true, slug:s?.slug_tr} ) ?? [];
    
    // init_selecteds=init_selecteds?.filter(a=>a!=bigbigparent_slug);  // "ilanlar" -->test edemedim...

    // init_selecteds=[...init_selecteds, {key:category?.key, state:true, slug:category?.slug_tr} ]
        
    const [tabstates, set_tabstates] = useState(init_selecteds); // slayt tabların açık kapalı durumu...
        
    useEffect(() => { set_tabstates(init_selecteds); }, [init_selecteds?.length, slug?.[slug?.length-1]]);    

    return ( 
      <div style={wrapperForWithSubmenus}> 
      
            {/* {JSON.stringify(full_parents)} */}

            <Recursive props={{urlprefix, rootslug:bigbigparent_key, bigbigparent_slug, tabstates, set_tabstates, deep:0}}/>
            <div style={cStyle}><RiGamepadLine/> <Link href="/console/emlak">PANEL</Link> </div>

      </div> 
    )
}



const Recursive = ({props}) => {
  
  let {rootslug,  tabstates, set_tabstates, deep, bigbigparent_key, bigbigparent_slug, urlprefix} =props ?? {};   

    const fetcher_sc =async ()=> { 
      let rawdata= await fetch(process.env.NEXT_PUBLIC_API_URL, { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify({ query: RelatedSubCategoriesQuery_WithKey, variables: {data:{origin:rootslug}}, }), })       
        let datajson=await rawdata.json(); let data = datajson?.data; // console.log("sadsadsdasda", categories)                                                
        return data
  };    

  const {  data:data_sc } = useQuery( ["RelatedSubCategoriesQuery", deep, rootslug, bigbigparent_key ], () => fetcher_sc() , { enabled:true } );
  let subcategories = data_sc?.relatedsubcategoriesquery_withkey ?? [];

  
   

  return (
            <div style={sublinkscontainer} key={`${deep}-${rootslug}`}> 
              {/* {JSON.stringify(tabstates)} */}
              
            {subcategories?.map((category, index)=>{

              let selected = tabstates?.find((s) => s.key == category?.key)?.state == true;       
              
              // let parents = category?.o_key_1?.parents;

               //***
               let linkpaths=category?.o_key_1?.parents; // ["ilanlar", "emlak", "konut"] diye bize parentslar geliyor.                         
               let bigbigparent_slug_index  = linkpaths?.findIndex(p=>p?.slug_tr==bigbigparent_slug); // Ama bize parents olarak sadece onut lazım. Sağdaki menüde  selected olarak işaretlemek için... O zaman biz ilanlar/emlak kısmını sıyırıp atmalıyız
               linkpaths=linkpaths?.filter((a,i)=>i>=bigbigparent_slug_index); // Bize ilgili parentstan sonrası lazım..
               linkpaths=linkpaths?.map(l=>l?.slug_tr)
               //***
               
               
              //let slugs=parents?.map(p=>p?.slug_tr);
              // slugs=slugs?.filter(a=>a!=bigbigparent_slug);              
              let links= `${(linkpaths?.join("/"))}${linkpaths?.length>0 ? "/" : ""}`;

              let folderColor= selected ? (subcategories?.length>0 ? "green" : "#1fbd1f") : "black";
              let folderHint= selected ? (subcategories?.length>0 ? "Seçili - Alt kategorileri görüntülüyorsunuz" : "Seçili - Alt kategorisi yok") : (subcategories?.length>0 ?  "Seçili değil - Alt kategoriler için tıkla" : "Seçili değil - Alt kategorisi yok" );

              


              return <div style={{ marginLeft:deep*3, fontSize:18-deep*1.5}} className={s.rmainwr} key={`ca-${index}`}> 
                
                   {/* {JSON.stringify(linkpaths)} */}

                      <div className={s.categorynamewr}>  
                            <div onClick={() => { subcategories?.length>0 && tabStatesFunc_WithKey({ key:category?.key, set_tabstates }) }} style={{cursor:subcategories?.length>0 ? "pointer" : "not-allowed"}} title={folderHint}>
                                  {(selected && subcategories?.length>0) ? <RiFolder5Fill color={folderColor}/> : <RiFolder3Fill  color={folderColor}/>}
                            </div>                          
                            <span>{category?.i_key_1}</span>
                            <Link href={`/${urlprefix}/${links}${category?.slug_tr}`} style={{textDecoration:((tabstates?.find(t=>t.key==category?.slug_tr))) ? "underline" : "none"}}>{category?.title_tr}</Link>
                      </div>                       
                      
                            {(selected && subcategories?.length>0) && <Recursive props={{rootslug:category?.key, urlprefix, tabstates, set_tabstates, deep:deep+1, bigbigparent_key, bigbigparent_slug}}/>}              

                    
                    </div>
            })}
          </div>
        )
}




const cStyle = {display:"flex",  gap:6, justifyContent:"left", alignItems:"center"}
const wrapperForWithSubmenus = {display:"flex", flexDirection:"column", gap:10}
const recursiveSubmenus = {display:"flex", flexDirection:"column", width:"100%"}
const recursivelinkstyle= { textDecoration: "none",color:"gray", fontSize:12};
let sublinkscontainer = {border:"0px solid black", display:"flex", gap:6, flexDirection:"column", padding:"10px 0px 10px 0px" , backgroundColor:"transparent" }




const RelatedSubCategoriesQuery_WithKey = 
`  query RelatedSubCategoriesQuery_WithKey ($data:JSON)  {
    relatedsubcategoriesquery_withkey (data:$data) {
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
      
    }
  }`
;



