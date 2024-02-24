"use server"

import * as z from "zod"
import { callServiceApi } from '@/lib/api'
import { sendEmailWithToken } from "@/app/actions"

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
  
    if(user){
      await sendEmailWithToken(email as string)
      return {
        success: true,
        msg: 'OK'
      }
    }else{
      return {
        success: false,
        msg: "bad user"
      }
    }
  

  }