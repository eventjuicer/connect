"use client"

import { getPayment } from "../payment";
import { Button } from "@/components/ui/button";
import { BuyTicketAlert } from "@/components/containers/BuyTicketAlert";
export default function  Home() {

  const getPaymentM = () => getPayment()

  return (



      
  
      <div className="h-20">
     
      
      <BuyTicketAlert />


      </div>
     



  );
}
