import React from 'react';
import holamesero from '../imagenes';

const loginMesero = () => {
    const handleClick = () => {
        // clic del botón y las credenciales???? 
        // se colocara aca la redireccion de la pagina a los pedidos. 
    };

    return (
        <div>
            <img src={holamesero} alt='Logofinal' />
            <form>
                <label htmlFor='correo'>Ingresar Correo Electrónico</label>
                <input type='email' id='email' />
                <label htmlFor='clave'>Ingresar Clave</label>
                <input type='password' id='password' />
                <button type='submit' onClick={handleClick}>ENTRAR</button>
            </form>
        </div>
    );
};

export default loginMesero;
