import axios from 'axios';

const getMoves = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/movimientos');
    return response.data;
  } catch (error) {
    alert(`Error = ${error} `);
  }
};

export default getMoves;
