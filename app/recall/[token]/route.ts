import { type NextRequest } from 'next/server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'
import { callServiceApi } from '@/lib/api'

export  async function GET(
  request: NextRequest, 
  { params }: { params: { token: string}}
  ) {

  const goto = request.nextUrl.searchParams.get("goto")
  const cookieStore = await cookies()
  const paramStore = await params
  const {token} = paramStore


  if(!token || token.length < 32){
    // return null
  }

  const data = await callServiceApi("token", {token})

  console.log({data})

  if(data){
    cookieStore.set("VISITOR_TOKEN", token)
    return goto && goto.charAt(0)==="/"? redirect(goto): redirect("/profile")
  }else{
    cookieStore.delete("VISITOR_TOKEN")
    redirect("/login")
  }



  }


  /*


  {
"data": {
"id": 217897,
"email": _________",
"token": "_____________",
"company_id": 0,
"event_id": 103,
"speaker_id": 0,
"group_id": 1,
"organizer_id": 1,
"parent_id": 0,
"important": 0,
"lang": "pl",
"confirmed": 1,
"createdon": "2024-01-25 21:44:35",
"scannedon": 0,
"unsubscribed": 0,
"fields": {
  "nip": "9241920439",
  "cname2": "Soy Fragrance",
  "position": "właściciel",
  "phone": "723440469",
  "lname": "Marciniak",
  "fname": "Wiktoria",
  "locale": "pl",
  "url": "https://targiehandlu.pl/?fbclid=IwAR2Aqfk2yld4062hUGneLUFZsnTe_AGz2RaVH1S2vEY9zwdSmXKQFe9PbUs"
},
"roles": [
  "visitor"
],
"purchases": [
  {
  "id": 226361,
  "paid": 1,
  "status": "ok",
  "status_source": "auto",
  "tickets": [
  {
  "id": 2678,
  "name": "Zwiedzanie 2024 / Wiosna",
  "names": {
  "pl": "Zwiedzanie 2024 / Wiosna",
  "en": "Zwiedzanie 2024 / Wiosna",
  "de": "Zwiedzanie 2024 / Wiosna"
  },
  "translation_asset_id": "visitor",
  "role": "visitor",
  "delayed": 0,
  "featured": 0
  }
]
}
],
"code": "mmmdne"
},
"goto": null,
"token": "0dda3ec7d1ba5efc312d4cce4d46c988f6e0f72a"
}

*/