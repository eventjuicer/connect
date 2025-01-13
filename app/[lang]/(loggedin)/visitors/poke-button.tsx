'use client'

import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import { createPoke } from "./actions"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function PokeButton({ visitorId }: { visitorId: number }) {
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()

  const handlePoke = async () => {
    setIsPending(true)
    try {
      const result = await createPoke(visitorId)
      if (result.success) {
        toast({
          title: "Success",
          description: "User has been poked!",
        })
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to poke user",
        variant: "destructive",
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="gap-2"
      onClick={handlePoke}
      disabled={isPending}
    >
      <Bell className="h-4 w-4" />
      {isPending ? "Poking..." : "Poke"}
    </Button>
  )
} 