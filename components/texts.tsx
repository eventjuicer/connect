"use client"

import { useTranslate } from "@/lib/contexts"
import NextLink from "next/link"


export function Title({label=""}: {
    label: string;
}){

    const translate = useTranslate()

    return (<h2 className="mb-3 text-2xl font-semibold">{translate(label)}</h2>)
}


export function Link({label="", href="/", className=""}: {
    label?:string; 
    href: string;
    className?: string;
}){
    const translate = useTranslate()

    return <NextLink href={href} className={className}>
        {translate(label)}
    </NextLink>
}

// --text-gradient: linear-gradient(180deg,#fff,#adadad);
// background: var(--text-gradient);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     font-weight: 800;
//     font-size: max(48px,min(5vw,76px));
//     line-height: 1;
//     letter-spacing: -.05em;
//     padding: 24px;
//     position: relative;