"use client"

import { useActionState } from "react"
import { Input } from "@/components/ui/input"
import { handleTokenReminder } from "./action"
import { FormButton } from "@/components/submit"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function ProfileForm() {
    
  const [state, formAction] = useActionState(handleTokenReminder, {})

  return (
    
    <form action={formAction} className="space-y-8">
    <Label htmlFor="email" />
    <Input name="email" id="email" required />
    {state?.msg && <p aria-live="polite" className={
      cn(
      "px-3 py-2 text-sm border rounded-sm",
        {
          "border-red-400 text-red-400": !state.success,
          "border-green-400 text-green-400": state.success
        }
      )
    }>{state?.msg}</p>}
    <FormButton />
    </form>
   
  )
}
