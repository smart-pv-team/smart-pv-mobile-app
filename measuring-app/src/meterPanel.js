import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import sendUpdate from "./utils";

const Input = styled(MuiInput)`
  width: 42px;
`;

const url = "http://127.0.0.1:3005/measurement/device/"

export default function MeterPanel(id) {
    const [value, setValue] = useState(30);
    const sliderUrl = url.concat(id.id);
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        sendUpdate(sliderUrl, {
            "measurement": newValue
        }).then(() => console.log(`Sending update ${id.id}: ${newValue}`));
    };

    const handleInputChange = (event) => {
        const newValue = event.target.value === '' ? '' : Number(event.target.value);
        setValue(newValue);
        sendUpdate(sliderUrl, {
            "measurement": newValue
        }).then(() => console.log(`Sending update ${id.id}: ${newValue}`));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <Box sx={{width: 250}}>
            <Typography id="input-slider" gutterBottom>
                electric meter {id.id}
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <ElectricBoltIcon/>
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
