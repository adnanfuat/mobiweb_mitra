import Image from 'next/image'
import Link from 'next/link'
import s from "./index.module.css"    

 export   const Blogs = () => {
    return (

<div className={s.blogsMainWr}>

        <div className={s.title}> BLOG YAZILARI </div>
        

        <div className={s.blogsWr}>

                                <Link href="#">
                                        <div className={s.blogWr}> 
                                            <div className={s.blogTitle}> İbreli bitkiler nelerdir?</div>
                                            <div className={s.blogDescription}> İbreli bitkiler, yapraklarının uçlarındaki ince, uzun ve esnek sap şeklindeki bitkilerdir. Bunlar genellikle ev ortamında bakılan, güzel ve rahatlatıcı bitkilerdir. İbreli bitkiler ev ortamında kolay bakım gerektirir ve güneş ışığı, nem ve düzenli sulama gerektirir. İbreli bitkiler ev dekorasyonunuz için güzel bir eklemelik veya çalışma alanınıza rahatlık katmak için... </div>
                                            <div className={s.blogImage}><Image src={"/themes/vitalis/blog1.jpg"} width={580} height={435} className={s.imgstyle}/></div>                                                                     
                                            <div className={s.blogButton}>Devamı</div>                                
                                        </div>
                                </Link>


                                <Link href="#">
                                        <div className={s.blogWr}> 
                                            <div className={s.blogTitle}> Hangi ev bitkisine hangi toprak kullanılır?</div>
                                            <div className={s.blogDescription}> Evde bitki bakımı hakkında birçok ayrıntı vardır. Bunlardan bir tanesi hangi ev bitkisine hangi toprağı kullanacağınızdır. Bitkinin sağlıklı bir şekilde büyümesi için kullanılan toprak çok önemlidir. Ev bitkilerinin toprak ihtiyacı bitkiden bitkiye farklıdır. </div>
                                            <div className={s.blogImage}><Image src={"/themes/vitalis/blog2.jpg"} width={580} height={435}  className={s.imgstyle}/></div>                                                                     
                                            <div className={s.blogButton}>Devamı</div>                                
                                        </div>
                                </Link>


                                <Link href="#">
                                        <div className={s.blogWr}> 
                                            <div className={s.blogTitle}> Sukulent bakımı hakkında bilmedikleriniz </div>
                                            <div className={s.blogDescription}> Sukulent seviyorsunuz ama nasıl bakacağınız bilmiyor musunuz? İşte bu yazımız sukulent sevenler için. Sukulentler genellikle hafif, az sulama ihtiyacı olan çok renkli bitkilerdir. Sukulent bakımı için sizlere sunacağımız önerileri uygularsanız sizin de çok güzel sukulentleriniz olabilir. </div>
                                            <div className={s.blogImage}><Image src={"/themes/vitalis/blog3.jpg"} width={580} height={435}  className={s.imgstyle}/></div>                                                                     
                                            <div className={s.blogButton}>Devamı</div>                                
                                        </div>
                                </Link>


                                <Link href="#">
                                        <div className={s.blogWr}> 
                                            <div className={s.blogTitle}> {`Vitalis Botanik'i yakından tanıyın`} </div>
                                            <div className={s.blogDescription}> {`Vitalis Botanik'i yakından tanıyın`}</div>
                                            <div className={s.blogImage}><Image src={"/themes/vitalis/blog4.jpg"} width={580} height={435}  className={s.imgstyle}/></div>                                                                     
                                            <div className={s.blogButton}>Devamı</div>                                
                                        </div>
                                </Link>

                                                                                                                                                                                                                                                     
        </div>
                                                                                   

      </div>
    )
  }
  
  
  