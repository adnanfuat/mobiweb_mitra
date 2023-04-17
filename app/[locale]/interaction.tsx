
"use client"
import {siteProxy} from "@/constants/siteproxy"

export const Interaction = () => {
  return (
    <div style={style} onMouseOver={()=>{ siteProxy.interaction=true}} onTouchStart={()=>{ siteProxy.interaction=true}}>
            sadsadsda assad
    </div>
  )
}




let style={

    position:"absolute",
    // backgroundColor:"#cbbb9f",
    minWidth:"100%",
    minHeight:"100%",
    right:0, top:0
}