import { useQuery } from "react-query";

  
  export const useFormMessages = ({parent_slug}) => {
                
    const fetcher =async ()=>           
                        {                                                    

                            let dataarticle= await fetch(process.env.NEXT_PUBLIC_API_URL, {
                              method: "POST",
                              headers: { "Content-Type": "application/json", },
                              body: JSON.stringify({
                                query: MessagesQuery_Raw,
                                variables: { parent_slug },
                              }),
                            })                              
                              let datajson=await dataarticle.json()
                              let data = datajson?.data;                              

                              return data;


                        };    
    
    const {  data, error } = useQuery( ["messagesquery", parent_slug], () => fetcher(), {     
        refetchOnWindowFocus: true,            
      } );


      
      let messagesclient=data?.messagesquery;


      
    
    return messagesclient
  }
  



  
const CommentsQuery_Raw = 
`  query MessagesQuery ( $parent_slug: String)  {
    messagesquery (parent_slug:$parent_slug) {
      id
      active
      bigdata
      title_tr
      title_en
      title_fr
      title_ar      
      title_sa
      slug_tr
      slug_en
      slug_fr
      slug_ar
    }
  }`
;



