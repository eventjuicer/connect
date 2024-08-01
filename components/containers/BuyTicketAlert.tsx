
import * as React from "react"
import { Ticket } from "lucide-react"
import { AlertWithButton } from "../alerts"


export function BuyTicketAlert(){


    const handleClick = React.useCallback(() => {
    },[])
        
    return <AlertWithButton icon={<Ticket />} onClick={handleClick} buttonLabel="buy now" />

}