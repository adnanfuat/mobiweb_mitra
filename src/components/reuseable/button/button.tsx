import s from "./button.module.css"

import {iconArchive} from "@/components/utils/iconarchive";


export interface Props {
  props: {
    text?:string
    title:string
    onClick: () => void;
    // icon?: "IoArrowDownCircleOutline" | "IoArrowUpCircleOutline" | "IoTrashBinOutline" | "IoHeartOutline" | "IoSwapHorizontalOutline" | "IoAddOutline" | "RiToggleFill" | "RiToggleLine" | "RiDeleteBin2Line" | "RiDeleteBin2Fill" //Icon
    icon:icons 
    disabled?: boolean
    width?:Number
    height?:Number    
    loading?: boolean
  }
}


export const Button = ({props}:Props) => {
  let {onClick, text, title, icon, disabled, width, height, loading} = props ?? {}

  // const [loadingstate, setloadingstate] = useState(true);
  
  return (
    <div className={s.shell}>                
        <button type="button" onClick={onClick} 
              disabled={disabled} 
              title={title}  
              className={s.button} 
              style={{'--w':width ? `${width}px` : `${40}px`,  '--h':height ? `${height}px` : `${40}px`}} 
              >  
              
              {iconArchive({ icon: loading ? "IoSwapVertical" : icon  }) }
               {text} 

              

        </button>
    </div>
  )
}


