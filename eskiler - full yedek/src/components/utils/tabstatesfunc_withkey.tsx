
/*     
    Bu hook şu işe yarar:
    Firmanın galerisi gibi kalabalık veri içeren yapıları "tab"lar içine alıyoruz... Ama bu tabların kapalı açık durumlarını takip etmek gerekiyor
    Döngü içinde state tutmamız uygun olmuyor... Yer yer "too many renders" hatalarına sokuyor... 
    O nedenle döngü dışında tutuyoruz. Ve gereksiz setstate'lere girmesin diye de diziyi önce baş alıyor, ve o sayfada buton tıklandıysa diziye bu değeri ekliyoruz..
    Çağıdığımız yerde bir state tanımlamamız gerekiyor..
    Aşağıda bu işlemleri yapıyoruz.
    Çağırılacak sayfalarda kullanımını en aşapıda örnekledim..
*/


export const tabStatesFunc_WithKey = ({key, set_tabstates}) => {
  

    // tabstates başlangıçta boş geliyor..  Tıklandıkça dolduruyoruz..
     
                                  set_tabstates(old=>{  // state içinde gezin    
                                                              if (old.find(item=>item?.key==key)) {   // eğer bu keye ait kayıt varsa,
                                                                                                         old= old?.map(x=>{ if (x.key==key) { x={...x, state:!x?.state}} return x}) ;  // tara ve tersleyerek değiştir.
                                                                                                      }
                                                                                                      else
                                                                                                      {
                                                                                                          old=[...old,{key, state:true}]; // yoksa ekle
                                                                                                      }
                                                                                                      return old  // geri döndürdüğünde tekrar state set edişmiş olacak                                                                                                    
                                                    })

    // return ({tabstates, handle_tabstates})
}




// Hook'un çağırımı...
// const [tabstates, set_tabstates] = useState([]); // slayt tabların açık kapalı durumu...
        
// Kullanımı 

            // (item, index)=>
            //             {   
            //                 return(
            //                         <div>
            //                             <Button props={{onClick:()=>{tabStatesFunc({index, set_tabstates})}, title:`Ekle ${index}`, icon:"IoArrowDownCircleOutline"}}/> { /* Aç kapa butonu */}
                                        
            //                             {(tabstates?.find(s=>s.index==index)?.state==true) && <div> Açıp kapatılacak div </div>} {/* Açılıp kapatılacak div */}
                                        
            //                         </div>
            //                     )
                        
            //             }       

                                                                    