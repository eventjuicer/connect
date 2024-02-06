"use client"

import {BigTextButton} from "@/components/nav/buttons";
import { usePathname } from "next/navigation";
import { getSettings } from "@/lib/settings";
import {Link} from "@/components/texts"
import clsx from "clsx";
export function NavbarMenu(){

    const path = usePathname()

    const items = getSettings("topmenu")

    return (

        <div className="mb-2 flex text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-5">

        {items.map(item => (
            <Link 
            key={item.href}
            href={item.href}
            label={item.label}
            secondaryLabel={item.secondaryLabel}
            className={clsx(
              "text-gray-700 dark:text-gray-200",
              {
                "border-b-gray-300": item.href == path
              }  
            )}
            >asd
            </Link>
        ))}
        

        </div>
    )

}


export function DashboardMenu(){

    const path = usePathname()

    const items = getSettings("topmenu")

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

