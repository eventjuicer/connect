
 
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
        {time: "10:40"}, 
        {time: "11:15"}, 
        {time: "11:50"},
        {time: "12:40"},
        {time: "13:15"}, 
        {time: "14:05"}, 
        {time: "14:40"},
        {time: "15:30"}, 
        {time: "16:05"}

      ]} 
    />

    </div>


  );
}

