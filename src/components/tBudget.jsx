import react from 'react';

const tBudget = () => {
    return (
        <div>
        <table className="table-styling">
          <tr dangerouslySetInnerHTML={{ __html: '<th colspan="8">PRESUPUESTO PARA AHORROS FAMILIARES IVAN Y GINA</th>' }}></tr>
          <tr>
            <th>Ahorro General</th>
            <th>Ahorro Médico</th>
            <th>Ahorro Mascotas</th>
            <th>Ahorro Carro</th>
            <th>Ahorro Ocio</th>
            <th>Imprevistos</th>
            <th colspan="2">TOTAL</th>
          </tr>
          <tr>
            <td>35%</td>
            <td>20%</td>
            <td>10%</td>
            <td>10%</td>
            <td>15%</td>
            <td>10%</td>
            <th colspan="2">100%</th>
          </tr>
          <tr>
            <td>$399</td>
            <td>$228</td>
            <td>$114</td>
            <td>$114</td>
            <td>$170</td>
            <td>$114</td>
            <td>Mensual</td>
            <td>$1138</td>
          </tr>
          <tr>
            <td>$200</td>
            <td>$114</td>
            <td>$57</td>
            <td>$57</td>
            <td>$85</td>
            <td>$57</td>
            <td>Quincenal</td>
            <td>$570</td>
          </tr>
        </table>
      </div>
    )
}

export default tBudget;