// Bigdatalı contentlerin bigdatası string olarak tutuluyor... prisma ile çektikten sonra parse edilmesi gerekiyor.. parse edip geri veriyor bu fonksiyon


export const parseContentFunc =  ({result}) => {
    
    let bigdata=   result?.bigdata ;
    let o_key_1=   result?.o_key_1 ;
    let newresult = {};

        try {
            if (bigdata) {
                  bigdata =  JSON.parse(bigdata);

                  if (o_key_1) { // o_key_1 varsa onu da bigdatayla enjekte et
                        o_key_1 =  JSON.parse(o_key_1);
                        newresult={ ...result, bigdata, o_key_1 };
                  } else {// o_key_1 yoksa yalnızca bigdatayı enjekte et
                    newresult={ ...result, bigdata };
                  }
            } else {
                  if (o_key_1) { // bigdata yoksa, yalnızca o_key_1'i enjekte et
                        o_key_1 =  JSON.parse(o_key_1);
                        newresult={ ...result, o_key_1 };
                  } else { // her ikiside yoksa olduğu gibi kalsın.
                    newresult=result; //newresult={ ...result};
                  }
            } 
        } catch (error) {
            console.error("parsecontentfunc error ____ ", bigdata)            
         } 
        
         return newresult

   
        

}









