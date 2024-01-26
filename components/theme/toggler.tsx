"use client"
 
import * as React from "react"
import { useTheme } from "next-themes"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

import {capitalizeFirstLetter} from '@/lib/text'

function ModeToggle({label}: {label: string}) {
  const { setTheme } = useTheme()
 
  return (
    <DropdownMenuItem onClick={() => setTheme(label)}>
          {capitalizeFirstLetter(label)}
    </DropdownMenuItem>
  )
}

export default ModeToggle