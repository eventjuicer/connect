"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslate } from "@/lib/contexts";
import { useCallback } from "react";

type TranslatableSelectCallback = (event: any) => void;

type TranslatableSelectItemsProps = {
  label: string;
  value: string;
}

type TranslatableSelectProps = {
  label: string;
  baseLabel?: string;
  items: Array<TranslatableSelectItemsProps>;
  onValueChange: TranslatableSelectCallback;
  value?: string;
}


export function TranslatableSelect({label="", baseLabel="", items, value, onValueChange}: TranslatableSelectProps){

  const translate = useTranslate()
  const onValueChangeCallback = useCallback((val: string) => onValueChange(val), [onValueChange])

  return (
    <Select onValueChange={onValueChangeCallback} value={value}>
    <SelectTrigger className="w-[180px]">
    <SelectValue placeholder={translate(label)} />
    </SelectTrigger>
    <SelectContent>

    <SelectItem value="none" defaultChecked>asd</SelectItem>
    {items.map(item => (
    <SelectItem key={item.label} value={item.value}>{translate(`${baseLabel}${item.label}`)}</SelectItem>
    ))}

    </SelectContent>
    </Select>

  )
}