import { useState, useRef } from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


function App() {

  let [resultant, setResultant] = useState(0)

  const textRef = useRef<HTMLFormElement>(null);

  
  const add = () => {
    setResultant(resultant + Number(textRef.current?.value))
  };
  const minus = () => {
    setResultant(resultant - Number(textRef.current?.value))
  };
  const multiply = () => {
    setResultant(resultant * Number(textRef.current?.value))
  };
  const divide = () => {
    setResultant(resultant / Number(textRef.current?.value))
  };
  const reset = () => {
    setResultant(0)
  };

  return (

    <Box sx={{ flexGrow: 2 }}>
      <Grid  container>
        <Grid item xs={12}>
          <h2>A Simple React Calculator</h2>
          <h4>Result: {resultant}</h4>
          <Box component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-number"
                type='number'
                inputRef={textRef}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={add}> Add </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={minus}> Minus </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={multiply}> Multiply </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={divide}> Divide </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={reset}> Reset Result </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
