"use client"

import React from 'react'
import {TranslationProviderContext} from '@/providers/TranslationProvider'
import {SettingsProviderContext} from '@/providers/SettingsProvider'
import {get} from 'lodash'



export function useTranslate(){
    const ctx = React.useContext(TranslationProviderContext)
    return ctx.translate
} 

export const useSettings = (path = null, fallback = undefined) => {

    const settings = React.useContext(SettingsProviderContext)

    const out = get(settings, path, undefined)

    if(out !== undefined){
        return out
    }

    if(fallback !== undefined){
        return fallback
    }

    return {}
}