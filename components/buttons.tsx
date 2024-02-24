import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type IconButtonProps = {
    variant?: "outline" | "default" | "destructive" | "secondary" | "ghost" | "link" | null | undefined;
    onClick?: ()=>void;
    href?: string | undefined; 
    icon: React.ReactElement;
}

export function IconButton({onClick, href, icon, variant="outline"}: IconButtonProps){
        
        const {push} = useRouter()


        return ( <Button variant={variant} size="icon" onClick={onClick}>
            {React.cloneElement(icon, {className: cn(icon.props.className, "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ")})}
        </Button>
        )
    

}