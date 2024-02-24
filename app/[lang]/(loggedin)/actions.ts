"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { checkToken } from "@/app/actions";

export async function checkUser(){

    const token = await checkToken();

    if(!token){
        redirect("/login")
    }

}