import Head from "next/head";


interface IProps { advert:any }


export const Advert_VisitorMode_MetaData  =  (props:IProps) => {

  let { advert } = props ?? {};
  
  let description=advert?.bigdata?.history?.[0]?.lang?.tr?.decription;
  let title=advert?.title_tr;
  
  description=description?.replace(/["']+/g, ' ');   // Tırnaklar sıkıntı oluşturuyorum. Çözümü kaldrımakta buldum
  title=title?.replace(/["']+/g, ' ');    

  let img =  process.env.NEXT_PUBLIC_IMGSOURCE+"/"+advert?.img_tr;

  let parents = advert?.bigdata?.history[0]?.info?.parents
            
      parents=parents?.filter((a, i)=> i>1);
      parents=parents?.map((a)=> a?.title_tr) ?? [];      
      parents=parents.join(" > ");

  // console.log("advert::::", advert?.bigdata?.history[0]?.info?.parents);

  return (
            <div> 

                  <Head> 
                        <title>{parents} {title}</title>    


                        <meta name="description" content={description ? description : title } />

                            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: `
                                { 
                                "@context": "https://schema.org", 
                                "@type": "NewsArticle",
                                "headline": "${parents} ${title}",
                                "alternativeHeadline": "${parents} ${title}",
                                "image": "${img}" ,
                                "award": "xxxxx",
                                "editor": "John Doe", 
                                "genre":  "${title}", 
                                "keywords":  "${title}", 
                                "wordcount":  "${title?.length}",
                                "publisher": {
                                  "@type": "Organization",
                                  "name": "PROWEB"
                                },
                                "url":  "${`${process.env.NEXT_PUBLIC_API_URL}/ad/${advert?.slug_tr}/${description}`}",
                                "datePublished": "${advert?.createdat}",
                                "dateCreated":  "${advert?.createdat}",
                                "dateModified":  "${advert?.createdat}",
                                "description": "${description ?? title}",
                                "articleBody": "${description ?? title}",
                                  "author": {
                                  "@type": "Person",
                                  "name": "Steve",
                                  "url":  "${`${process.env.NEXT_PUBLIC_API_URL}/ad/${advert?.slug_tr}/${advert?.id}`}",
                                }
                                }
                            `}}>
                            </script>
                                
                        <meta property="og:type" content="website" />
                        <meta name="og_site_name" property="og:site_name" content="sakaryarehberim.com"/>
                        <meta name="og_url" property="og:url" content={`${process.env.NEXT_PUBLIC_URL}/cn/${advert?.slug_tr}`}/>
                        <meta name="og_title" property="og:title" content={`${parents} ${title}`}/>
                        <meta name="og_description" property="og:description" content={description ?  description: title}/>
                        <meta name="og_image" property="og:image" content={img}/>
                        {/* <meta name="og_image2" property="og:image" content={resimler[0]}/> */}
                        {/* Niye 2 tane koyulmuş önceden anlayamadım... */}
                        <meta name="twitter:title" content={`${parents} ${title}`}/>
                        <meta name="twitter:description" content={description}/>
                        <meta name="twitter:image" content={img}/>
                        <meta name="twitter:card" content="summary_large_image"/>
                        <meta property="og:image:width" content="900"/>
                        <meta property="og:image:height" content="475"/>


                  </Head>
                  
            </div>
  )
}






