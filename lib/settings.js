

import {get} from 'lodash'
import settings from '@/settings.mjs'


export const getSettings = (path = null, fallback = undefined) => {

    const out = get(settings, path, undefined)

    if(out !== undefined){
        return out
    }

    if(fallback !== undefined){
        return fallback
    }

    return {}
}