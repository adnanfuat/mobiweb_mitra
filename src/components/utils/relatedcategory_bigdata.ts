

const relatedCategory_Bigdata =  ({lastslugitem, categories}) => {

  
                      let relatedcategory = categories?.find(c=>c?.slug_tr==lastslugitem);
  
                      return relatedcategory                 
    

}


export  default relatedCategory_Bigdata 



