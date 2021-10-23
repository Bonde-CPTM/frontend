import { Grid, Typography } from "@mui/material"
import { ErrorBoxProps } from "./types/ErrorBoxProps"

export const ErrorBox = (props: ErrorBoxProps) => {
    return (
        <>
            <Grid container justifyContent="center">
                <Grid item>
                    <Typography color="error">
                        {props.message}
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}
