import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const Input = styled(MuiInput)`
  width: 42px;
`;

const url = "http://127.0.0.1:3005/measurement/device/"

export default function InputSlider(id) {
    const [value, setValue] = React.useState(30);
    const sliderUrl = url.concat(id.id);
    const sendUpdate = async (value) => {
        await fetch(sliderUrl, {
            method: 'POST',
            body: JSON.stringify({
                "measurement": value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        sendUpdate(newValue).then(() => console.log(`Sending update ${id.id}: ${newValue}`));
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
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
