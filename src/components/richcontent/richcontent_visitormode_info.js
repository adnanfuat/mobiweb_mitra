import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import styles from "./advert_visitormode_info.module.css";

export const Advert_VisitorMode_Info = ({props}) => {
  const {advert} = props ?? {};
  let {bigdata} = advert ?? {};

  let advert_properties = bigdata?.history?.[0]?.info?.properties; // İlana atanmış özellikler
  let advert_category = advert?.getallparents?.map(item=>item?.slug_tr); 

  // console.log("advert_propertiesadvert_properties: ", advert_properties);

  return (
    <div className={styles.grid_container}>
      {
        advert_properties?.map((item, index)=>{
          //  console.log("xxx_ top ",item)
          
          //  Açıklama!!
          //  Araç kategorisine yanlışlıkla bir ilan eklendi diyelim. Üstüne, emlak ilanına Kilometre: 10000 girildi. Bir emlak ilanında kilometre olur mu ?
          //  Daha sonra bu ilanın kategorisi "emlak" olarak değiştirildi. AMa kilometre kaldı ilanın özelliklerinde. Listelerken bu da gözükecek?
          //  İşte bu alakasız özellik gözükmesin diye bu ilan özelliği, ilanın ait olduğu kategoriler mi ait diye sorguluyorum

          let thisPropertyIsBelongAnyThisAdvertCategory=advert_category?.find(category=>category==item?.categoryofproperty) ; 
          //  console.log("advert_properties:: ",item?.key, advert_category, item)

          if (thisPropertyIsBelongAnyThisAdvertCategory) // İlana ait bu özellik, ilanın bağlı olduğu kategorilerden birine ait mi ?
          
              return  (
                <div key={index} className={styles.itemWr}> 
                  <div className={styles.itemRowWr}> 
                      <div className={styles.item} > 
                            <div className={styles.inline_left}>{item?.key_label_tr}</div>
                            <div className={styles.inline_right}> {item.value_label_tr}</div>
                      </div>
                      
                    {item?.input_type== "multicheckbox"  && <div  className={styles.optionsWr}>
                      
                      {item?.options?.map(option=>{
                          // console.log('xxxxxxxxxxxxxx', x, item)
                          let found=item?.value?.find(f=>f?.key==option?.key)
                          return <div className={styles.option} style={{color: found ? "black" : "gray" }}>
                                        <div>{found ? <CheckCircleTwoToneIcon/>: <CheckCircleOutlineIcon/>} </div>
                                        <div> {option?.label?.tr} </div>
                                  </div>

                      })}

                      </div>
                    }                 
                  </div>
                </div>
              ) 

        })
      }
    </div>
  )
}

