
// import {  useQueryClient } from "react-query";

const userMessages = async ({user}) => {
  
  // console.log("userMessages userMessages","web_usermessages")

  // const queryClient = useQueryClient()  
  
    let resdata =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: `Bearer ${user?.accessToken}`},
        body: JSON.stringify({
          query: SwissArmyKnifeQuery_Raw,
          variables:{data:{type:"web_usermessages", parent_key: process.env.DOMAIN  }} 
        })
      })
        .then(async (res) =>{  
              return res?.json()
       })
        .then(async (result) =>   { 
          
            //queryClient.invalidateQueries(); // hook hatası veriyor
          
          return  result?.data?.swissarmyknifequery?.o_key_1;  });

        return resdata
}


export  default userMessages 


const SwissArmyKnifeQuery_Raw = 
`  query SwissArmyKnifeQuery ($data:JSON)  {
    swissarmyknifequery (data:$data) {
      id
      title_tr
      o_key_1
      i_key_1
      createdat
    }
  }`
;
