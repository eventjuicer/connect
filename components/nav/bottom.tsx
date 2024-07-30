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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo() {

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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <Link href={href} ref={ref}
 
          
          className={cn(
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
})
ListItem.displayName = "ListItem"


function MobileBottomMenuItem({icon=null, href="/", secondary=null}){

    const {push} = useRouter();

    const {setLabel, setSecondaryLabel, setContent} = useModal(state=>({
        setLabel: state.setLabel,
        setSecondaryLabel: state.setSecondaryLabel,
        setContent: state.setContent
    }))


    const handleOnClick = () => {
        if(secondary){
            setContent(secondary)
            return
        }
        push(href)
    }

    return ( <button onClick={handleOnClick} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
      {icon}
        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">Home</span>
    </button>  
    )
}




export function MobileBottomMenu(){

    // const items = getSettings("bottomMenu")

    return (<div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-white border-t border-gray-200 dark:bg-background dark:border-gray-700">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
  
        <MobileBottomMenuItem icon={<House />} />
        <MobileBottomMenuItem icon={<Clock />}/>
        <MobileBottomMenuItem icon={<Factory />}/>
        <MobileBottomMenuItem icon={<MessageCircle />}/>
        <MobileBottomMenuItem icon={<Ellipsis />} secondary={<NavigationMenuDemo/>} />
    </div>
</div>)

}

