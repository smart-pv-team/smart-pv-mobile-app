import React, {useEffect, useState} from 'react';
import {TextField, Stack, Switch, Checkbox, FormControlLabel} from "@mui/material";
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

const urlParameters = "http://127.0.0.1:8080/managing/parameters/device/"
const urlIsOn = "http:///127.0.0.1:8080/managing/parameters/device/{id}/isOn"

export default function DevicePanel({deviceId, parameters}) {
    const [values, setValues] = useState(parameters);
    const [isDeviceOn, setIsDeviceOn] = useState(false);
    const [isLocked, setIsLocked] = useState(false);

    useEffect(() => {
        sendPost(urlParameters.concat(deviceId), values).then(() => console.log(`Sending update ${deviceId}: ${values}`));

        async function polling() {
            const response = await sendGet(urlIsOn.replace('{id}', deviceId)).then(response => response.json());
            setIsDeviceOn(response);
            setTimeout(polling, 20000);
        }

        polling()
    }, [])

    useEffect(() => {
        sendPost(urlIsOn.replace('{id}', deviceId), {"isOn": isDeviceOn}).then(() => console.log(`Sending update ${deviceId}: ${isDeviceOn}`));
    }, [isDeviceOn]);

    useEffect(() => {
        sendPost(urlParameters.concat(deviceId), values).then(() => console.log(`Sending update ${deviceId}: ${values}`));
    }, [values]);

    const handleChangeOnButton = (event) => {
        setIsDeviceOn(event.target.checked);
        setIsLocked(false);
        const desiredKey = "isOn", desiredValue = event.target.checked, value = {[desiredKey]: desiredValue};
        setValues({
            ...values, ...value
        });
    }
    const handleChangeTextField = (event) => {
        const desiredKey = event.target.id, desiredValue = event.target.value, value = {[desiredKey]: desiredValue};
        setValues({
            ...values, ...value
        });
    }
    const handleChangeIsLockedCheckbox = (event) => {
        setIsLocked(event.target.checked);
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
                {Object.entries(values).filter(([label, value]) => {
                    return label !== "isOn" && label !== "isLocked"
                }).map(([label, value]) => (<TextField
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
                
                <FormControlLabel
                    control = {<Checkbox
                        checked={isLocked}
                        onChange={handleChangeIsLockedCheckbox}
                    />}
                    label="auto"
                />
            </Stack>
        </Grid>
    </Box>);

}
