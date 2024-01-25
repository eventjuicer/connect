import { NextResponse } from 'next/server';
import { sendEmailWithToken } from '@/app/actions';

export async function GET() {

    const result = await sendEmailWithToken("adam@zygadlewicz.com")
    
    return NextResponse.json(result)
  }