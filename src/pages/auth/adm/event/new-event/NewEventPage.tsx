import { Button, Grid, Typography } from "@mui/material"
import { FormEvent } from "components/forms/form-event"
import { useState } from "react"
import { useHistory } from 'react-router-dom'
import { useEventService } from "services/event/EventService"
import { EventModel } from "services/event/types/EventModel"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const NewEventPage = () => {
    const history = useHistory()
    const [errorMessage, setErrorMessage] = useState<string | null | undefined>(null)
    const { newEvent } = useEventService()
    const handleSubmit = (model: EventModel) => {
        newEvent(model).then((res) => {
            alert()
            console.log(res)
        }).catch((e) => {
            console.log(e.response)
        })
    }
    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={10} md={3}>
                    <Grid container justifyContent="center" spacing={2} direction="column">
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Button onClick={() => {
                                        history.push('/adm/event/')
                                    }}>
                                        <ArrowBackIcon />
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4" component="h1" color="primary" align="center">
                                        Editar evento
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <FormEvent onSubmit={handleSubmit} errorMessage={errorMessage} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
