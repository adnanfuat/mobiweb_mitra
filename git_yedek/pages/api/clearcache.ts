import { cache } from "@/utils/cache";
// import { redirect } from 'next/navigation';
// import { NextResponse } from 'next/server';
 
// export async function GET(req: Request, res:Response) {
                        
//             // const {searchParams} = new URL(req.url);            
//             // const locale = searchParams.get('locale');                          
//             cache.flushAll();
//             console.log("tamamdır bu iş...")
            
//    return NextResponse.json({ locale:"sa" });
// }



export default function handler(req, res) {
  let deleteData = cache.del("webdata");
  console.log("temizleme tamam", deleteData)
  cache.flushAll();
  res.status(200).json({ name: 'John Doe' });
}