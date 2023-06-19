import Image from 'next/image'
import Link from 'next/link';
import s from "./index.module.css"    

 export   const ImageBoards = () => {


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
    
    
    

    return (

<div className={s.imageboardsMainWr}>
                
        <div className={s.imageboardsWr}>

              <Board title={"Hakkımızdaki Yorumlar"} bgimage={"ib_1.jpg"} />                                                                                                       

              <Board title={"Videolar"} bgimage={"ib_2.jpg"}/>       
              
        </div>
                                                                                   
      </div>
    )
  }
  
  
  

  
  
  const Board = (props) => {

    let {title, bgimage} = props ?? {};

    return (
      <div className={s.imageboardWr} style={{backgroundImage:`url(/themes/vitalis/${bgimage})`}}> 
                  
                  <div className={s.imageboardTitle}> <Link href={"#"}>{title}</Link> </div>
                  {/* <Image src={"/themes/vitalis/product1.jpg"} width={300} height={225}/>                                  */}                                    
              </div>
    )
  }
  