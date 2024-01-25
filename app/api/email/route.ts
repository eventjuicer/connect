
import { sendEmailWithToken } from '@/app/actions';

export const dynamic = "force-dynamic";

export async function GET() {

  //  const res = await request.json()

    const result = await sendEmailWithToken("adam@zygadlewicz.com")
    
    return Response.json(result)
  }


/*
const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')

  */