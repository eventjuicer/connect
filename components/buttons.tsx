import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type IconButtonProps = {
    variant?: "outline" | "default" | "destructive" | "secondary" | "ghost" | "link" | null | undefined;
    onClick?: ()=>void;
    href?: string | undefined; 
    icon: React.ReactElement;
    size?: string;
}

export function IconButton({onClick, href, size="icon", icon, variant="outline"}: IconButtonProps){
        
        const {push} = useRouter()


        return ( <Button variant={variant} size={size} onClick={onClick}>
            {React.cloneElement(icon, {className: cn(icon.props.className, "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ")})}
        </Button>
        )
    

}