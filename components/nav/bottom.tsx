"use client"

import * as React from "react"
import { 
   House,
   Clock,
   MessageCircle,
   Factory,
   Ellipsis
} from "lucide-react"
import { useRouter } from "next/navigation";
import { useModal } from "../modal";
import Link from "next/link"
import { cn } from "@/lib/utils"



function ListItem({
  href,
  hrefLang,
  className,
  title,
  children,
  ...props
}: {
  href: string;
  hrefLang?: string;
  className?: string;
  title: string;
  children: React.ReactNode;
}) {

    return (
        <Link href={href} className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    )
}


function NavigationMenuDemo() {

    return (
        <div>
        <ListItem href="/docs" title="Introduction">
        Re-usable components built using Radix UI and Tailwind CSS.
      </ListItem>
      <ListItem href="/docs/installation" title="Installation">
        How to install dependencies and structure your app.
      </ListItem>
      <ListItem href="/docs/primitives/typography" title="Typography">
        Styles for headings, paragraphs, lists...etc
      </ListItem>
      </div>
    )
    
}


function MobileBottomMenuItem({icon=null, href="/", secondary=null}){

    const {push} = useRouter();

    const {setLabel, setSecondaryLabel, setContent} = useModal(state=>({
        setLabel: state.setLabel,
        setSecondaryLabel: state.setSecondaryLabel,
        setContent: state.setContent
    }))

    const handleOnClick = () => {
        if(secondary){
            setLabel("more")
            setContent(secondary)
            return
        }
        push(href)
    }

    return ( <button onClick={handleOnClick} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-900 group">
      {React.cloneElement(icon, {className: "h-5 w-5 md:h-6 md:w-6"})}
        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">Home</span>
    </button>  
    )
}




export function MobileBottomMenu(){

    // const items = getSettings("bottomMenu")

    return (<div className="fixed bottom-0 left-0 z-50 w-full h-16 md:h-20 bg-white border-t border-gray-200 dark:bg-background dark:border-gray-700">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
  
        <MobileBottomMenuItem icon={<House />} />
        <MobileBottomMenuItem icon={<Clock />}/>
        <MobileBottomMenuItem icon={<Factory />}/>
        <MobileBottomMenuItem icon={<MessageCircle />}/>
        <MobileBottomMenuItem icon={<Ellipsis />} secondary={<NavigationMenuDemo/>} />
    </div>
</div>)

}

