"use client"

import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from './buttons'
import { useTranslate } from '@/lib/contexts'

// type  = {
//     label : string;
//     secondaryLabel: string;
//     children: React.ReactNode;
//     footer: React.ReactNode | null;
//   }


export function AlertWithButton({label, secondaryLabel, icon, onClick, buttonLabel}){

    const translate = useTranslate()

    return (
        <Alert>
        {icon? React.cloneElement(icon, {className: ""}): null}
        <div className="pl-10 md:grid grid-cols-4 gap-2 align-middle content-center">
        <div className="col-span-3">
        <AlertTitle>{translate(label)}</AlertTitle>
        <AlertDescription>{translate(secondaryLabel)}</AlertDescription>
        </div>
        <div className="mt-4"><Button variant="default" size="default" onClick={onClick}>{translate(buttonLabel)}</Button></div>
        </div>
        </Alert>
)

}

