
import { DataTable } from "@/components/tables";
import {columns} from './columns'
import { callPublicApi } from "@/lib/api";


export default async function  Rsvp() {

  const data = await callPublicApi("exhibitors");

  return (


    <div>

<DataTable columns={columns} data={data} searchBy="name" />
 
 
  

     
    </div>


  );
}
