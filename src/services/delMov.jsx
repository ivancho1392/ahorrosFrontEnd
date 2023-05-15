import axios from 'axios';

const delMovesId = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/api/v1/movimientos/${id}`);
    alert(`Movement with Id = ${id} deleted succesfully`);
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

export default delMovesId;
