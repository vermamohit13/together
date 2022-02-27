import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
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
  const [ml,setMl]=useState(false);
  const [cp,setCp]=useState(false);
  const [cs,setCs]=useState(false);
  const [ai,setAi]=useState(false);
  const [sig,setSig]=useState(false);
  const [com,setCom]=useState(false);
  const [mat,setMat]=useState(false);

  
  return (
    <FormControl component="fieldset">
      <label>Please indicate the fields in which you are interested :</label>
      <FormGroup aria-label="position" row>
        <FormLabel component="legend">Technical:</FormLabel>

        <FormControlLabel
          value="ml"
          onChange={(e) => setMl((d)=>(!d))}
          control={<Checkbox />}
          label="Machine Learning"
        />
        <FormControlLabel
          value="cp"
          onChange={(e) => setCp((d)=>(!d))}
          control={<Checkbox />}
          label="Competitive Programming"
        />
        <FormControlLabel
          value="cybersecurity"
          onChange={(e) => setCs((d)=>(!d))}
          control={<Checkbox />}
          label="Cyber Security"
        />
        <FormControlLabel
          value="AI"
          onChange={(e) => setAi((d)=>(!d))}
          control={<Checkbox />}
          label="Artificial Intelligence "
        />
        <FormLabel component="legend">Electrical:</FormLabel>

        <FormControlLabel
          value="signals"
          onChange={(e) => setSig((d)=>(!d))}
          control={<Checkbox />}
          label="Analog / Mixed Signals"
        />
        <FormControlLabel
          value="material"
          onChange={(e) => setMat((d)=>(!d))}
          control={<Checkbox />}
          label="Materials And Devices"
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
