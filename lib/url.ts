"use client"

import React from 'react'
import { 
  useRouter, 
  usePathname, 
  useSearchParams 
} from 'next/navigation'

export function useSetQueryString(){

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    return React.useCallback(
        (arr: Array<Array<[name: string, value: string]>>) => {
          const params = new URLSearchParams(searchParams.toString())
          arr.forEach((item)=> {
            params.set(item[0], item[1])
          })
         
  
          router.push(pathname + '?' + params.toString() )

        },
        [pathname, searchParams]
      )

}





/**

<button
onClick={() => {
  // <pathname>?sort=asc
  router.push(pathname + '?' + createQueryString('sort', 'asc'))
}}
>

*/