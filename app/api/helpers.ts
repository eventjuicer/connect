
import { filter, find } from "lodash"

export function isNumeric(n: any) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function handleParams(searchParams: any, res: any){

    let searchParamsFixed = {}

    if(searchParams.size){

        if(searchParams.has("id")){
  
          const lookup = find(res, {id: Number(searchParams.get("id"))})
          return lookup;
    
        }else{
          searchParams.forEach((value, key) => {
            searchParamsFixed[key] = isNumeric(value)? Number(value): value
          })
          const lookup = filter(res, searchParamsFixed)
          return lookup;
  
        }
    }

    return res;
}