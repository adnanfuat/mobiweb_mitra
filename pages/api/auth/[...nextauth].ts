
import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import prisma from "../../../src/db/prismadb";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { parseContentFunc } from '@/components/utils/parsecontentfunc';
import { parseContentsFunc } from '@/components/utils/parsecontentsfunc';


export const authOptions: NextAuthOptions = 
  {
  
    providers: [ GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET, }), ],
    
    callbacks:{
      
      async session({ session, token,user }) {
        
  
                            // Bu işlemleri burada değil, backendde yapmam lazım.. 
                            let tokenObj=await prisma.session.findFirst({where:{userId:user?.id}})        
                            let userinfo=await prisma.contents.findFirst({select:{bigdata:true, slug_tr:true}, where:{AND:[{type:"user-info"}, {slug_tr:user?.email}]}}); //devamlı bu verileri çekmesin diye cacheleme yapılabilir.. ya da backendde cachleme yapılabilir..                                                  
                            let smsverifications=await prisma.contents.findMany({select:{bigdata:true, slug_tr:true,parent_slug:true, title_tr:true}, where:{AND:[{type:"verification"},{bigparent_slug:"phone"}, {user:user?.email}]}}); //devamlı bu verileri çekmesin diye cacheleme yapılabilir.. ya da backendde cachleme yapılabilir..
                            let companies=await prisma.contents.findMany({select:{title_tr:true, slug_tr:true}, where:{AND:[{type:"company"}, {user:user?.email}]}}); //devamlı bu verileri çekmesin diye cacheleme yapılabilir.. ya da backendde cachleme yapılabilir..                
                            let contactmessages=await prisma.contents.findMany({select:{title_tr:true, slug_tr:true, bigdata:true}, where:{AND:[{type:"message"}, {bigparent_slug:"web"}, {parent_slug:"contact"}, {parent_key:"mitraemlak.com"}, {user:user?.email}]}}); //devamlı bu verileri çekmesin diye cacheleme yapılabilir.. ya da backendde cachleme yapılabilir..                
                            contactmessages=parseContentsFunc({result:contactmessages});      

                            //  console.log("smsverificationssmsverifications: ", smsverifications);
                                          userinfo=parseContentFunc({result:userinfo});                        
                                          session.user.accessToken = tokenObj?.sessionToken;
                                          session.user.userinfo=userinfo;        
                                          session.user.companies=companies;        
                                          session.user.smsverifications=smsverifications;      
                                          session.user.contactmessages=contactmessages;      
                                
  
                                 return Promise.resolve(session);
  
                                             }     
  },
  
  events:{
    async createUser({user}) {     
                                   let result=  await graphcms?.request(SwissArmyKnifeMutation,{data:{type:"initializenewuser", email:user?.email}});        
                             }
  },
  
                                                                 
  adapter: PrismaAdapter(prisma),
    
  //secret: "Fnss2P9BIr9XvOTq+jIiv2KzEIT+HYR37eV8+iBWa9o=", // "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
  debug:false,
  secret:process.env.NEXTAUTH_SECRET
  
  }


// console.log("authOptionsauthOptions", authOptions)

export default NextAuth(authOptions)