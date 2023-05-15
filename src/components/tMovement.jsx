import React, { useState } from 'react';
import getMovesId from '../services/getMovId';

const tMovement = () => {
  const [objArray, setObjArray] = useState([]);
  const [idInput, setIdInput] = useState('');

  const handleGetMove = async () => {
    if(idInput){
      try {
        const data = await getMovesId(idInput);
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
      <label>Enter the ID of the move you want to search for:</label>
      <input id="input" type="text" value={idInput} onChange={handleInputChange} />
      <button id="moveButtons" onClick={handleGetMove}>Get Moves By Id</button>
      </div>
      <div className="object-array">
        {objArray && (
          <table className="table-styling">
            <tbody>
              {Object.entries(objArray).map(([key, value]) => (
                <tr key={key}>
                  <th>{key}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default tMovement;
