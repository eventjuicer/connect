import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type TranslatableSelectCallback = (event: any) => void;

type TranslatableSelectItemsProps = {
  label: string,
  value: string
}

type TranslatableSelectProps = {
  items: Array<TranslatableSelectItemsProps>,
  onValueChange: TranslatableSelectCallback
}


export function TranslatableSelect({items, onValueChange}: TranslatableSelectProps){


  return (
    <Select onValueChange={onValueChange}>
    <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>

    {items.map(item => (
    <SelectItem key={item.label} value={item.value}>{item.label}</SelectItem>
    ))}

    </SelectContent>
    </Select>

  )
}