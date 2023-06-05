import { redirect } from 'next/navigation';


// res.status(200).json({ give: "create-notifymutation_categoriesinitialize tamam" })

// export default async function handler(req, res) {

//     const query = req?.query;
//     let {locale}  = query ?? {};    
//     // console.log("slugggggggggggg", locale);

//   try {                              
//             // return res.status(200).json({ revalidated: true, articlebuild:"articlebuild", slug });
//             return res.redirect(`/${locale}`);

//   } catch (err) {    
//     console.log("Article revalidate error::::", err)    
//   }
// }





import { NextResponse } from 'next/server';
 
export async function GET(req: Request, res:Response) {

            // const query = req?.query;
            // let {locale}  = query ?? {};    
            
            const {searchParams} = new URL(req.url);

            //  const { locale } = searchParams ?? {};

             const locale = searchParams.get('locale');

              
            
              redirect(`/${locale}`);



            // console.log("slugggggggggggg", locale);

  return NextResponse.json({ locale:"sa" });
}
