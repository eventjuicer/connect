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
import {create} from 'zustand'





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


export const useModal = create((set) => ({
      label: "",
      secondaryLabel: "",
      content: null,
      onSubmit: null,
      setLabel: (label: string) => set(() => ({ label })),
      setSecondaryLabel: (secondaryLabel: string) => set(() => ({ secondaryLabel })),
      setContent: (content: React.ReactNode) => set(() => ({ content })),
      setOnSubmit: (onSubmit: ()=>void) => set(() => ({ onSubmit })),
      close: () => set(() => ({ label:"", secondaryLabel: "", content: null, onSubmit: null }))
    }))



export function Modal(){

    const translate = useTranslate()

    const {label, secondaryLabel, content, close, onSubmit} = useModal((state) => ({ 
      label: state.label, 
      secondaryLabel: state.secondaryLabel,
      content: state.content,
      close: state.close,
      onSubmit: state.onSubmit
    }))

  
    return (

        <Drawer onClose={close} open={content}>
        {/* <DrawerTrigger>Open</DrawerTrigger> */}
        <DrawerContent >
        <div className="mx-auto w-full max-w-3xl">
        <DrawerHeader>
        <DrawerTitle>{label}</DrawerTitle>
        {secondaryLabel? <DrawerDescription>{secondaryLabel}</DrawerDescription>: null}

        {/* <DrawerClose asChild>
              <Button variant="outline" onClick={close}>Cancel</Button>
            </DrawerClose> */}


        </DrawerHeader>

        <div className="p-4 pb-0 my-10">
        <div className="flex items-center justify-center space-x-2">
        {content}
        </div>
        </div>

        <DrawerFooter>
            {isFunction(onSubmit)? <Button onClick={onSubmit}>Submit</Button>: null }
            <DrawerClose asChild>
              <Button variant="outline" onClick={close}>Cancel</Button>
            </DrawerClose>
        </DrawerFooter>

        </div>
        </DrawerContent>
        </Drawer>

    )
}