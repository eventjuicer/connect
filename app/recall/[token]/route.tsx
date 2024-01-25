
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'


export const dynamicParams = true


export async function GET(
  request: Request, 
  { params }: { params: { token: string}}
  ) {

  const {token} = params

    const res = await fetch(`${process.env.TRANSLATIONS_URL}`, {
    
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })

    if(res.ok){
      cookies().set("VISITOR_TOKEN", token)
    }


    const data = await res.json()
   
    redirect("/profile")

    return Response.json(data)
  }