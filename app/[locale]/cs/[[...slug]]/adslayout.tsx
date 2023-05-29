import s from "./adslayout.module.css"
import Link from "next/link";
import HeaderComp from "@/components/header/headercomp";


export const AdsLayout = (props) => {
    let {
                countries,        
                categories, 
                category, 
                allcategories, 
                pagetype,  // listing, advert                
                parents,// [ { "slug_tr": "emlak", "title_tr": "Emlak", "key": "1668310884" } ] // İlanların genel listelemesinde ve ilanda kullanıyoruz bu template'i... İlanlarda router/query/slug üzerinden alıyoruz ama ilan düzenlesinde sadece o ilanın içinden alabiliriz "parents" bilgisini... Dolayısıyla sadeceilan sayfasındaişe yarayan birbilgi
                title,
                side,// "/ad/" ---> "/console/adverts/"
                sidepadding
        } =     props ?? {}

        // paddingLeft:sidepadding, paddingRight:sidepadding
    return (        
        <div >   
                
                <div className={s.childrenWr}> {props?.children} </div>
                
                {/* <div className={s.mainwr}  style={{position:"relative" }}>      

                        <div className={s.bodywr}>                        
                                <div className={s.header}>                                                                                
                                                
                                        <div className={s.subheader}><Advert_Visitor_Parents parents={parents}/></div>
                                        

                                </div>                                                                
                                
                        </div>
                </div>    */}
        </div>                        
    )
}






const Advert_Visitor_Parents = (props) => {

        let {parents} = props ?? {};
  
        // let parents=advert?.bigdata?.history?.[0]?.info?.parents;
        
        
        let linkObj=parents?.map((item, index)=>{
                  
                            item={value:item?.slug_tr, label:item?.title_tr, fulllink:(parents?.filter((p,i)=>i<=index)?.map(p=>p?.slug_tr)?.join("/"))}
  
                            return item
                  
                  }) ?? []
            
                linkObj= linkObj?.length>0 ? [{value:"", label:"İlanlar", fulllink:""}    , ...linkObj] : [] // Sadece ilan sayfasındayken yukarıdaki parent breadcrumbını göster. Haricinde ana sayfada gösterme
  
        return (
          <div>
            
            <div className={s.parentslist}>
                {linkObj?.map((item, i)=>{
                          return <Link href={"/ads/"+item?.fulllink} key={"link_"+i}><span>{i>0 && " > "}</span> {item?.label}</Link>
                })}
            </div>
                {/* {JSON.stringify(linkObj)} */}
          
          </div>
        )
      }