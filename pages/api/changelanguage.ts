
// res.status(200).json({ give: "create-notifymutation_categoriesinitialize tamam" })

export default async function handler(req, res) {

    const query = req?.query;
    let {locale}  = query ?? {};    
    // console.log("slugggggggggggg", locale);

  try {                              
            // return res.status(200).json({ revalidated: true, articlebuild:"articlebuild", slug });
            return res.redirect(`/${locale}`);

  } catch (err) {    
    console.log("Article revalidate error::::", err)    
  }
}




