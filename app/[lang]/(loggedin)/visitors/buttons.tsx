"use client"

import { useModal } from "@/components/modal"
import { Button } from "@/components/ui/button"
import { Visitor } from "@/app/[lang]/expo/types"


export const ShowDetails = ({visitor}:{visitor: Visitor}) => {

    const {setLabel, setSecondaryLabel, setContent} = useModal(state=>({
        setLabel: state.setLabel,
        setSecondaryLabel: state.setSecondaryLabel,
        setContent: state.setContent
      }))


    const handleOnClick = () => {
        setLabel(`${visitor.fname} ${visitor.lname}`)
        setSecondaryLabel(`${visitor.domain}`)
        setContent(<div>
            <p>Domain: {visitor.domain}</p>
            {/* Add more visitor details here */}
        </div>)
    }

    return (<Button 
        variant="default" 
        className="w-[50%] right-0"
        onClick={handleOnClick}
    >
    More Details
    </Button>)

}