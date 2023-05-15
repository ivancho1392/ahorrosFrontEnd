import axios from 'axios';

const getMovesId = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/movimientos/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        alert('Id must be a number');
      } else if (error.response.status === 404) {
        alert(`Movement with Id = ${id} does not exist`);
      }
    } else {
      alert(`Error = ${error} `);
    }
  }
};

export default getMovesId;
