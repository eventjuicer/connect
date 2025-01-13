"use client"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    // DrawerTrigger,
  } from "@/components/ui/drawer"
  
import { Button } from "@/components/ui/button"
import {isFunction} from 'lodash'
import { useTranslate } from "@/lib/contexts"
import {createWithEqualityFn} from 'zustand/traditional'
import { useSetQueryString } from "@/lib/url"
import { DoorClosed } from "lucide-react"
import * as React from "react"
import { shallow } from 'zustand/shallow'

/**
 
  activeSnapPoint?: number | string | null;
    setActiveSnapPoint?: (snapPoint: number | string | null) => void;
    children?: React.ReactNode;
    open?: boolean;
    closeThreshold?: number;
    onOpenChange?: (open: boolean) => void;
    shouldScaleBackground?: boolean;
    scrollLockTimeout?: number;
    fixed?: boolean;
    dismissible?: boolean;
    onDrag?: (event: React.PointerEvent<HTMLDivElement>, percentageDragged: number) => void;
    onRelease?: (event: React.PointerEvent<HTMLDivElement>, open: boolean) => void;
    modal?: boolean;
    nested?: boolean;
    onClose?: () => void;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    preventScrollRestoration?: boolean;

 */


interface ModalStore {
  label: string
  secondaryLabel: string
  content: React.ReactNode | null
  onSubmit: (() => void) | null
  setLabel: (label: string) => void
  setSecondaryLabel: (secondaryLabel: string) => void
  setContent: (content: React.ReactNode) => void
  setOnSubmit: (onSubmit: () => void) => void
  close: () => void
}

export const useModal = createWithEqualityFn<ModalStore>((set) => ({
  label: "",
  secondaryLabel: "",
  content: null,
  onSubmit: null,
  setLabel: (label: string) => set(() => ({ label })),
  setSecondaryLabel: (secondaryLabel: string) => set(() => ({ secondaryLabel })),
  setContent: (content: React.ReactNode) => set(() => ({ content })),
  setOnSubmit: (onSubmit: () => void) => set(() => ({ onSubmit })),
  close: () => set(() => ({ label:"", secondaryLabel: "", content: null, onSubmit: null }))
}), Object.is)



export const Modal = React.memo(function Modal() {
    const translate = useTranslate()
    
    // Use specific selectors with Object.is comparison
    const content = useModal(state => state.content, Object.is)
    const close = useModal(state => state.close, Object.is)
    const label = useModal(state => state.label, Object.is)
    const secondaryLabel = useModal(state => state.secondaryLabel, Object.is)
    const onSubmit = useModal(state => state.onSubmit, Object.is)
    
    const setQueryString = useSetQueryString()

    return (
        <Drawer 
            open={!!content} 
            onClose={() => {
                close()
                setQueryString([["id", ""]])
            }}
        >
            <DrawerContent className="">
                <div className="mx-auto w-full max-w-3xl">
                    <DrawerHeader>
                        <DrawerTitle>{label}</DrawerTitle>
                        {secondaryLabel ? <DrawerDescription>{secondaryLabel}</DrawerDescription> : null}
                    </DrawerHeader>

                    <div className="px-4 my-5">
                        {content}
                    </div>

                    <DrawerFooter>
                        {isFunction(onSubmit) ? <Button onClick={onSubmit}>Submit</Button> : null}
                        <DrawerClose asChild>
                            <Button variant="outline" onClick={close}>Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
})