import axios from 'axios';


  const sendNewMove = async (newMoveData) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/movimientos', newMoveData);
      alert(`Movement added succesfully`);
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          alert('Incorrect or Incomplete Information'); 
        }else {
          alert(`Error = ${error} `);
        }
      }
      else {
        alert(`Error = ${error} `);
      } 
    }
  };

export default sendNewMove;