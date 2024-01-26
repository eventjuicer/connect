"use client"

import { useTranslate } from "@/lib/contexts"

export function Title({label}){

    const translate = useTranslate()

    return (<h2 className={`mb-3 text-2xl font-semibold`}>{translate(label)}</h2>)
}