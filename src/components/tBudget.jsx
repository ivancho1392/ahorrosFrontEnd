import React, { useState } from 'react';
import getMoves from '../services/getMov';

const tBudget = () => {
  const [objArray, setObjArray] = useState([]);

  const handleGetMove = async () => {
    try {
      const data = await getMoves();
      const newArray = data.map(item => {
        const total = Object.keys(item).reduce((acc, key) => {
          if (key === "general" || key === "imprevistos" || key === "mascotas" || key === "carro" || key === "medico" || key === "ocio") {
            return acc + item[key];
          } else {
            return acc;
          }
        }, 0);
        return {
          ...item,
          total
        }
      });

      const totalSaved = newArray.reduce((acc, item) => {
        return acc + item.total;
      }, 0);
      console.log(totalSaved);
      setObjArray(newArray);
    } catch (error) {
      alert(`Error ${error}`);
    }
  };

  return (
    <div>
      <button id="moveButtons" onClick={handleGetMove}>Get Moves</button>
      <div className="object-array">
        {/* Muestra los objetos recibidos en el estado */}
        {objArray.length > 0 && (
          <table className="table-styling">
            <thead>
              <tr>
                {Object.keys(objArray[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {objArray.map((obj) => (
                <tr key={obj.id}>
                  {Object.values(obj).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default tBudget;
