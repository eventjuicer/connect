"use client"

import {BigTextButton} from "@/components/nav/buttons";
import { usePathname } from "next/navigation";
import { getSettings } from "@/lib/settings";
import {Link} from "@/components/texts"
import { cn } from "@/lib/utils";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    // MenubarSeparator,
    // MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { Menu } from "lucide-react"
import NextLink from "next/link";


export function MobileMenu(){

    const items = getSettings("topmenu")
    const path = usePathname()

    return (
        <Menubar className="md:hidden">
        <MenubarMenu>
          <MenubarTrigger><Menu /></MenubarTrigger>
          <MenubarContent>

          {items.map(item => (

           
            <NextLink href={item.href} legacyBehavior passHref>
                 <MenubarItem key={item.href}>
                { item.label}
                    </MenubarItem> 
       
            </NextLink>

          ))}    
            
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
}



export function NavbarMenu(){

    const path = usePathname()

    const items = getSettings("topmenu")

    return (

        <div className="ml-10 hidden md:flex text-center gap-5 w-full">

       

        {items.map(item => (
            <Link 
            key={item.href}
            href={item.href}
            label={item.label}
            secondaryLabel={item.secondaryLabel}
            className={cn(
              "text-gray-700 dark:text-gray-200",
              {
                "border-b-gray-300 dark:border-b-gray-300":  path.includes(item.href)
              }  
            )}
            /> 
        ))}
        

        </div>
    )

}


// export function DashboardMenu(){

//     const path = usePathname()

//     const items = getSettings("topmenu")

//     return (

//         <div className="mb-2 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-5">

//         {items.map(item => (
//             <BigTextButton 
//             key={item.href}
//             href={item.href}
//             label={item.label}
//             secondaryLabel={item.secondaryLabel}
//             className={item.href == path? "border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30": ""}
//             />
//         ))}
        

//         </div>
//     )

// }

