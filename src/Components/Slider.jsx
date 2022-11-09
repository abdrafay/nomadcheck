// React
import {useState} from 'react';

// Material UI
import { styled } from '@mui/material/styles';
import {Box, Grid, Typography, Slider} from '@mui/material';
import MuiInput from '@mui/material/Input';
// import VolumeUp from '@mui/icons-material/VolumeUp';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider(props) {
    const [value, setValue] = useState(0);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    // const handleInputChange = (event) => {
    //     setValue(event.target.value === '' ? '' : Number(event.target.value));
    // };

    // const handleBlur = () => {
    //     if (value < 0) {
    //         setValue(0);
    //     } else if (value > 10) {
    //         setValue(10);
    //     }
    // };

    return (
        <Box id={props.id} sx={{ width: "75%" }}>

            <Grid container spacing={1} sx={{ display: "flex" }} alignItems="center">
                <Grid item>
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
                        sx={{ color: "#F3684A" }}
                    />
                </Grid>

            </Grid>
        </Box>
    );
}
