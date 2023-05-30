import axios from 'axios';

const API_URL = 'https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0#/auth/getToken';

// Función para autenticar al usuario y obtener un token de acceso
export const loginApi = async (email, password) => {
  try {
    const response = await axios.post(API_URL, {
      email,
      password,
    });
    return response.data.token;
  } catch (error) {
    console.error('Error en la autenticación:', error);
    throw error;
  }
};
