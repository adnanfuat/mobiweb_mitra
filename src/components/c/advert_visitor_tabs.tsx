

import s from "./s.module.css"
import dynamic from 'next/dynamic'
import { useState } from "react";
const Advert_Visitor_Googlemaps_Dynamic = dynamic(() => import("./advert_visitor_googlemaps_dynamic"), { loading: () => <div className={s.advert_visitor_image_dynamic_loading}><div>Yükleniyor</div></div> } );  


export const Advert_Visitor_Tabs = (props) => {

  let { advert  } = props ?? {}

  let detail=advert?.bigdata?.history?.[0]?.lang?.tr?.detail;
  const [tab, settab] = useState(1)

  return (
            <div className={s.tabswr}>
                      <div className={s.tabs}> 
                      <div className={s.tab} style={{borderTopColor:tab==1 ? "darkgray" : "transparent"}} onClick={()=>settab(1)}>Açıklama</div>
                      <div className={s.tab} style={{borderTopColor:tab==2 ? "darkgray" : "transparent"}} onClick={()=>settab(2)}>Konum</div>                                      
            </div>
                      <div className={s.tabpanelwr}>
                          
                              {tab==1 &&  <div dangerouslySetInnerHTML={{__html: detail}} ></div>}
                              {tab==2 && <Advert_Visitor_Googlemaps_Dynamic  advert={advert}/>}

                      </div>
            </div>
  )
}
