import axios from 'axios';

const sendNewMove = async (newMoveData) => {
  try {
    const response = await axios.post('https://ahorrosapi.fly.dev/api/v1/movimientos', newMoveData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Error al enviar formulario');
  }
};

export default sendNewMove;