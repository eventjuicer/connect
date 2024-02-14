"use server"

import * as z from "zod"
import { callServiceApi } from '@/lib/api'
import { sendEmailWithToken } from "@/app/actions"


const schema = z.object({
    email: z.string().email()
})

export async function handleTokenReminder(prevState: any, formData: FormData){

    const email = formData.get('email')

    const validatedFields = schema.safeParse({
      email
      })
    
    //Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
    }
  
    const user = await callServiceApi("login", {email})
  
    if(user){
      await sendEmailWithToken(email as string)
    }
  
  console.log(user)
  }