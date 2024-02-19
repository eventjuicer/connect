import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslate } from "@/lib/contexts";

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
}


export function TranslatableSelect({label="", baseLabel="", items, onValueChange}: TranslatableSelectProps){

  const translate = useTranslate()

  return (
    <Select onValueChange={onValueChange}>
    <SelectTrigger className="w-[180px]">
    <SelectValue placeholder={translate(label)} />
    </SelectTrigger>
    <SelectContent>

    {items.map(item => (
    <SelectItem key={item.label} value={item.value}>{translate(`${baseLabel}${item.label}`)}</SelectItem>
    ))}

    </SelectContent>
    </Select>

  )
}