
 
import  Schedule  from "@/components/schedule";
import { callPublicApi } from "@/lib/api";


export default async function  Home() {

  const presenters = await callPublicApi("presenters")

  return (

    <div>

      


    <Schedule 
      data={presenters}
      venues={[
        {name: "A"}, 
        {name: "B"}
      ]} 
      slots={[
        {time: "10:00"}, 
        {time: "11:00"}, 
        {time: "12:00"}
      ]} 
    />

    </div>


  );
}

