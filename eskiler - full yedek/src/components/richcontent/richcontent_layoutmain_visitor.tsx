import s from "./richcontent_layoutmain_visitor.module.css"
import Link from "next/link";


export const RichContent_LayoutMain_Visitor = (props) => {
    let {
                urlprefix_parents,      //  Üst kategorilere hangi linkle gidiliyor.. /advs/emlak/satilik
                bigbigparent_key,
                countries,        
                categories, 
                category, 
                allcategories, 
                pagetype,  // listing, advert                
                parents=[],// [ { "slug_tr": "ilanlar", "title_tr": "İlanlar", "key": "999" }, { "slug_tr": "emlak", "title_tr": "Emlak", "key": "1668310884" } ] // İlanların genel listelemesinde ve ilanda kullanıyoruz bu template'i... İlanlarda router/query/slug üzerinden alıyoruz ama ilan düzenlesinde sadece o ilanın içinden alabiliriz "parents" bilgisini... Dolayısıyla sadeceilan sayfasındaişe yarayan birbilgi
                title,
                side,// "/ad/" ---> "/console/adverts/"
        } =     props ?? {}

                                
    return (        
                <div className={s.mainwr} >                     
                        <div className={s.bodywr}>                        
                                <div className={s.header}> 
                                        
                                        {title &&  <h1>  {title} </h1>}                                        
                                                
                                        <div className={s.subheader}><Advert_Visitor_Parents parents={parents} bigbigparent_key={bigbigparent_key} urlprefix_parents={urlprefix_parents}/></div>
                                        

                                </div>                                                                
                                <div className={s.childrenWr}> {props?.children} </div>
                        </div>
                </div>        
    )
}




// bunların hepsini tek bir kategori yapısına al

const Advert_Visitor_Parents = (props) => {

        let {parents, urlprefix_parents, bigbigparent_key} = props ?? {};

        let pointer = parents.findIndex( p=>p?.key == bigbigparent_key );

        parents=parents?.filter( (e, index) => index>=pointer )

        ////////////////////////
                
        let linkObj=parents?.map((item, index)=>{                  
                                                        item={value:item?.slug_tr, label:item?.title_tr, fulllink:(parents?.filter((p,i)=>i<=index)?.map(p=>p?.slug_tr)?.join("/"))}
                                                        return item                   
                  }) ?? []
            
                linkObj= linkObj?.length>0 ? [ ...linkObj] : [] // Yandakinin hükmü düşmüş olabilir... // Sadece ilan sayfasındayken yukarıdaki parent breadcrumbını göster. Haricinde ana sayfada gösterme
  
        return (
          <div>  
            
            <div className={s.parentslist}>
                {linkObj?.map((item, i)=>{
                          return <Link href={`/${urlprefix_parents}/`+item?.fulllink} key={"link_"+i}><span>{i>0 && " > "}</span> {item?.label}</Link>
                })}
            </div>
                {/* {JSON.stringify(linkObj)} */}
          
          </div>
        )
      }