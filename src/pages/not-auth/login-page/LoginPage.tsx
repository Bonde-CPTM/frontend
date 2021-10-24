import { Button, Grid, Typography } from "@mui/material"
import { FormLogin } from "components/forms/form-login"
import { LoginModel } from "services/login/types/LoginModel"
import { useLoginService } from "services/login/LoginService"
import { useTokenService } from "hooks/tolen-service/TokenService"
import { useState } from "react"
import md5 from 'md5'
import { useHistory } from "react-router-dom"
import { useStorageService } from "hooks/storage-service"
import { EnumStorageKey } from "hooks/storage-service/types/EnumStorageKeys"

export const LoginPage = () => {
    const { signIn } = useLoginService()
    const { setToken } = useTokenService()
    const { setItem } = useStorageService()
    const [errorMessage, setErrorMessage] = useState<string | null | undefined>(null)
    const history = useHistory()
    const handleSubmit = (model: LoginModel) => {
        setErrorMessage(null)
        signIn({
            ...model,
            password: md5(model.password)
        }).then((res) => {
            if (res.status === 201) {
                if (res.data.content) {
                    if (res.data.content.token) {
                        setItem(EnumStorageKey.idCliente, res.data.content.idLogin as string)
                        setToken(res.data.content.token)
                        history.push('/')
                    }
                }
            }
        }).catch((e) => {
            if (e.response) {
                if (e.response.status === 406) {
                    setErrorMessage('E-mail ou senha inválidos')
                }
            }
        })
    }
    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={10} md={3}>
                    <Grid container justifyContent="center" spacing={2} direction="column">
                        <Grid item>
                            <Typography variant="h3" component="h1" color="primary" align="center">
                                Acesso
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormLogin errorMessage={errorMessage} onSubmit={handleSubmit} />
                        </Grid>
                        <Grid item>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Button onClick={()=>{
                                        history.push('/signup/login')
                                    }}>
                                        <Typography color="secondary">
                                            Crie uma conta
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
