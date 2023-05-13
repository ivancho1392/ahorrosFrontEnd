import React, { useState } from 'react';
import GraphBar from './graphBars';
import sendNewMove from '../services/postMov';

const FormAddMove = () => {
  const [formData, setFormData] = useState({
    "general": 0,
    "medico": 0,
    "mascotas": 0,
    "carro": 0,
    "ocio": 0,
    "imprevistos": 0,
    "descripcion": "Descripción",
    "tipo": "Inc",
    "fecha": "13/05/23"
    });
  const [changeData, setChangeData] = useState(Object.values(formData));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crea un nuevo objeto con los valores ingresados por el usuario
    const newData = {
      "general": parseInt(formData.general),
      "medico": parseInt(formData.medico),
      "mascotas": parseInt(formData.mascotas),
      "carro": parseInt(formData.carro),
      "ocio": parseInt(formData.ocio),
      "imprevistos": parseInt(formData.imprevistos),
    };
    const newDatatoSend = {
      ...formData,
      "descripcion": formData.descripcion,
      "tipo": formData.tipo,
      "fecha": formData.fecha
    };
    
    setChangeData(Object.values(newData));
    console.log(newDatatoSend);
    sendNewMove(newDatatoSend);
  };

  return (
    <div className="formAddMove">
      <form method="POST" action="addMovement">
        PLEASE ENTER THE VALUE CORRESPONDING TO THE AMOUNT YOU ENTERED IN EACH ACCOUNT
        <br />
        <label for="general">General:</label>
        <input id="input" name="general" value={formData.general} onChange={(e) => setFormData({ ...formData, general: e.target.value })}></input>
        <br />
        <label for="medico">Medic:</label>
        <input id="input" name="medico" value={formData.medico} onChange={(e) => setFormData({ ...formData, medico: e.target.value })}></input>
        <br />
        <label for="Mascotas">Pets:</label>
        <input id="input" name="mascotas" value={formData.mascotas} onChange={(e) => setFormData({ ...formData, mascotas: e.target.value })}></input>
        <br />
        <label for="Carro">Car:</label>
        <input id="input" name="carro" value={formData.carro} onChange={(e) => setFormData({ ...formData, carro: e.target.value })}></input>
        <br />
        <label for="ocio">Leisure:</label>
        <input id="input" name="ocio" value={formData.ocio} onChange={(e) => setFormData({ ...formData, ocio: e.target.value })}></input>
        <br />
        <label for="imprevistos">Unexpected:</label>
        <input id="input" name="imprevistos" value={formData.imprevistos} onChange={(e) => setFormData({ ...formData, imprevistos: e.target.value })}></input>
        <br />
        <label for="descripcion">Description:</label>
        <textarea id="input" name="descripcion" value={formData.descripcion} onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}></textarea>
        <br />
        <label for="tipo">Tipe:</label>
        <select id="input" name="tipo" value={formData.tipo} onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}>
          <option value="Incom">In</option>
          <option value="Outcom">Out</option>
        </select>
        <br />
        <label for="fecha">Date:</label>
        <input id="input" placeholder="dd/mm/aa" name="fecha" value={formData.fecha} onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}></input>
        <br />
        <input type="submit" value="Send" onClick={handleSubmit}></input>
        <br />
      </form>
      <GraphBar data={changeData} />
    </div>
  );
};

export default FormAddMove;
