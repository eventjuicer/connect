"use client"

import useSWR from "swr";


const fetcher = (url) => fetch(url).then((res) => res.json());

export function useFetch(url) {

  const data = useSWR(url, fetcher);
  return data
}
