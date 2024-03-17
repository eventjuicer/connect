"use client"

import React from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export function useSetQueryString(){

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = React.useCallback(
        (arr: Array<Array<[name: string, value: string]>>) => {
          const params = new URLSearchParams(searchParams.toString())
          arr.forEach((item)=> {
            params.set(item[0], item[1])
          })
         
          
          params.toString()

          router.push(pathname + '?' + createQueryString('sort', 'asc'))

        },
        [searchParams]
      )

}



// Get a new searchParams string by merging the current
// searchParams with a provided key/value pair


/**

<button
onClick={() => {
  // <pathname>?sort=asc
  router.push(pathname + '?' + createQueryString('sort', 'asc'))
}}
>

*/