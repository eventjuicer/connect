

import { ScrollArea } from "@/components/ui/scroll-area"
import Markdown from 'react-markdown'


export function ScrollableMarkdownContent({str}: {str: string}){

    return (
        <ScrollArea className="h-[250px] w-full rounded-md border p-4">
        <Markdown>{str}</Markdown>
        </ScrollArea>
    )
}