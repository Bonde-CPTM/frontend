import { Button, Grid } from "@mui/material"
import { ErrorBox } from "components/error-box"
import { InputDefault } from "components/inputs/input-default"
import { useFormik } from "formik"
import { useFormSignupValidations } from "./FormSignupValidations"
import { FormSignupProps } from "./types/FormSignupProps"

export const FormSignup = (props: FormSignupProps) => {
    const { FormSignupValidations } = useFormSignupValidations()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            nome: '',
            idLogin: null,
            token: null
        },
        validationSchema: FormSignupValidations,
        onSubmit: (values) => {
            props.onSubmit(values)
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <InputDefault
                            fullWidth
                            label="E-mail"
                            placeholder="exemplo@exemplo.com"
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            {...formik.getFieldProps('email')} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputDefault
                            fullWidth
                            label="Nome"
                            placeholder="Digite seu nome"
                            error={formik.touched.nome && Boolean(formik.errors.nome)}
                            helperText={formik.touched.nome && formik.errors.nome}
                            {...formik.getFieldProps('nome')} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputDefault
                            fullWidth
                            label="Senha"
                            placeholder="***********"
                            type="password"
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            {...formik.getFieldProps('password')} />
                    </Grid>
                    <Grid item xs={12}>
                        <InputDefault
                            fullWidth
                            label="Confirmar senha"
                            placeholder="***********"
                            type="password"
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            {...formik.getFieldProps('confirmPassword')} />
                    </Grid>
                    <Grid item xs={12}>
                        {
                            props.errorMessage ? (
                                <ErrorBox message={props.errorMessage} />
                            ) : null
                        }
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary">
                            Cadastrar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
