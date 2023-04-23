"use client"
import { SessionProvider } from "next-auth/react" 
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { QueryClientProvider, QueryClient } from "react-query";

import {siteProxy} from "@/constants/siteproxy"

export default function LayoutInner({
  children,
  session
}: {
  children: React.ReactNode,  
}) {


  const queryClient = new QueryClient();

  return (
          <SessionProvider session={session} refetchInterval={5 * 60}>
                    <QueryClientProvider client={queryClient}>       
                                              <div  onMouseOver={()=>{ siteProxy.interaction=true}} onTouchStart={()=>{ siteProxy.interaction=true}}>{children}</div>
                    </QueryClientProvider>
          </SessionProvider>
        )
}
