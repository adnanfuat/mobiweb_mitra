import Image from 'next/image'
import s from "./index.module.css"    

 export const Triangle = () => {
    return (
      <div className={s.triangleWr}>

                  <div className={s.triangleInnerWr}>
                        <div className={s.triangle1}>                         
                            <div><Image src={"/themes/arges/triangle_icon.png"} width={75} height={75}/></div>
                            <div>ESTETİK YAPILAR</div>
                            <div>Estetiğe önem vererek en modern çizgilerde yapılar inşaa ediyoruz.</div>
                        </div>        

                        <div className={s.triangle1}>                         
                            <div><Image src={"/themes/arges/triangle_icon.png"} width={75} height={75}/></div>
                            <div>UZMAN KADRO</div>
                            <div>Estetiğe önem vererek en modern çizgilerde yapılar inşaa ediyoruz.</div>
                        </div>        

                        <div className={s.triangle1}>                         
                            <div><Image src={"/themes/arges/triangle_icon.png"} width={75} height={75}/></div>
                            <div>HİZMET DEVAMLILIĞI</div>
                            <div>Bünyemizdeki uzman mühendisler ve uzman mimarlar ile hizmet veriyoruz.</div>
                        </div>        
                  </div>     
                                   
            </div>
    )
  }
  
  