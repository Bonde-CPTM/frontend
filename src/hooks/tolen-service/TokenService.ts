import { useErrorHandler } from "hooks/error-handler"
import { useStorageService } from "hooks/storage-service"
import { EnumStorageKey } from "hooks/storage-service/types/EnumStorageKeys"
import { useCallback } from "react"

export const useTokenService = () => {
    const { getItem, setItem } = useStorageService()
    const { handleError } = useErrorHandler()
    const getToken = useCallback((): string | null => {
        try {
            const token = getItem(EnumStorageKey.accessToken)
            if (token !== undefined && token !== null) {
                return token
            } else {
                throw new Error('Token inválido')
            }
        } catch (e) {
             handleError(e)
             return null
        }
    }, [getItem, handleError])

    const setToken = useCallback((value: string): void=>{
        setItem(EnumStorageKey.accessToken, value)
    }, [setItem])

    return {
        getToken,
        setToken
    }
}
