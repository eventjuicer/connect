
import {TopMenu} from "@/components/topmenus";
import { exhibitors } from "@/lib/datasources";
import { DataTable } from "@/components/tables";
import {columns} from './columns'

export default async function  Home() {

  const data = await exhibitors();

  return (

    <div>

      <TopMenu />
  
      <DataTable columns={columns} data={data} />
     
    </div>


  );
}
