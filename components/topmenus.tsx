"use client"

import {BigTextButton} from "@/components/buttons";
import { usePathname } from "next/navigation";
import { useSettings } from "@/lib/contexts";


export function TopMenu(){

    const path = usePathname()
    const items = useSettings("topmenu", [])


    return (

        <div className="mb-2 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-5">

        {items.map(item => (
            <BigTextButton 
            key={item.href}
            href={item.href}
            label={item.label}
            secondaryLabel={item.secondaryLabel}
            className={item.href == path? "border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30": ""}
            />
        ))}
        

        </div>
    )

}