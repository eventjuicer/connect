"use server"

// import { getPayment } from "../payment";
import { Button } from "@/components/ui/button";
import { BuyTicketAlert } from "@/components/containers/BuyTicketAlert";
import { getRedirectUrlForPayment } from "../actions";
import { auth } from "@/auth"
export default async function  Home() {

  const session = await auth()

  const url = await getRedirectUrlForPayment("243636,243638")

  if (!session) return <div>Not authenticated</div>

  return (


      
  
      <div className="h-20">
     
      
    <div>
    <pre>{JSON.stringify(session, null, 2)}</pre>
  </div>

  
      <BuyTicketAlert url={url} />


      </div>
     



  );
}
