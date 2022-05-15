import Grid from "@mui/material/Grid";
import MeterPanel from "./meterPanel";

export default function MetersGrid() {
    return (
        <Grid container justifyContent="space-evenly"
              spacing={3} direction="column" alignItems="flex-start">
            <Grid item>
                <MeterPanel id='1'/>
            </Grid>
            <Grid item>
                <MeterPanel id='2'/>
            </Grid>
            <Grid item>
                <MeterPanel id='3'/>
            </Grid>
        </Grid>
    )
}