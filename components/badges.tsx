import { Badge, BadgeProps } from "@/components/ui/badge"

type TranslatedBadgeProps = {
    label: string;
}

export function TranslatedBadge({label, className}: TranslatedBadgeProps & BadgeProps){
    return (<Badge variant="outline" className={className}>{label}</Badge>)
}
