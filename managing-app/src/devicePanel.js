import React, {useEffect, useState} from 'react';
import {TextField, Stack, Switch} from "@mui/material";
import {Box, Typography, Grid} from "@mui/material";
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import {styled} from "@mui/material/styles";
import {sendGet, sendPost} from "./utils";


const AntSwitch = styled(Switch)(({theme}) => ({
    width: 28, height: 16, padding: 0, display: 'flex', '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        }, '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    }, '& .MuiSwitch-switchBase': {
        padding: 2, '&.Mui-checked': {
            transform: 'translateX(12px)', color: '#fff', '& + .MuiSwitch-track': {
                opacity: 1, backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    }, '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    }, '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

const urlParameters = "http://127.0.0.1:3005/parameters/device/"
const urlIsOn = "http://127.0.0.1:3005/parameters/device/{id}/isOn"

export default function DevicePanel({deviceId, parameters}) {
    const [values, setValues] = useState(parameters);
    const [isDeviceOn, setIsDeviceOn] = useState(false);

    useEffect(() => {
        sendPost(urlParameters.concat(deviceId), values).then(() => console.log(`Sending update ${deviceId}: ${values}`));

        async function polling() {
            const response = await sendGet(urlIsOn.replace('{id}', deviceId)).then(r => console.log(`Received is ${deviceId} on: ${r.body.isOn}`))
            setIsDeviceOn(response.body.isOn);
            setTimeout(polling, 5000);
        }

        polling()
    })

    const handleChangeOnButton = (event) => {
        setIsDeviceOn(event.target.checked);
        sendPost(urlIsOn.replace('{id}', deviceId), isDeviceOn).then(() => console.log(`Sending update ${deviceId}: ${isDeviceOn}`));
    }
    const handleChangeTextField = (event) => {
        const desiredKey = event.target.id, desiredValue = event.target.value, value = {[desiredKey]: desiredValue};
        setValues({
            ...values, ...value
        });
        sendPost(urlParameters.concat(deviceId), values).then(() => console.log(`Sending update ${deviceId}: ${values}`));
    }

    return (<Box sx={{mb: 1, mt: 1}}>
        <Typography id="input-slider" gutterBottom>
            electric device {deviceId}
        </Typography>
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <ElectricalServicesIcon/>
            </Grid>
            <Stack direction="row" spacing={2} sx={{m: 3}}>
                {Object.entries(values).map(([label, value]) => (<TextField
                    id={label}
                    label={label}
                    type="number"
                    defaultValue={value}
                    onChange={handleChangeTextField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />))}
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Off</Typography>
                <AntSwitch checked={isDeviceOn}
                           onChange={handleChangeOnButton}
                           defaultChecked inputProps={{'aria-label': 'ant design'}}/>
                <Typography>On</Typography>
            </Stack>
        </Grid>
    </Box>);

}
