"use server"

import * as z from "zod"
import { callServiceApi } from '@/lib/api'
import { sendEmailWithToken } from "@/app/actions"


const schema = z.object({
    email: z.string().email()
})

export async function handleTokenReminder(prevState: any, formData: FormData){

    const validatedFields = schema.safeParse({
      email: formData.get('email'),
      })
    
    //Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
    }
  
    const user = await callServiceApi("login", {email: formData.get("email")})
  
    if(user){
      await sendEmailWithToken(formData.get("email") as string)
    }
  
  console.log(user)
  }