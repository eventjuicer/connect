"use server"

import * as z from "zod"
import { callServiceApi } from '@/lib/api'

export type stateType = {
  success: boolean | undefined;
  error: string | undefined;
};


const schema = z.object({
    email: z.string().email()
})

export async function handleTokenReminder(prevState: stateType, formData: FormData){

    const email = formData.get('email')

    const validatedFields = schema.safeParse({
      email
      })
    
    //Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
          success: false,
          msg: validatedFields.error.flatten().fieldErrors,
        }
    }

    const user = await callServiceApi("login", {email})
  
  
  

  }