import { useCallback } from "react"
import { EnumStorageKey } from "./types/EnumStorageKeys"

export const useStorageService = () => {
    const getItem = useCallback((key: EnumStorageKey): string | null | undefined => {
        try {
            const value = window.localStorage.getItem(key)
            return value

        } catch (e) {
            console.log(e)
        }
    }, [])

    const setItem = useCallback((key: EnumStorageKey, value: string): boolean => {
        try {
            window.localStorage.setItem(key, value)
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }, [])
    return ({
        getItem,
        setItem
    })
}
