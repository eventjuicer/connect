
import { NextRequest } from 'next/server'
import { handleParams } from "@/app/api/helpers"
import { callPublicApi } from "@/lib/api";

export async function GET( request: NextRequest, {params}:{params: {resource: string}}) {

    const res = await callPublicApi(params.resource);

    const filtered = handleParams(request.nextUrl.searchParams, res)

    return Response.json(filtered || [])
  
}