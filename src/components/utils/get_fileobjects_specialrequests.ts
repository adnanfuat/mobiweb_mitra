



// Dizi şeklinde gelen keyleri file satırları arasında arar ve geriye verir.

export const get_FileObjects_SpecialRequests =async  ({files}) => {    // Veri tabanından ilgili fileobjectsleri getirecek

    let fileobjects =   await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { //process.env.NEXT_PUBLIC_API_URL
        next:{revalidate:100},                                   
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
          query: FilesQuery_SpecialRequests,
          variables:{data:{specialrequests:files}} 
        })
      })
        .then((res) => res.json())
        .then((result) => { return result?.data?.filesquery_specialrequests; }) ?? [];    


        return fileobjects 



}





const FilesQuery_SpecialRequests =
`  query FilesQuery_SpecialRequests ($data:JSON )  {

                        filesquery_specialrequests (data:$data) {
                                                                        id
                                                                        title_tr
                                                                        bigdata
                                                                        slug_tr
                                                                        title_tr
                                                                        active
                                                                        user
                                                                        o_key_1
                                                                    }

  }`
;