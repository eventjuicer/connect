'use server'
 
import { revalidateTag } from 'next/cache'
import { cookies } from 'next/headers'
import { sendSparkPostEmail } from '@/lib/sparkpost'
import { redirect } from "next/navigation";
import { callServiceApi } from "@/lib/api";


export async function checkToken(){
  return await cookies().get("VISITOR_TOKEN")?.value;
}


export async function getUser(){

  const token = await checkToken();

  if(token){
    const data = await callServiceApi("token", {token})
    return data
  }
  return null;
}


export async function checkUser(){

   const user  = await getUser();

    if(!user){
      redirect("/login")
    }   

}



export  async function action() {
  revalidateTag('collection')
}




export async function handleLogin(sessionData) {
  const encryptedSessionData = encrypt(sessionData) // Encrypt your session data
  cookies().set('session', encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
  // Redirect or handle the response after setting the cookie
}


export async function getSessionData(req) {
  const encryptedSessionData = cookies().get('session')?.value
  return encryptedSessionData ? JSON.parse(decrypt(encryptedSessionData)) : null
}

export async function sendEmailWithToken(to: string){
  const result = await sendSparkPostEmail({
    to, 
    from: `${process.env.SPARKPOST_FROM_EMAIL}`, 
    subject: "dsa", 
    message: "asd"
  });

  return result
}