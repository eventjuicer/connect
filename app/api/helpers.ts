
import { filter, find, get, isString } from "lodash"

export function isNumeric(n: any) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function handleParams(searchParams: any, res: any){

    const searchParamsFixed = {}

    if(searchParams.size){
        if(searchParams.has("id")){
          return find(res, {id: Number(searchParams.get("id"))})
        }else{
          searchParams.forEach((value, key: string) => {
            searchParamsFixed[key] = isNumeric(value)? Number(value): value
          })
          return filter(res, function(row){
            return Object.keys(searchParamsFixed).every((urlKey) => {
              const urlValue = searchParamsFixed[urlKey]
              const lookup = get(row, urlKey)
      
              if(isString(lookup) && isString(urlValue)){

                if(urlValue.length > 3 && urlValue.includes("*")){

                  if(urlValue.slice(-1)==="*"){
                    return new RegExp(`^${urlValue.substring(0, urlValue.length-1)}.*`, "i").test(lookup)
                  }
                  
                  if(urlValue.charAt(0)==="*"){
                    return new RegExp(`.*${urlValue.substring(1)}$`, "i").test(lookup)
                  }

                }

                return lookup.toUpperCase() === urlValue.toUpperCase();
              }

              return urlValue === lookup
            })
          })
        }
    }

    return res;
}