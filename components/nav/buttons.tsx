"use client"

import Link from "next/link"
import {useTranslate} from '@/lib/contexts'
import { cn } from "@/lib/utils"


type BigTextButtonProps = {
    label: string ,
    secondaryLabel: string
    href: string,
    className: string
}

export function BigTextButton({
    label, 
    secondaryLabel, 
    href="/",
    className=""
}: BigTextButtonProps): React.ReactNode{

    const translate = useTranslate()

    return (

        <Link href={href} className={
            cn(
                "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
                className)}
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
        {translate(label)}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
        </span>
        </h2>
        {secondaryLabel? <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
       {translate(secondaryLabel)}
        </p>: null}
        </Link>

    )
}