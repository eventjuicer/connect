import { NextResponse, type NextRequest  } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url)

    console.log(searchParams)

    const res = await fetch(`${process.env.TRANSLATIONS_URL}`, {
    
      next: { 
        tags: ["i18n"],
        revalidate: 60
       }, // Revalidate every 60 seconds
    })
    const data = await res.json()

   
    return NextResponse.json(data)
  }