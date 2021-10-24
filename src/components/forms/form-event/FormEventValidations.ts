import * as yup from 'yup'

export const useFormEventValidations = () => {

    const FormEventYupValidations = yup.object().shape({
        nome: yup.string().required('O campo Nome é obrigatório'),
        descricao: yup.string().required('O campo Desgração é obrigatório'),
        local: yup.string().required('O campo Local é obrigatório'),
        data: yup.string().required('O Data nome é obrigatório'),
    })
    return{
        FormEventYupValidations
    }
}