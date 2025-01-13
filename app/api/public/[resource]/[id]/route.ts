import { NextRequest } from 'next/server'
import { callPublicApi } from "@/lib/api";

export async function GET( request: NextRequest, {params}:{params: {resource: string, id: string}}) {

    const paramsStore = await params

    const res = await callPublicApi(`${paramsStore.resource}/${paramsStore.id}`);

    return Response.json(res)
  
}