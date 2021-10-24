import { Grid, Typography, Button } from "@mui/material"
import { FormEvent } from "components/forms/form-event"
import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useEventService } from "services/event/EventService"
import { EventModel } from "services/event/types/EventModel"
import { useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const EventEditPage = () => {
    const history = useHistory()
    const { id } = useParams<{ id: string }>()
    const [errorMessage, setErrorMessage] = useState<string | null | undefined>(null)
    const [model, setModel] = useState<EventModel>(new EventModel())
    const { getEventById, editEvent } = useEventService()
    const handleSubmit = (model: EventModel) => {
        editEvent(model).then((res) => {
            if (res.data.content) {
                history.push('/adm/event')
            }
        })
    }

    useEffect(() => {
        if (!id) {
            history.push('/')
        }
    }, [])
    useEffect(() => {
        getEventById(id).then((res) => {
            if (res.data) {
                if (res.data.content) {
                    setModel((prev) => {
                        return ({
                            ...prev,
                            ...res.data.content
                        })
                    })
                }
            }

        })

    }, [])
    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={10} md={3}>
                    <Grid container justifyContent="center" spacing={2} direction="column">
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Button onClick={()=>{
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
                            <FormEvent model={model} onSubmit={handleSubmit} errorMessage={errorMessage} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
