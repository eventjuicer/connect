"use client"

import React from 'react'
import {TranslationProviderContext} from '@/components/TranslationProvider'

export default function useTranslate(){
    const ctx = React.useContext(TranslationProviderContext)
    return [ctx.translate, ctx.locale, ctx.defaultLocale]
} 
