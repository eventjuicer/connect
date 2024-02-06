"use client"

import { useFormState } from "react-dom"
import { Input } from "@/components/ui/input"
import { handleTokenReminder } from "./action"
import { FormButton } from "@/components/submit"
import { Label } from "@/components/ui/label"

const initialState = {
  message: '',
}


export function ProfileForm() {
    
  const [state, formAction] = useFormState(handleTokenReminder, initialState)

 
  return (
    <div className="grid gap-6">
   
      <form action={formAction} className="space-y-8">
        
      <Label htmlFor="email" />
      <Input name="email"   id="email" required />
 
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>

      <FormButton />
      </form>
   
    </div>
  )
}
