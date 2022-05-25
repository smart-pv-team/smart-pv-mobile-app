import DevicePanel from "./devicePanel";
import Grid from "@mui/material/Grid";
import {sendGet, sendPost} from "./utils";
import {useState, useEffect} from "react";

const devicesUrl = "http://127.0.0.1:8080/managing/devices"
const urlParameters = "http://127.0.0.1:8080/managing/parameters/device/"

export default function DevicesGrid() {
    const parameters = {
        "priority": 2,
        "powerConsumption": 2,
        "minHysteresis": 2,
        "maxHysteresis": 3,
        "isOn": "false",
        "isLocked": "false"
    }
    const [devices, setDevices] = useState([]);
    useEffect(() => {
        async function getDevices() {
            const response = await sendGet(devicesUrl).then(response => response.json())
            setDevices(response);
        }

        getDevices();
    }, []);
    return (
        <Grid container justifyContent="space-evenly" sx={{mt: 5}}
              direction="column" alignItems="flex-start">
            {devices.map((device) => (
                    <Grid item>
                        <DevicePanel deviceId={device} parameters={parameters}/>
                    </Grid>
                )
            )}
        </Grid>
    )
}