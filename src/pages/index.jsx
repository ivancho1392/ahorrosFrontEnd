import { useState } from 'react';
import TableWrapper from '../components/tBudgetWrapper';
import TableWrapperMov from '../components/tMovementWrapper';
import FormAddMoveWrapper from '../components/formAddMoveWrapper';
import GraphWrapper from '../components/graphWrapper';
import DelMoveWrapper from '../components/deleteMove/deleteMoveWrapper';

function Boton(props) {
  return (
    <div id="buttons" className={props.className} >
      <button onClick={props.onClick}>{props.texto}</button>
    </div>
  );
}   

const LoginPage = () => {
  const [showTBudget, setShowTBudget] = useState(false);
  const [showTMovement, setShowTMovement] = useState(false);
  const [showAMovement, setShowAMovement] = useState(false);
  const [showDelMove, setShowDelMove] = useState(false);

  const handledTBudgetToggle = () => {
    setShowAMovement(false);
    setShowDelMove(false);
    setShowTMovement(false);
    setShowTBudget((prev) => !prev);
  };

  const handledTMovementToggle = () => {
    setShowAMovement(false);
    setShowDelMove(false);
    setShowTBudget(false);
    setShowTMovement((prev) => !prev);
  };

  const handledAMovementToggle = () => {
    setShowTMovement(false);
    setShowDelMove(false);
    setShowTBudget(false);
    setShowAMovement((prev) => !prev);
  };

  const handledDelMoveToggle = () => {
    setShowTMovement(false);
    setShowAMovement(false);
    setShowTBudget(false);
    setShowDelMove((prev) => !prev);
  };

  return (
    <div className="maincontainer">
      <nav className="total">TOTAL SAVED: $630</nav>
      <main>
        <DelMoveWrapper showDelMove={showDelMove} />
        <TableWrapper showTable={showTBudget} />
        <TableWrapperMov showTable={showTMovement} />
        <FormAddMoveWrapper showForm={showAMovement} />
      </main>
      <div id="sidebar">
        <Boton className="buttonBudget" onClick={handledTBudgetToggle} texto="SEE ALL MOVEMENTS" />
        <Boton className="buttonMovement" onClick={handledTMovementToggle} texto="SEARCH MOVEMENT BY ID" />
        <Boton className="buttonAMovement" onClick={handledAMovementToggle} texto="ADD NEW MOVEMENT" />
        <Boton className="buttonGraph" onClick={handledDelMoveToggle} texto="DELETE MOVEMENT" />
      </div>
      <div id="content1"></div>
      <div id="content2"></div>
      <div id="content3"></div>
      <div id="footer"></div>
    </div>
  );
};

export default LoginPage;
