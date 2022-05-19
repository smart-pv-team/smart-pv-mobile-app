import DevicePanel from "./devicePanel";
import Grid from "@mui/material/Grid";

export default function DevicesGrid() {
    const parameters = {
        "devicePower": 2,
        "minHysteresis": 2,
        "maxHysteresis": 3
    }
    return (
        <Grid container justifyContent="space-evenly" sx = {{mt:5}}
              direction="column" alignItems="flex-start">
            <Grid item>
                <DevicePanel deviceId='1' parameters={parameters}/>
            </Grid>
            <Grid item>
                <DevicePanel deviceId='2' parameters={parameters}/>
            </Grid>
            <Grid item>
                <DevicePanel deviceId='3' parameters={parameters}/>
            </Grid>
        </Grid>
    )
}