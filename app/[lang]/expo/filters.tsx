"use client"

import React from 'react'
import {TranslatableSelect} from '@/components/selects'
import { getSettings } from '@/lib/settings'
import { useSearchParams } from 'next/navigation'
type FilterByKeywordsProps = {
    setting?: string;
    column: string;
    onValueChange?: (val: string) => void
}

const defaultProps = {
    label: "common.tags",
    baseLabel: 'tags.',
    items: [
        {label: "logistics", value: "logistics"},
        {label: "infrastructure", value: "infrastructure"},
        {label: "international_sales", value: "international_sales"},
        {label: "omnichannel", value: "omnichannel"},
        {label: "software", value: "software"},
        {label: "platform", value: "platform"},
    ]
}

export function FilterByKeywords({setting="company.tags", column="", onValueChange}: FilterByKeywordsProps){

    const searchParams = useSearchParams()

    const cat = searchParams.get("category");

    console.log({searchParams, cat})

    const props = Object.assign({}, defaultProps, getSettings(setting))

    return (<TranslatableSelect {...props} value={cat} onValueChange={onValueChange} />)
}

