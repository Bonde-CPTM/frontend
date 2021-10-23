import { Button, Grid } from "@mui/material"
import { InputDefault } from "components/inputs/input-default"
import { useFormik } from "formik"
import { useEffect } from "react";


export const FormClient = () => {
    const formik = useFormik({
        initialValues: {
            nome: '',
            dataNascimento: '',
            endereco: '',
            sexo: '',
            contato: ''
        },

        onSubmit: (values) => {

        }
    })

    useEffect(()=>{
        console.log(formik.values.dataNascimento)
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
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
                            label="Nome"
                            placeholder="Digite seu nome"
                            error={formik.touched.nome && Boolean(formik.errors.nome)}
                            helperText={formik.touched.nome && formik.errors.nome}
                            {...formik.getFieldProps('nome')} />
                    </Grid>

                    <Grid item xs={12}>
                        <InputDefault
                           type="date" />
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
