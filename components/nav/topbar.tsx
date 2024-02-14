"use server"

import ModeToggler from "@/components/theme"

import Link from "next/link"
import Image from "next/image"
import { NavbarMenu } from "@/components/nav/menus"

export async function TopBar(){



    return (


      <header className="sticky flex items-center top-0 z-50 w-full  h-20 border-b border-border/40 bg-background/80">

<div className="container px-10  flex justify-between items-center">
<Link href="/">
<Image src="/images/EBE_WH.png" priority width={100} height={30} alt="" className="dark:invert" />
</Link>


<NavbarMenu />

<ModeToggler />

</div>

</header>


     
    )
}


/**
 * 
 * 
 

  <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>



           <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

      
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
          
          >
            
           {image}
          </Link>
        </div>

       

      </div>



 */