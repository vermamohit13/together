import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPosition() {
  const [interest, setinterest] = React.useState({
    ml: false,
    cp: false,
    cs: false,
    ai:false,
    sig:false,
    com:false,
    mat:false,
    photo:false,
  });
  
  return (
    <FormControl component="fieldset">
      <label>Please indicate the fields in which you are interested :</label>
      <FormGroup aria-label="position" row>
        <FormLabel component="legend">Technical:</FormLabel>

        <FormControlLabel
          value="ml"
          onChange={(e) => setinterest((d)=>(!d.ml))}
          control={<Checkbox />}
          label="Machine Learning"
        />
        <FormControlLabel
          value="cp"
          control={<Checkbox />}
          label="Competitive Programming"
        />
        <FormControlLabel
          value="cybersecurity"
          control={<Checkbox />}
          label="Cyber Security"
        />
        <FormControlLabel
          value="AI"
          control={<Checkbox />}
          label="Artificial Intelligence "
        />
        <FormLabel component="legend">Electrical:</FormLabel>

        <FormControlLabel
          value="signals"
          control={<Checkbox />}
          label="Analog / Mixed Signals"
        />
        <FormControlLabel
          value="S"
          control={<Checkbox />}
          label="Communication "
        />
        <FormControlLabel
          value="material"
          control={<Checkbox />}
          label="Materials And Devices"
        />
        <FormControlLabel
          value="photonics"
          control={<Checkbox />}
          label="Photonics"
        />
        <FormLabel component="legend">Others:</FormLabel>

        <FormControlLabel
          value="games"
          control={<Checkbox />}
          label="Games"
        />
        <FormControlLabel
          value="communication"
          control={<Checkbox />}
          label="Communication "
        />
        <FormControlLabel
          value="material"
          control={<Checkbox />}
          label="Materials And Devices"
        />
        <FormControlLabel
          value="photonics"
          control={<Checkbox />}
          label="Photonics"
        />


      </FormGroup>
    </FormControl>
  );
}
