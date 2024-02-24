
type ExhbibitorInstance = {
    purchase_id: number;
    ticket_id: number;
    participant_id: number;
    formdata: Record<any, any>;
    role: string;
}


export function getBooths(arr: Array<ExhbibitorInstance>) : string {
 
    return arr.reduce(function(prev, current){

        const ti =  "ti" in current.formdata? current.formdata.ti: "";

        return `${prev} ${ti}`

    }, "")

}