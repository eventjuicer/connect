
 
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
        {name: "B"},
        {name: "C"},
        {name: "D"}
      ]} 
      slots={[
        {time: "10:00"}, 
        {time: "11:00"}, 
        {time: "12:00"},
        {time: "13:00"}, 
        {time: "14:00"}, 
        {time: "15:00"},
        {time: "16:00"}, 
        {time: "17:00"}, 
        {time: "18:00"}

      ]} 
    />

    </div>


  );
}

