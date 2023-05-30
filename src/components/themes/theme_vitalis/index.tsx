
import s from "./index.module.css"
import HeaderComp from "@/components/header/headercomp"
import FooterComp from "@/components/footercomp"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {Index_Cuffs_V2_Visitor} from "@/components/cuffs/index_cuffs_v2_visitor"
import WebData from "@/components/utils/webdata"
import DictionaryData from "@/components/utils/dictionarydata"
import { localeStatic } from "@/constants/localestatic"
import Estates from "@/components/estates/estates";

export const Theme_Vitalis = async (props) => {

    let {logo, params, dictionary, webdata, cuffs} = props ?? {};
  
    return (
                <div style={{position:"relative"}}>  
                {/* sadsaddsa {webdata?.bigdata?.theme?.name} */}
                {/* PROPSSSS : {JSON.stringify(params)} -------------- */}
                  
                        <HeaderComp logo={logo} params={params} dictionary={dictionary} webdata={webdata} position="absolute"  sidepadding={42} topbottom={5}/>
  
                        <div className={s.main}>              

                        <div className={s.cuffs}>
                                asdasdds asdsad sadsads asdsad sadsadsa 
                        </div>                                                                        

                                                 <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/>                                                              
                                                 <Estates adverts={webdata?.richcontents?.filter(a=>a?.bigbigparent_key=="1668310884")} params={params} sidepadding={42} />
                                          
                        </div> 
  
                          <div className={s.footer}><FooterComp logo={logo}/></div>             
                </div>          
          )
  }
  
  
  
  