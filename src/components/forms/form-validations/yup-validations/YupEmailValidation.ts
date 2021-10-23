import { useMemo } from "react"
import * as yup from 'yup'

export const useYupValidationEmail = () => {
    const yupValidationEmail = useMemo(() => {
        return (
            yup
                .string()
                .required('Email é um campo obrigatório')
                .email('Por favor, insira um email valido')
        )
    }, [])
    return {
        yupValidationEmail
    }
}