"use client"
import { QueryClientProvider, QueryClient } from "react-query";

import dynamic from "next/dynamic";

const Dynamic_Login = dynamic(() => import("./login").then(comp=>comp.Login), { loading: () => <div>Yükleniyor</div> });

export const LoginIntro = (props) => {

  let { dictionary} = props ?? {};
  // let {session, dictionary} = props ?? {};

  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>           
            <Dynamic_Login dictionary={dictionary}/>
      </QueryClientProvider>    
    </div>
  )
}
