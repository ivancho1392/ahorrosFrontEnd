import React, { useState } from 'react';
import GraphBar from './graphBars';

const FormAddMove = () => {
  const [formData, setFormData] = useState({
    general: '0',
    medico: '0',
    Mascotas: '0',
    Carro: '0',
    ocio: '0',
    imprevistos: '0',
    descripcion: 'Descripción',
    tipo: 'in/out',
    fecha: 'dd/mm/aa',
  });
  const [changeData, setChangeData] = useState(Object.values(formData));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Crea un nuevo objeto con los valores ingresados por el usuario
    const newData = {
      general: formData.general,
      medico: formData.medico,
      Mascotas: formData.Mascotas,
      Carro: formData.Carro,
      ocio: formData.ocio,
      imprevistos: formData.imprevistos,
    };
    setChangeData(Object.values(newData));
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
        <input id="input" name="Mascotas" value={formData.Mascotas} onChange={(e) => setFormData({ ...formData, Mascotas: e.target.value })}></input>
        <br />
        <label for="Carro">Car:</label>
        <input id="input" name="Carro" value={formData.Carro} onChange={(e) => setFormData({ ...formData, Carro: e.target.value })}></input>
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
        <input id="input2" placeholder="In/Out" name="tipo" value={formData.tipo} onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}></input>
        <br />
        <label for="fecha">Date:</label>
        <input id="input" placeholder="dd/mm/aa" name="fecha" value={formData.fecha} onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}></input>
        <br />
        <input type="submit" value="Enviar" onClick={handleSubmit}></input>
        <br />
      </form>
      <GraphBar data={changeData} className="resumeMove"/>
    </div>
  );
};

export default FormAddMove;
