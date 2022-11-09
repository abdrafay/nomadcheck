import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
// import VolumeUp from '@mui/icons-material/VolumeUp';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider(props) {
    const [value, setValue] = React.useState(0);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 10) {
            setValue(10);
        }
    };

    return (
        <Box id={props.id} sx={{ width: "75%" }}>

            <Grid container spacing={1} sx={{ display: "flex" }} alignItems="center">
                <Grid item>
                    {/* <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 10,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    /> */}
                    <Typography style={{ marginRight: "10px",fontFamily:"poppins",fontSize:"11px" }}>{value}{props.action}</Typography>
                </Grid>
                <Grid item xs>

                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        dafaultValue={0}
                        step={1}
                        min={0}
                        max={10}
                        // color={"#F3684A"}
                        sx={{ color: "#F3684A" }}
                    />
                </Grid>

            </Grid>
        </Box>
    );
}
