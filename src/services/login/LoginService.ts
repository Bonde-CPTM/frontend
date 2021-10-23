import { useCallback } from "react"
import { loginApiBase } from "./LoginApiBase"
import { LoginModel } from "./types/LoginModel"

export const useLoginService = () => {
    const signIn = useCallback((data: LoginModel) => {
        return loginApiBase.post<{
            content: LoginModel
        }>('/login/signin', {
            ...data
        })
    }, [])
    const signUp = useCallback((data: LoginModel)=>{
        return loginApiBase.post<{
            content: LoginModel
        }>('/login', {
            ...data
        })
    }, [])
    return ({
        signIn,
        signUp
    })
}