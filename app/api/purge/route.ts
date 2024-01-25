import { NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'
 
export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path')
  if(!path){
    return Response.json({ error: "missing ?path=!"})
  }
  revalidateTag(path)
  return Response.json({ revalidated: true, now: Date.now() })
}