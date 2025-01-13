"use client"

import React from 'react'
import {TranslatableSelect} from '@/components/selects'
import { getSettings } from '@/lib/settings'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

type FilterByKeywordsProps = {
    setting?: string;
    column: string;
    initialValue?: string;
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

export function FilterByKeywords({
    setting="company.tags", 
    column="", 
    initialValue="",
    onValueChange
}: FilterByKeywordsProps) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [selectedValue, setSelectedValue] = React.useState<string>(
        initialValue || searchParams.get(column) || ""
    )

    // Trigger initial filter only once when component mounts
    React.useEffect(() => {
        const urlValue = searchParams.get(column)
        if (urlValue && onValueChange) {
            onValueChange(urlValue)
        }
    }, []) // Empty dependency array to run only once

    const handleValueChange = (value: string) => {
        setSelectedValue(value)
        
        const newSearchParams = new URLSearchParams(searchParams.toString())
        
        if (value) {
            newSearchParams.set(column, value)
        } else {
            newSearchParams.delete(column)
        }
        
        router.push(`?${newSearchParams.toString()}`)
        
        if (onValueChange) {
            onValueChange(value)
        }
    }

    const props = Object.assign({}, defaultProps, getSettings(setting))

    return (
        <TranslatableSelect 
            {...props} 
            value={selectedValue}
            onValueChange={handleValueChange}
        />
    )
}

