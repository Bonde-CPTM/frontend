import { Button, Grid, Input } from "@mui/material"
import { ErrorBox } from "components/error-box"
import { InputDefault } from "components/inputs/input-default"
import { useFormik } from "formik"
import { useEffect, useState } from "react"
import { EventModel } from "services/event/types/EventModel"
import { useFormEventValidations } from "./FormEventValidations"
import { FormEventProps } from "./types/FormEventProps"

export const FormEvent = (props: FormEventProps) => {
    const { FormEventYupValidations } = useFormEventValidations()
    const [initialData, setInitialData] = useState<EventModel>(new EventModel())
    const [imgUrl, setImgUrl] = useState<any>()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            ...initialData
        },
        validationSchema: FormEventYupValidations,
        onSubmit: (values) => {
            console.log(JSON.stringify(values))
            props.onSubmit(values)
        }
    })

    useEffect(() => {
        if (props.model) {
            setInitialData({
                ...props.model
            })
        }
    }, [props.model])

    // function readFile() {
    //     if (this.files && this.files[0]) {
    //       var FR= new FileReader();

    //       FR.addEventListener("load", function(e) {
    //         document.getElementById("img").src       = e.target.result;
    //         document.getElementById("b64").innerHTML = e.target.result;
    //       }); 

    //       FR.readAsDataURL( this.files[0] );
    //     }

    //   }


    const getBase64 = (file: any) => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result as any;
                console.log(baseURL);
                resolve(baseURL);
            };
            console.log(fileInfo);
        });
    };

    const handleFileInputChange = (e: any) => {
        console.log(e.target.files[0]);

        getBase64(e.target.files[0])
            .then(result => {
                e.target.files[0]["base64"] = result;
                console.log("File Is", e.target.files[0]);
                formik.setFieldValue('foto', result)
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <InputDefault
                            fullWidth
                            label="Nome"
                            placeholder="Digite o nome do evento"
                            error={formik.touched.nome && Boolean(formik.errors.nome)}
                            helperText={formik.touched.nome && formik.errors.nome}
                            {...formik.getFieldProps('nome')} />
                    </Grid>

                    <Grid item xs={12}>
                        <InputDefault
                            fullWidth
                            label="Descrição"
                            placeholder="Digite a descrição do evento"
                            error={formik.touched.descricao && Boolean(formik.errors.descricao)}
                            helperText={formik.touched.descricao && formik.errors.descricao}
                            {...formik.getFieldProps('descricao')} />
                    </Grid>




                    <Grid item xs={12}>
                        <InputDefault
                            fullWidth
                            label="Local"
                            placeholder="Digite o local do evento"
                            error={formik.touched.local && Boolean(formik.errors.local)}
                            helperText={formik.touched.local && formik.errors.local}
                            {...formik.getFieldProps('local')} />
                    </Grid>

                    <Grid item xs={12}>
                        <InputDefault
                            fullWidth
                            type="date"
                            label="Data"
                            InputLabelProps={{
                                shrink: true
                            }}
                            placeholder="Insira a data do evento"
                            error={formik.touched.data && Boolean(formik.errors.data)}
                            helperText={formik.touched.data && formik.errors.data}
                            {...formik.getFieldProps('data')} />
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" spacing={2} justifyContent="center">
                            <Grid item xs={12} md={5}>
                                <Grid container justifyContent="center">
                                    <Grid item>
                                        <img style={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                            width: 'auto',
                                            maxHeight: '100px'
                                        }} src={formik.values.foto} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <label htmlFor="contained-button-file">
                                    <input style={{
                                        display: 'none'
                                    }} onChange={handleFileInputChange} accept="image/*" id="contained-button-file" multiple type="file" />
                                    <Button variant="contained" component="span">
                                        Upload
                                    </Button>
                                </label>
                            </Grid>
                        </Grid>

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
