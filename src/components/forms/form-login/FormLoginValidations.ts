import * as yup from 'yup'
import { useYupValidationEmail } from '../form-validations/yup-validations/YupEmailValidation'
import { useYupValidationPassword } from '../form-validations/yup-validations/YupPasswordValidation'

export const useFormLoginValidations = () => {
    const { yupValidationEmail } = useYupValidationEmail()

    const { yupValidationPassword } = useYupValidationPassword()

    const FormLoginYupValidations = yup.object().shape({
        email: yupValidationEmail,
        password: yupValidationPassword
    })
    return{
        FormLoginYupValidations
    }
}