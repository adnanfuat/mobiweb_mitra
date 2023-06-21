import Image from 'next/image'
import s from "./index.module.css"    

 export   const Zigzag = () => {

  let description1 = `Antalyan'nın Gazipaşa İlçesi'nde emlak ve gayrimenkul danışmanlığı
  ofisi olarak hizmet veren Mitra Emlak, alanında uzman ekibi ile
  aradığınız her çeşit gayrimenkul sizlere yardımcı oluyor. Emlak
  piyasasının oldukça hareketli olduğu Antalya'da satmak ya da kiralamak
  istediğiniz herhangi bir gayrimenkul için Mitra Emlak'tan her zaman
  destek alabilirsiniz. Antalya'da aradığınız satılık daire, kiralık ev,
  kiralık dükkan, kiralık ofis, satılık arsa ya da daha fazlasına
  ulaşmak için Mitra Emlak sizleri bekliyor.`

  let description2 = `MİTRA EMLAK Türkiye'nin en güzel şehirlerinden biri olan ANTALYA'nın GAZİPAŞA İlçesi'nde emlak ve gayrimenkul alanında uzman personelleri ile hizmet veriyor. Bir gayrimenkul ofisinden beklediğiniz her şey Antalya'da Mitra'da sizi bekliyor.
  Kiralamak istediğiniz eviniz, iş yeriniz mi var? Hemen Mitra'ya gelin, siz hiçbir şey ile uğraşmayın biz gayrimenkulünüzü kiralalayalım. Ev mi satın almak istiyorsunuz? Mitra Emlak'ta yer alan satılık ev ilanlarını inceleyip hemen Mitra Emlak'a ulaşıni. İstediğiniz özelliklerdeki satılık gayrimenkuller de Mitra'da sizi bekliyor.`

  let description3 = `Antalya Gazipaşa'da profesyonel emlak danışmanlarının üst düzey bir emlak hizmeti verdiği Mitra Emlak emlak ve gayrimenkul alanında ihtiyacınız olduğunda bir tık mesafede!
  Satılık evler, satılık yazlıklar, kiralık iş yerleri, kiralık evler... Sizin ihtiyacınız ne? Aradığınız tarzda ya da aradığınız fiyatlarda bir gayrimenkul mutlaka Mitra Emlak'ta var.  
  Uzman gayrimenkul satış danışmanlarından hizmet almak isteyenler hemen Mitra'ya!  
  Peki nedir gayrimenkul danışmanı?  
  Gayrimenkul satın almayı planlayan müşterilere daire, arsa, ofis gibi taşınmaz mülklerden oluşan portföyündeki seçenekleri tanıtan, müşterileri onların beklentilerine en uygun gayrimenkul konusunda yönlendiren kişi gayrimenkul satış danışmanı olarak tanımlanır.`

    return (

<div className={s.zigzagWr}>

        <div className={s.zigzagInnerWr}>


              <Block imageposition="left" image="/themes/mitra/zigzag1.jpg" title="MİTRA EMLAK HAKKINDA" description={description1}/>               
              <Block imageposition="right" image="/themes/mitra/zigzag2.jpg" title={`ANTALYA'DA EMLAKÇI MI ARIYORSUNUZ?`} description={description2}/>               
              <Block imageposition="left" image="/themes/mitra/zigzag3.jpg" title="GAZİPAŞA GAYRİMENKUL OFİSİ" description={description3}/>               
              
              
        </div>
                

      </div>
    )
  }
  
  
  


  
  
  const Block = (props) => {

    let {imageposition, image, title, description} = props ?? {};
    
    return (
      <div className={s.zigzagBlock}>
        
        {imageposition=="left" && <div className={s.zigzagImage}> <Image src={image} width={504} height={318}/></div>}

        <div className={s.zigzagInnerBlock}>

            <div className={s.zigzagTitle}>
              {title}
              <div className={s.zigzagTitleHr}>
                <div className={s.zigzagTitleHrBold}> </div>
              </div>
            </div>

            <div className={s.zigzagDescription}>
              {description}
            </div>

        </div>
    
        {imageposition=="right" && <div className={s.zigzagImage}> <Image src={image} width={504} height={318}/></div>}


      </div>
    );
  }
  