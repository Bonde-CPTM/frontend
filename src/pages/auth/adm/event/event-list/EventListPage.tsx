import { Grid, Typography, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useEventService } from "services/event/EventService"
import { EventModel } from "services/event/types/EventModel"
import { EventCard } from "./event-card/EventCard"

export const EventListPage = () => {
    const [eventList, setEventList] = useState<Array<EventModel>>(new Array<EventModel>())
    const history = useHistory()
    const handleClick = (id: string) => {
        history.push('/adm/event/' + id)
    }
    const { getEventAll } = useEventService()
    useEffect(() => {
        getEventAll().then((res) => {
            if (res.data) {
                if (res.data.content) {
                    setEventList([
                        ...res.data.content
                    ])
                }
            }
        })
    }, [])
    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={10} md={4}>
                    <Grid container justifyContent="center" direction="column" spacing={2}>
                        <Grid item>
                            <Typography component="h1" variant="h3" align="center" color="primary">
                                Lista de eventos
                            </Typography>
                        </Grid>
                        {
                            eventList.map((item, index) => {
                                return (
                                    <Grid item key={index}>
                                        <EventCard foto={item.foto} nome={item.nome} data={item.data} onClick={() => {
                                            handleClick(item.idEvent)
                                        }} />
                                    </Grid>
                                )
                            })
                        }
                        <Grid item>
                            <Grid container justifyContent="center">
                                <Grid item>

                                </Grid>
                                <Button variant="contained" onClick={() => {
                                    history.push('/adm/event/new-event')
                                }}>
                                    <Typography>
                                        NOVO EVENTO
                                    </Typography>
                                </Button>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}
