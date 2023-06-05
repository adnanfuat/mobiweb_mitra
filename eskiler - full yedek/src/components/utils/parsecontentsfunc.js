
// Bigdatalı contentlerin bigdatası string olarak tutuluyor... prisma ile çektikten sonra parse edilmesi gerekiyor.. parse edip geri veriyor bu fonksiyon


export const parseContentsFunc =  ({result, ctx}) => {

    if (!result ||  !result?.length>0)  {
            result =[];  // bozuk gelme durumlarında bir düzeltme yapalım
    }

    let parsed=[];

    for  (const item of result )                                 
    {
    
   
            let bigdata= item?.bigdata ;
            let o_key_1= item?.o_key_1 ;
        
                try {
                    if (bigdata) {
                          bigdata =  JSON.parse(bigdata);

                          if (o_key_1) { // o_key_1 varsa onu da bigdatayla enjekte et
                                o_key_1 =  JSON.parse(o_key_1);
                                parsed = [...parsed, { ...item, bigdata, o_key_1 }];
                          } else {// o_key_1 yoksa yalnızca bigdatayı enjekte et
                                parsed = [...parsed, { ...item, bigdata }];
                          }
                    } else {
                          if (o_key_1) { // bigdata yoksa, yalnızca o_key_1'i enjekte et
                                o_key_1 =  JSON.parse(o_key_1);
                                parsed = [...parsed, { ...item, o_key_1 }];
                          } else { // her ikiside yoksa olduğu gibi kalsın.
                                parsed = [...parsed, item];
                          }
                    }

                    
                        
               
                    

                } catch (error) {
                   console.log("Parse Error !!!!!!!!!!!!! ", bigdata)            
                }
        
        
                    
    
    }



    
  
    return parsed
}
    