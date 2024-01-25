import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  type StdCardType = {
    label : string;
    secondaryLabel: string;
    children: React.ReactNode;
    footer: React.ReactNode | null;
  }

  export function StdCard({
    children,
    footer=null,
    label="",
    secondaryLabel=""
}: StdCardType){

    return (
        <Card className='lg:min-w-500'>
        <CardHeader>
        {label? <CardTitle>{label}</CardTitle>: null}
        {secondaryLabel? <CardDescription>{secondaryLabel}</CardDescription>: null }
        </CardHeader>
        <CardContent>
        {children}
        </CardContent>
        {footer? (<CardFooter>
        {footer}
        </CardFooter>): null}
        </Card>
    )
  }