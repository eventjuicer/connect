import { NextRequest } from 'next/server'
import { callPublicApi } from "@/lib/api";

export async function GET( request: NextRequest, {params}:{params: {resource: string, id: string}}) {

    const res = await callPublicApi(`${params.resource}/${params.id}`);

    return Response.json(res)
  
}