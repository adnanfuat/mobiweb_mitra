import Image from 'next/image'
import s from "./index.module.css"    

 export   const Welcome = () => {
    return (

<div className={s.welcomeWr}>

        <div className={s.welcomeInnerWr}>

              <div className={s.welcomeTitle}>
                
                Arges İnşaat & Mimarlık
                
                <div className={s.welcomeTitleHr}>  
                    <div className={s.welcomeTitleHrBold}>  </div>  
                </div>  

              </div>  
              <div  className={s.welcomeDescription}>ARGES İnşaat Sakarya merkezli olarak tüm Türkiye genelinde inşaat ve mimarlık sektöründe bünyesindeki uzman mimar ve mühendisleri ile müşteri memnuniyetini en ön planda tutarak hizmet vermektedir.İşletmemiz inşaat & mimari alanında kaliteli ve profesyonel bir hizmet vererek, fonksiyonel ve estetik yapılar inşaa etmek amacı ile kurulmuştur. Kurulduğumuz günden bu yana yaptığımız projeler ile de tecrübemizi en üst seviyeye taşımayı başarmış olmanın gururunu yaşamaktayız.</div>                  
              <div  className={s.welcomeImage}><Image src={"/themes/arges/welcome.jpg"} width={250} height={220}/></div>  

        </div>
                

      </div>
    )
  }
  
  
  