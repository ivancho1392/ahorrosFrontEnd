import React, { useState } from 'react';
import delMovesId from '../../services/delMov';

const DeleteMove = () => {
  const [objArray, setObjArray] = useState([]);
  const [idInput, setIdInput] = useState('');

  const handleDelMove = async () => {
    if(idInput){
      try {
        const data = await delMovesId(idInput);
        setObjArray(data);
      } catch (error) {
        alert(`Error ${error}`);
      }
    }else{
      alert('Enter an Id please');
    }
  };

  const handleInputChange = (event) => {
    setIdInput(event.target.value);
  };

  return (
    <div>
      <div className="moves_containers">
        <label>Enter the ID of the move you want to delete:</label>
        <input id="input" type="text" value={idInput} onChange={handleInputChange} />
        <button id="moveButtons" onClick={handleDelMove}>
          Delete move
        </button>
      </div>
    </div>
  );
};

export default DeleteMove;
