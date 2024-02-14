import { callPublicApi } from "@/lib/api";

export async function Map(){

    const data = await callPublicApi("bookingmap")

    console.log(data)

    return 1

}