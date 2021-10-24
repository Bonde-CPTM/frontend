import { Autocomplete, Button, Grid, TextField } from "@mui/material"
import { ErrorBox } from "components/error-box"
import { InputDefault } from "components/inputs/input-default"
import { useFormik } from "formik"
import { FormFeedbackProps } from "./types/FormFeedbackProps"

export const FormFeedback = (props: FormFeedbackProps) => {
    const formik = useFormik({
        initialValues: {
            idFeedback: "",
            categoria: "",
            conteudo: ""
        },
        onSubmit: (values) => {
            console.log(values)
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
                            type=""
                            label="Mensagem"
                            placeholder="Digite sua mensagem"
                            error={formik.touched.conteudo && Boolean(formik.errors.conteudo)}
                            helperText={formik.touched.conteudo && formik.errors.conteudo}
                            {...formik.getFieldProps('conteudo')} />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={['Elogio', 'Ocorrencia', 'Reclamacao', 'Sugestao', 'Outros']}
                            value={formik.values.categoria}
                            onChange={(e, newValue) => {
                                formik.setFieldValue('categoria', newValue)
                            }}
                            renderInput={(params) => <TextField {...params} fullWidth label="Tipo" />}
                        />
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
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
