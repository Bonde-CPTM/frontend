import { Grid, Typography } from "@mui/material"
import { useEventCardStyles } from "./EventCardStyles"
import { EventCardProps } from "./types/EventCardProps"
import DateRangeIcon from '@mui/icons-material/DateRange';
export const EventCard = (props: EventCardProps) => {
    const { classes } = useEventCardStyles()
    return (
        <>
            <div className={classes.eventCardContainer} onClick={() => {
                props.onClick()
            }}>

                <Grid container spacing={2} justifyContent="space-around" alignItems="center">
                    <Grid item>
                        <div>
                            <img style={{
                                height: '50px',
                                width: 'auto'
                            }} src={props.foto} />
                        </div>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Typography variant="h6">
                                    {props.nome}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <DateRangeIcon color="primary" />
                                <Typography variant="h6" display="inline">
                                    {props.data}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        </>
    )
}
