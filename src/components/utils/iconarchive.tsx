import { TbBrandFacebook, TbBrandInstagram, TbBrandTwitter, TbBrandYoutube, TbBrandTelegram  } from "react-icons/tb";

import {RiLockUnlockFill, RiLockUnlockLine, RiEmotionHappyLine, RiEmotionUnhappyLine, RiStarSFill, RiCloseFill, RiMenuLine, RiUserStarFill, RiUser3Fill, RiVideoFill, RiVideoLine, RiLock2Fill, RiLock2Line, RiPlayMiniFill,RiMagicFill, RiPlayMiniLine, RiMailLine, RiMailSendFill, RiStarHalfFill, RiStarFill, RiEditBoxLine, RiEditBoxFill,  RiToggleFill, RiToggleLine , RiAncientPavilionFill, RiAncientPavilionLine, RiInstagramLine, RiInstagramFill, RiDeleteBin2Fill, RiDeleteBin2Line, RiEyeLine, RiEyeOffLine, RiCodeBoxFill, RiCodeBoxLine, RiFileTextFill, RiFileTextLine} from "react-icons/ri";
import {IoSave, IoArrowDownCircleOutline, IoArrowUpCircleOutline, IoTrashBinOutline, IoHeartOutline, IoSwapHorizontalOutline, IoAddOutline, IoSwapVertical  } from "react-icons/io5";



export type icons="RiLockUnlockFill" | "RiLockUnlockLine" | "TbBrandTelegram" | "TbBrandInstagram" | "TbBrandYoutube" | "TbBrandTwitter" | "RiVideoFill" | "RiVideoLine"  | "IoSave" | "IoSwapVertical" | "RiLock2Fill" |  "RiLock2Line" | "RiMagicFill" | "RiPlayMiniFill" | "RiPlayMiniLine"  | "RiMailLine" | "RiMailSendFill"  | "RiStarHalfFill" | "RiStarFill" | "RiEditBoxLine"| "RiEditBoxFill"| "RiToggleFill"| "RiToggleLine" | "RiAncientPavilionFill"| "RiAncientPavilionLine"| "RiInstagramLine"| "RiInstagramFill"| "RiDeleteBin2Fill"| "RiDeleteBin2Line"| "RiEyeLine"| "RiEyeOffLine"| "RiCodeBoxFill"| "RiCodeBoxLine"| "RiFileTextFill"| "RiFileTextLine" | "IoArrowDownCircleOutline"| "IoArrowUpCircleOutline"| "IoTrashBinOutline"| "IoHeartOutline"| "IoSwapHorizontalOutline"| "IoAddOutline" 
export interface iconArchivePropType {        
    icon?: icons
    
}




export const iconArchive = ({icon}:iconArchivePropType) => {
    
    // let TagName = `${icon}`;
    // console.log("iconnnnnnnnnnnn", TagName, icon)
    // return <TagName />

    let iconComp =null


    switch (icon) {   
        
        case "RiLockUnlockLine":iconComp = <RiLockUnlockLine/>          
        break;        

        case "RiLockUnlockFill":iconComp = <RiLockUnlockFill/>          
        break;        


        case "TbBrandTelegram":iconComp = <TbBrandTelegram/>          
        break;        

        case "TbBrandYoutube":iconComp = <TbBrandYoutube/>          
        break;        

        case "TbBrandTwitter":iconComp = <TbBrandTwitter/>          
        break;        

        case "TbBrandInstagram":iconComp = <TbBrandInstagram/>          
        break;        

        case "TbBrandFacebook":iconComp = <TbBrandFacebook/>          
        break;
        

        case "RiEmotionHappyLine":iconComp = <RiEmotionHappyLine/>          
        break;        

        case "RiEmotionUnhappyLine":iconComp = <RiEmotionUnhappyLine/>          
        break;        

        case "RiStarSFill":iconComp = <RiStarSFill/>          
        break;        

        case "RiCloseFill":iconComp = <RiCloseFill/>          
        break;

        case "RiMenuLine":iconComp = <RiMenuLine/>          
        break;

        case "RiUserStarFill":iconComp = <RiUserStarFill/>          
        break;

        case "RiUser3Fill":iconComp = <RiUser3Fill/>          
        break;

        case "RiVideoFill":iconComp = <RiVideoFill/>          
        break;

        case "RiVideoLine":iconComp = <RiVideoLine/>          
        break;

        case "IoSave":iconComp = <IoSave/>          
        break;

        case "RiLock2Fill":iconComp = <RiLock2Fill/>          
        break;

        case "RiLock2Line":iconComp = <RiLock2Line/>          
        break;        

        case "RiMagicFill":iconComp = <RiMagicFill/>          
        break;

        case "RiPlayMiniFill":iconComp = <RiPlayMiniFill/>          
        break;

        case "RiPlayMiniLine":iconComp = <RiPlayMiniLine/>          
            break;        

            case "RiMailLine":iconComp = <RiMailLine/>          
                break;

            case "RiMailSendFill":iconComp = <RiMailSendFill/>          
                break;


            case "RiStarHalfFill":iconComp = <RiStarHalfFill/>          
                break;

            case "RiStarFill":iconComp = <RiStarFill/>          
                break;

            case "RiToggleFill":iconComp = <RiToggleFill/>          
                break;

            case "RiToggleLine":iconComp = <RiToggleLine/>     
                break;                

            case "RiInstagramFill":iconComp = <RiInstagramFill/>
                break;     
            
            case "RiInstagramLine":iconComp = <RiInstagramLine/>
                break;                     
                
            case "RiDeleteBin2Fill":iconComp = <RiDeleteBin2Fill/>            
                break;
            
            case "RiDeleteBin2Line":iconComp = <RiDeleteBin2Line/>
                break;                

            case "RiEyeLine":iconComp = <RiEyeLine/>        
                break;   

            case "RiEyeOffLine":iconComp = <RiEyeOffLine/> 
                break;                   
                
            case "RiEditBoxFill":iconComp = <RiEditBoxFill/>           
                break;  
            
            case "RiEditBoxLine":iconComp = <RiEditBoxLine/> 
                break;                   
                
            case "RiCodeBoxFill":iconComp = <RiCodeBoxFill/> 
                break;    

            case "RiCodeBoxLine":iconComp = <RiCodeBoxLine/> 
                break;                    
                
            case "RiFileTextFill":iconComp = <RiFileTextFill/>
                break;    
                
            case "RiFileTextLine":iconComp = <RiFileTextLine/>
                break;                    



            case "IoArrowDownCircleOutline":iconComp = <IoArrowDownCircleOutline/>           
                break;  
            
            case "IoArrowUpCircleOutline":iconComp = <IoArrowUpCircleOutline/> 
                break;                   
                
            case "IoTrashBinOutline":iconComp = <IoTrashBinOutline/> 
                break;    

            case "IoHeartOutline":iconComp = <IoHeartOutline/> 
                break;                    
                
            case "IoSwapHorizontalOutline":iconComp = <IoSwapHorizontalOutline/>
                break;    

            case "IoSwapVertical":iconComp = <IoSwapVertical/>
                break;                    
                
                
            case "IoAddOutline":iconComp = <IoAddOutline/>
                break;                 


            default: iconComp=<RiAncientPavilionFill/> 
                break;
        }


  //return  iconComp

  return  iconComp

}


{/* <div style={{fontSize:size, cursor:"pointer", display:"flex"}}>{icon}</div> */}