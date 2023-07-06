
import { useSession} from "next-auth/react"




export const useIsLogged =   () => {

    // const session = await getServerSession(authOptions);
    
    // const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL);
    const { data: session, status } = useSession()
    let user= session?.user;
    let name= session?.user?.name;
    let email= session?.user?.email;
    
    let permissions= session?.user?.userinfo?.bigdata?.permissions;    
    let accessToken= session?.user?.accessToken;
    let companies= session?.user?.companies;

    //  console.log("userrrrr:::. ", companies)

        
    return {name, permissions, accessToken, user, companies, session}

}
