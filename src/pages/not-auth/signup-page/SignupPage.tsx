import { Button, Grid, Typography } from "@mui/material"
import { FormSignup } from "components/forms/form-signup/FormSignup"
import { useState } from "react"
import { LoginModel } from "services/login/types/LoginModel"
import { useHistory } from 'react-router-dom'
import { useLoginService } from "services/login/LoginService"
import { useTokenService } from "hooks/tolen-service"
import md5 from 'md5'
import React from "react"

export const SignupPage = () => {
    const history = useHistory()
    const { signUp } = useLoginService()
    const { setToken } = useTokenService()
    const handleSubmit = (model: LoginModel) => {
        signUp({
            ...model,
            password: md5(model.password)
        }).then((res) => {
            if (res.status === 201) {
                if (res.data.content) {
                    if (res.data.content.token) {
                        setToken(res.data.content.token)
                        history.push('/')
                    }
                }
            }
        }).catch((e) => {
            if (e.response) {
                if (e.response.status === 406) {
                    setErrorMessage('E-mail já cadastrado')
                }
            }
        })
    }

    const [errorMessage, setErrorMessage] = useState<string | null | undefined>(null)

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={10} md={3}>
                    <Grid container justifyContent="center" spacing={2} direction="column">
                        <Grid item>
                            <Typography variant="h3" component="h1" color="primary" align="center">
                                Cadastrar
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormSignup errorMessage={errorMessage} onSubmit={handleSubmit} />
                        </Grid>
                        <Grid item>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Button onClick={() => {
                                        history.push('/login')
                                    }}>
                                        <Typography color="secondary">
                                            Acessar a conta
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}
