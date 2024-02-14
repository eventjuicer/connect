import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export function checkUser(){

    const token = cookies().get("VISITOR_TOKEN")?.value;

    if(!token){
        redirect("/login")
    }

}