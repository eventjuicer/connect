"use client"

import React from 'react'
import {TranslationProviderContext} from '@/providers/TranslationProvider'



export function useTranslate(){
    const ctx = React.useContext(TranslationProviderContext)
    return ctx.translate
} 

