import React from 'react';
import Button from '@mui/material/Button';


const Contador = (props) => {
    
  return (
    <div id='contador'>
        <Button onClick={props.handleClick} variant="contained">Click me</Button>
        <p>Contador: <span>{props.contador}</span></p>
    </div>
  )
}

export default Contador