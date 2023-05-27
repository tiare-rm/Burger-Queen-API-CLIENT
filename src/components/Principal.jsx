import React from 'react';
import { Button } from '@material-ui/core';
import logofinal from '../imagenes'

const principal = () => {
  return (
    <div>
      <img src= {logofinal} alt='Logofinal' />
      <div style={{ display: 'flex', justifyContent: 'center' }}></div>
      <Button onClick={() => handleButtonClick('loginAdmi')}>ADMINISTRADOR</Button>
      <Button onClick={() => handleButtonClick('loginCocina')}>COCINA</Button>
      <Button onClick={() => handleButtonClick('loginMesero')}>MESERO</Button>
    </div>
  );
};

export default principal
