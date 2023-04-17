import s from "./layout.module.css"


export default async function RootLayout({
  children,  
  params: {locale}
}: {
  children: React.ReactNode
}) {

    

      
  return (    
        <div className={s.dddddddddddddddddddd}>
              {children}
        </div>    
  )
}



