"use client"

import * as React from "react"
import { Ticket } from "lucide-react"
import { AlertWithButton } from "../alerts"
import { getRedirectUrlForPayment } from "@/app/actions"

export  function BuyTicketAlert({url}:{url: string}){

        
    return <AlertWithButton icon={<Ticket />} href={url} buttonLabel="buy now" />

}