export default  async function handler(req, res) {
  
  const query = req?.query;
  let {target }  = query ?? {}    

  // console.log("sadsadsad", process.env.NEXT_PUBLIC_API_URL)

  let mainres=await fetch("https://octopus-app-oynbs.ondigitalocean.app/api/graphql", { //process.env.NEXT_PUBLIC_API_URL    // https://octopus-app-oynbs.ondigitalocean.app/api/graphql                                  
    // next:{revalidate:10},                                   
    method: "POST",
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({
      query: SwissArmyKnifeMutation,
      variables:{data:{target, repo:process.env.REPO, type:"change_repotarget"}}  //cached_domain ?? 
    })
  })
    .then(async (res) =>{  
          return res?.json()
  })
    .then(async (result) =>   { 
      
              console.log("sadsdsad", process.env.NEXT_PUBLIC_API_URL)
            let resData = result?.data?.swissarmyknifemutation
            
            return resData ; 
      
      });

  
      
      //return mainres
      
      // res.redirect("http://localhost:3004")   
      
      
      
      console.log("repoo sonuç", mainres);
  
  res.status(200).json({mainres });
}




const SwissArmyKnifeMutation = 
`
 mutation SwissArmyKnifeMutation (  $data: JSON  ) {
   swissarmyknifemutation ( data:$data ) 
       {
         title_tr         
         o_key_1 
       }
 }
`;
