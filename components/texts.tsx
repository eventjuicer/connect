"use client"

import { useTranslate } from "@/lib/contexts"

export function Title({label}){

    const translate = useTranslate()

    return (<h2 className="mb-3 text-2xl font-semibold">{translate(label)}</h2>)
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