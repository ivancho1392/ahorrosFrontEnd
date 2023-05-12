import react from 'react';

const FormAddMove = () => {
  return (
    <div className="formAddMove">
      <form method="POST" action="addMovement">
        Por favor ingrese el valor correspondiente al monto que ingreso en cada item.
        <br />
        <label for="general">General:</label>
        <input id="text" name="general"></input>
        <br />

        <label for="medico">Médico:</label>
        <input id="medico" name="medico"></input>
        <br />

        <label for="Mascotas">Mascotas:</label>
        <input id="Mascotas" name="Mascotas"></input>
        <br />

        <label for="Carro">Carro:</label>
        <input id="Carro" name="Carro"></input>
        <br />

        <label for="ocio">Ocio:</label>
        <input id="ocio" name="ocio"></input>
        <br />

        <label for="imprevistos">Imprevistos:</label>
        <input id="imprevistos" name="imprevistos"></input>
        <br />

        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" name="descripcion"></textarea>
        <br />

        <label for="tipo">Tipo:</label>
        <input id="tipo" name="tipo"></input>
        <br />

        <label for="fecha">Fecha:</label>
        <input id="fecha" name="fecha"></input>
        <br />

        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
};

export default FormAddMove;
