import * as yup from 'yup'
import { useYupValidationEmail } from '../form-validations/yup-validations/YupEmailValidation'
import { useYupValidationMatchField } from '../form-validations/yup-validations/YupMatchField'
import { useYupValidationPassword } from '../form-validations/yup-validations/YupPasswordValidation'

export const useFormSignupValidations = () => {
    const { yupValidationEmail } = useYupValidationEmail()

    const { yupValidationPassword } = useYupValidationPassword()

    const { yupValidationMatchField } = useYupValidationMatchField('password')

    const FormSignupValidations = yup.object().shape({
        email: yupValidationEmail,
        password: yupValidationPassword,
        confirmPassword: yupValidationMatchField.required('Confirmar senha é um obrigatório')
    })
    return{
        FormSignupValidations
    }
}