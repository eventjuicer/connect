"use server"

import { unstable_cache as cache } from "next/cache";
import { callPublicApi } from "@/lib/api";


const getPresentersForSlot = cache(

    async (venue, time) => {

        const data = await callPublicApi("presenters")
        let out: Array<any> = [];
        if(data){
            out = data.filter(p => p)
        }

        return out;
    },
    ['my-app-user'], 
    {
        revalidate: 600
    }
)

export default getPresentersForSlot
