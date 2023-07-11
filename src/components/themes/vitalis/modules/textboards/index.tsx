import Image from 'next/image'
import s from "./index.module.css"    

 export   const TextBoards = (props) => {


  let {module} = props ?? {}
  let {items} = module ?? {}


    let title1="Sakarya hediyelik bitki satışı yapan yerler";
    let description1=`Sakarya'da hediyelik bitki satışı yapan birçok mağaza bulunmaktadır. Bu mağazalar, çeşitli türlerde bitkiler, fidanlar, bahçe aksesuarları ve topraklar gibi ürünler sunmaktadır. Hediyelik bitkiler, sevdiklerinize doğal bir hediye olarak verilebilir, evinizi veya ofisinizi yeşillendirmek için kullanabilirsiniz.        
    Sakarya'daki bitki satışı yapan mağazalar arasında, hem iç mekan bitkileri hem de dış mekan bitkileri satışı yapan yerler bulunabilir. Bu bitkiler arasında sukulentler, süs bitkileri, evde yetiştirilebilen meyveler ve bahçe bitkileri de yer alabilir. Vitalis Botanik sizlere bu bitkilerin bakımı hakkında da bilgi verilir ve müşterilerine en uygun bitki seçiminde yardımcı olabilir.    
    Ayrıca, bitkilerin fiyatları da farklılık gösterir ve her bütçeye uygun bitki bulmak mümkündür. Hediyelik bitki satışı yapan mağazamız, Sapanca'da hizmet vermekte olup, online olarak da sipariş verme imkanı sunar.    
    Sakarya'da hediyelik bitki satışı yapan birçok mağaza bulunmaktadır ve bu mağazalarda farklı türlerde bitkiler, fidanlar ve bahçe aksesuarları bulunabilir. Müşterilerine yardımcı olmak için ekipmanlar sunan bu mağazalar, evinizi veya ofisinizi yeşillendirmek için en uygun bitki seçiminde size yardımcı olacaktır.
    Sakarya hediyelik bitki satışı yapan bir yer olan Vitalis Botanik ile iletişime geçmek için;
    Adres: Rüstempaşa Mahallesi Kuruçay Mevkii Sapanca/SAKARYA
    Telefon: 0 534 6045154`;

    let title2="Sapanca'da bahçe ilaçlayacak firmalar";
    let description2=`Sapanca'da, güzel ve sağlıklı bir bahçe için gerekli olan ilaçlama hizmetlerini sunan birçok firma bulunmaktadır. Bu firmalar, bahçenizdeki bitkilerin sağlıklı ve güzel kalması için gerekli olan çeşitli ilaçları uygulayabilir ve bahçenizin sağlıklı ve güzel bir görünüm kazanmasını sağlayabilir. 
    Sapanca'daki bahçe ilaçlama firmaları, zararlı böceklerden, hastalıklardan veya diğer zararlı unsurlardan koruyacak ve bitkilerin sağlıklı bir şekilde gelişmesine yardımcı olacaktır. Bunlar arasında, herbisitler, fungisitler, nematod ilaçları veya diğer çeşitli ilaçlar bulunabilir.         
    Firmamız Vitalis Botanil, müşterilerine en uygun ilaçlama yöntemini ve frekansını belirlemek için danışmanlık hizmeti sunar. Ayrıca, bahçe ilaçlama hizmeti için uygun fiyatlar sunar ve müşterilerine en uygun bahçe ilaçlama paketi ile yardımcı olur. Sonuç olarak, Sapanca'da bahçenizin sağlıklı ve güzel kalması için gerekli olan ilaçlama hizmetlerini sunan birçok firma bulunmaktadır. Bu firmalar arasında yer alan Vitalis Botanik, bahçenizdeki bitkilerin sağlıklı ve güzel kalmasını sağlamak için gerekli olan çeşitli ilaçları uygulayacak ve müşterilerine en uygun ilaçlama yöntemini ve frekansını belirlemek için danışmanlık hizmeti sunacaktır.    
    Sapanca'da bahçe ilaçlayacak bir yer olan Vitalis Botanik ile iletişime geçmek için;
    Adres: Rüstempaşa Mahallesi Kuruçay Mevkii Sapanca/SAKARYA
    Telefon: 0 534 6045154`;
    
    let title3="Sapanca'daki bitki ve fidancılar hakkında bilgi";
    let description3=`Sapanca, bitkiler ve fidanlar açısından zengin bir coğrafyadır. Bu ilçede, peyzaj ve bahçe bitkileri, meyve ağaçları, çiçekli bitkiler ve diğer çeşitli bitkiler bulunabilir.
    Bitki ve fidan seçimi, kişinin beklentilerine ve bahçe koşullarına göre yapılabilir. Bahçenize uygun olan bitkileri ve fidanları seçerek, bahçenizin güzel ve sağlıklı bir görünüm kazanmasına yardımcı olabilirsiniz.         
    Sapanca'da, profesyonel bitki ve fidan satışı yapan birçok bitki ve fidancısı bulunmaktadır. Bunlardan bir tanesi Vitalis Botanik'tir. Firmamız, bitki ve fidanların doğru bakımı, sulanması ve ilaçlanması gibi konular hakkında da bilgilendirme yapar.         
    Sapanca, bitkiler ve fidanlar açısından zengin bir coğrafya olarak bilinir ve bu şehirde profesyonel bitki ve fidan satışı yapan birçok bitki ve fidancı bulunmaktadır. Bahçenizin güzel ve sağlıklı bir görünüm kazanması için en uygun bitki ve fidan seçimini yapmak ve bu konuda gerekli olan danışmanlık hizmetini almak için bu bitki ve fidançıları tercih edebilirsiniz.        
    Sapanca'daki bir fidancı olan Vitalis Botanik ile iletişime geçmek için;
    Adres: Rüstempaşa Mahallesi Kuruçay Mevkii Sapanca/SAKARYA
    Telefon: 0 534 6045154`;
    
    let title4="Sakarya'da torf ve gübre nereden alınır?";
    let description4=`Sakarya'da, torf ve gübre gibi bahçe malzemeleri pek çok yerden alınabilir. Bahçe malzemeleri satan marketler, araç gereç dükkanları ve bitki ve fidancılar gibi çeşitli yerlerden torf ve gübre satın alabilirsiniz. Vitalis Botanik toprak, torf ve gübre temin edebileceğiniz bir adrestir. 
    Torf, toprak verimliliğini artırmak için kullanılan bir malzemedir ve bahçelerde bitkilerin daha sağlıklı ve güzel büyümelerini destekler. Gübre ise bitkilerin ihtiyaç duydukları besin maddelerini sağlar ve bitkilerin daha sağlıklı ve verimli büyümelerini destekler.         
    Sakarya'da, torf ve gübre satışı yapan birçok yer bulunmaktadır. Bu yerler, farklı türleri ve markaları ile torf ve gübre satmaktadır ve müşterilerine en uygun malzemeyi seçmelerine yardımcı olmak için danışmanlık hizmeti sunarlar.    
    Sonuç olarak, Sakarya'da torf ve gübre gibi bahçe malzemeleri pek çok yerden alınabilir. Bahçe malzemeleri satan marketler, araç gereç dükkanları ve bitki ve fidançıları gibi çeşitli yerlerden torf ve gübre satın alabilirsiniz ve bu yerler müşterilerine en uygun malzemi seçmelerine yardımcı olmak için danışmanlık hizmeti sunarlar.    
    Sakarya'da torf ve gübre alabileceğiniz bir yer olan Vitalis Botanik ile iletişime geçmek için;
    Adres: Rüstempaşa Mahallesi Kuruçay Mevkii Sapanca/SAKARYA
    Telefon: 0 534 6045154`;
    

    return (

<div className={s.textboardsMainWr}>
                
        <div className={s.textboardsWr}>

              {/* {
                JSON.stringify(module)
              } */}

              {

                items?.map((item, index)=> {

                  return  <Board title={item?.data?.[0]?.data_tr} description={item?.data?.[1]?.data_tr}  link={item?.data?.[2]?.data_tr} key={index}/> 

                })

              }

                                                                                                                        
                               
        </div>
                                                                                   
      </div>
    )
  }
  
  
  

  
  
  const Board = (props) => {

    let {title, description, link} = props ?? {};

    return (
      <div className={s.textboardWr}> 
                  <div className={s.textboardTitle}> {title} </div>
                  {/* <Image src={"/themes/vitalis/product1.jpg"} width={300} height={225}/>                                  */}

                  <div className={s.textboardDescription}>{description}</div>

                  {link && <div className={s.textboardButton}>Devamı</div> }
              </div>
    )
  }
  