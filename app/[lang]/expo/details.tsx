"use server"

import { exhibitors } from "@/lib/datasources"
import { find } from "lodash";

export async function Details({id}: {id: number}){

   
    const data = await exhibitors();

    console.log(find(data, {id}))

    return id;

}