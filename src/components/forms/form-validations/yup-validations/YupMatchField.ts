import { useMemo } from "react"
import * as yup from 'yup'

export const useYupValidationMatchField = (fieldName: string) => {
    const yupValidationMatchField = useMemo(() => {
        return (
            yup.string()
            .oneOf([yup.ref(fieldName), null], 'O valor inserido não é igual ao campo ' + fieldName)
        )
    }, [fieldName])
    return {
        yupValidationMatchField
    }
}