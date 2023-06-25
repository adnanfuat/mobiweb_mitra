
import CS_Shell from "@/components/cs";
import Cs_Initial_Func from "@/src/components/cs/cs_initial_func";
let bigbigparent_slug="galeri";    // Soldaki menüde hangi kategoriden itibaren aşağısnı göstereceğiz ?


export default function Index (props){ 
              
            props = {...props,  bigbigparent_slug } // Staticten gelenler ve modüle has olanlar...
          //   return (<div>{JSON.stringify(props)}</div>)
            return (<CS_Shell {...props}/>)
  
  }


             export async function getStaticProps(data) {

                  let {defaultLocale, locale, params} = data ?? {};                                                                     
                  let props = await Cs_Initial_Func({params, locale, bigbigparent_slug})                                    
                  return { props, revalidate: 20 };                                           
             }
             
             
                          
             export async function getStaticPaths({locales}) {
              // let  paths = await cacheSubsectorQuery_BuildList()    
              let paths=[{params:{slug:["asasa"]}}];           
              return { paths, fallback: 'blocking' }
                                                              }
    
    
    
    
    
    
    
    
    
    
    
    

                                                              
                                                              
                                                              
                                                 
                                                 
                                                 
                                                 
                                                 
                                                 
                                                 