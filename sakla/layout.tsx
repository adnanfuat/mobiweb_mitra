 import s from "./layout.module.css"

export default async function RootLayout({
  children,  
  params: {locale}
}: {
  children: React.ReactNode,
  params:any
}) {

    

      
  return (    
        <div className={s.shell}>

              {children}

        </div>    
  )
}



