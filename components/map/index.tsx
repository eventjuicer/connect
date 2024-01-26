import { bookingmap } from "@/lib/datasources";



export async function Map(){

    const data = await bookingmap()

    console.log(data)

    return 1

}