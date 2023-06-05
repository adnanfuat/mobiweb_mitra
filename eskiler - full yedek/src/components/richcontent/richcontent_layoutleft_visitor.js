import {isLogged} from "@/components/hooksnew/islogged";
import {CategoriesMenu_Visitor} from "./richcontent_categoriesmenu_visitor"
import {RichContent_RegionsMenu_Visitor} from "./richcontent_regionsmenu_visitor"
import Link from "next/link"
import s from "./richcontent_layoutleft_visitor.module.css"
import { RiAddFill, RiArtboard2Fill, RiEditBoxFill} from "react-icons/ri";
import { useRouter } from 'next/router';
import {  signIn } from "next-auth/react";
import Image from "next/image";

export const RichContent_LayoutLeft_Visitor = ({props}) => {

  let {
        title,
        urlprefix,
        bigbigparent_key,    
        bigbigparent_slug,
        countries,        
        category,  
        consolelink,      
        // iptal...     parents //// [ { "slug_tr": "emlak", "title_tr": "Emlak", "key": "1668310884" } ] // İlanların genel listelemesinde ve ilanda kullanıyoruz bu template'i... İlanlarda router/query/slug üzerinden alıyoruz ama ilan düzenlesinde sadece o ilanın içinden alabiliriz "parents" bilgisini... Dolayısıyla sadeceilan sayfasındaişe yarayan birbilgi
  } = props ?? {}
  
  
    
  return (
    <div className={s.mainWr}>
      <div className={s.menu}> 
            <div className={s.menuleft}><RiArtboard2Fill size={20}/> <Link href={`${bigbigparent_slug}`}>{title}</Link> </div>                                    
            <div className={s.menuright}><Shortcuts {...props}/></div>
      </div>      
          <CategoriesMenu_Visitor props={props}/>
          <RichContent_RegionsMenu_Visitor props={props}/>
    </div>
  )
}




const Shortcuts = (props) => {
    
     let {consolelink} =props ?? {};

    const router = useRouter();   

    const isloggeddata=isLogged();

    let {user} = isloggeddata ?? {}

    let permissions = isloggeddata?.permissions;    
    let advert_auth= true   // permissionsControlV3({askList:["advert_edit", "advert_add"], type:"some", permissions});
      
    // console.log("user:::::::", user)

    let hint = !user ? "İlan eklemek için önce giriş yapınız" :  "İlan eklemek için kontrol panele geçiş yapınız"

  return (
    <div className={s.links}> <RiEditBoxFill size={22} onClick={()=>{!user ? signIn() : router.push(`/${consolelink}`)}} title={hint} className={s.iconlink}/> </div>
  )
}







let loadingStyle= {
    position:"absolute",    
    right:-8,
    top:-8
}


let buttonWrStyle= {
    position:"relative",    
}


let buttonStyle= {
    backgroundColor:"transparent",
    border:"none",
    fontSize:25,
    cursor:"pointer",
    alignItems:"center",
    display:"flex"
}  
  

//   const mainRow =  { display: "flex", gap:4, alignItems: "center", justifyContent:"left" }
// const clickablestyle = {color:"red", cursor:"pointer"}
// const noneclickablestyle = {color:"gray", }
// const mylinkstyle= { textDecoration: "none"};
const wrapperForWithSubmenus = {display:"flex", flexDirection:"column", gap:10}
const recursiveSubmenus = {display:"flex", flexDirection:"column", width:"100%"}
const recursivelinkstyle= { textDecoration: "none",color:"gray", fontSize:12};
let sublinkscontainer = {border:"0px solid black", display:"flex", gap:6, flexDirection:"column", padding:"10px 0px 10px 0px" , backgroundColor:"transparent" }

