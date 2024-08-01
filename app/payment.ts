"use server"

import createMollieClient from '@mollie/api-client';
import { redirect } from 'next/navigation';

const mollieClient = createMollieClient({ apiKey: 'test_rjRWsEFRMeUu7C2T8ytJsrBdB9DMsJ' });


export async function getPayment(){

    const payment = await mollieClient.payments.create({
        amount: {
          value:    '10.00',
          currency: 'EUR'
        },
        description: 'My first API payment',
        redirectUrl: 'https://yourwebshop.example.org/order/123456',
        webhookUrl:  'https://yourwebshop.example.org/webhook'
      });

      console.log(payment)
      
      // redirect(payment.getCheckoutUrl())

}


