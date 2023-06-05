import Image from 'next/image'

import s from "./index.module.css"    
import React from "react";

import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';



 export const FixedWindow = () => {
    return (
      <div className={s.fixedWr}>


                                    <div className={s.title}>                                        
                                        FAALİYET ALANLARIMIZ                                        
                                        
                                        <div className={s.titleHr}>  
                                            <div className={s.titleHrBold}></div>  
                                        </div>  

                                    </div>  



                  <div className={s.fixedInnerWr}>



                    <MySlider/>

                        
                        
                             
                  </div>                                      
            </div>
    )
  }
  
  


  
  
  const MySlider = () => {



    return (
        <Carousel showThumbs={false} showStatus={true} className={s.sliderwr} >
        {[1,5,6,6]?.map((item, i) => (
            //   <Link href={"#"}  key={`cuff-l-${i}`}>
            // <div key={`ff-${i}`} className={s.slideritem} style={{backgroundImage:`url("/themes/arges/window_${i+1}.jpg")`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:""}}></div>
                    <div key={`ff-${i}`} className={s.slideritem} >
                         <img src={`/themes/arges/window_${i+1}.jpg`}/>
                    </div>
            //   </Link>
        ))}
  </Carousel>   
    )
  }
  