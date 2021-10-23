import { Button, Grid } from "@mui/material"
import { ErrorBox } from "components/error-box"
import { InputDefault } from "components/inputs/input-default"
import { useFormik } from "formik"
import { useFormLoginValidations } from "./FormLoginValidations"
import { FormLoginProps } from "./types/FormLoginProps"

export const FormLogin = (props: FormLoginProps) => {
    const { FormLoginYupValidations } = useFormLoginValidations()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            nome: '',
            idLogin: null,
            token: null
        },
        validationSchema: FormLoginYupValidations,
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
                            label="Senha"
                            placeholder="***********"
                            type="password"
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            {...formik.getFieldProps('password')} />
                    </Grid>
                    <Grid item xs={12}>
                        {
                           props.errorMessage ? (
                               <ErrorBox message={props.errorMessage} />
                           ): null      
                        }
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary">
                            Acessar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
