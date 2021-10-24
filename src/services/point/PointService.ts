import { useStorageService } from "hooks/storage-service"
import { EnumStorageKey } from "hooks/storage-service/types/EnumStorageKeys"
import { useCallback } from "react"
import { PointApiBase } from "./PointApiBase"

export const usePointService = () => {
    const { getItem } = useStorageService()
    const getPoints = useCallback(() => {
        const idLogin = getItem(EnumStorageKey.idCliente)
        return PointApiBase.get<{
            content: {
                idLogin: string,
                pontos: string
            }
        }>('/point/' + idLogin)
    }, [])

    const postPoints = useCallback(() => {
        const idLogin = getItem(EnumStorageKey.idCliente)
        return PointApiBase.post<{
            content: {
                idLogin: string,
                pontos: string
            }
        }>('/point/',{
            pontos: '8',
            idLogin: idLogin
        })
    }, [])
    return {
        getPoints,
        postPoints
    }
}
