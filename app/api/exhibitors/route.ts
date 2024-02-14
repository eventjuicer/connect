
import { exhibitors } from "@/lib/datasources"
import { NextRequest } from 'next/server'
import { handleParams } from "@/app/api/helpers";

export async function GET( request: NextRequest) {


    const res = await exhibitors();

    const filtered = handleParams(request.nextUrl.searchParams, res)

    return Response.json(filtered || [])
  }