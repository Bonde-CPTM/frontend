import { useMemo } from "react"
import * as yup from 'yup'

export const useYupValidationPassword = () => {
    const yupValidationPassword = useMemo(() => {
        return (
            yup
                .string()
                .required('Senha é um campo obrigatório')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, 'A senha deve conter ao menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caracter especial'))
    }, [])
    return {
        yupValidationPassword
    }
}

