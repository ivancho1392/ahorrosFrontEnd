import { useState } from 'react';
import TableWrapper from '../components/tBudgetWrapper';
import TableWrapperMov from '../components/tMovementWrapper';
import FormAddMoveWrapper from '../components/formAddMoveWrapper';
import GraphWrapper from '../components/graphWrapper';

const LoginPage = () => {
  const [showTBudget, setShowTBudget] = useState(false);
  const [showTMovement, setShowTMovement] = useState(false);
  const [showAMovement, setShowAMovement] = useState(false);
  const [showGraph, setShowGraph] = useState(true);

  const handledTBudgetToggle = () => {
    setShowAMovement(false);
    setShowTMovement(false);
    setShowTBudget((prev) => !prev);
  };

  const handledTMovementToggle = () => {
    setShowAMovement(false);
    setShowTBudget(false);
    setShowTMovement((prev) => !prev);
  };

  const handledAMovementToggle = () => {
    setShowTMovement(false);
    setShowGraph(false);
    setShowTBudget(false);
    setShowAMovement((prev) => !prev);
  };

  const handledGraphToggle = () => {
    setShowGraph((prev) => !prev);
  };

  return (
    <div className="maincontainer">
      <nav className="total">TOTAL SAVED: $630</nav>
      <main>
        <TableWrapper showTable={showTBudget} />
        <TableWrapperMov showTable={showTMovement} />
        <FormAddMoveWrapper showForm={showAMovement} />
      </main>
      <div id="sidebar">
        <div className="buttonBudget">
          <button onClick={handledTBudgetToggle}>{'BUDGET'}</button>
        </div>
        <div className="buttonMovement">
          <button onClick={handledTMovementToggle}>{'MOVEMENTS'}</button>
        </div>
        <div className="buttonAMovement">
          <button onClick={handledAMovementToggle}>{'ADD NEW MOVEMENT'}</button>
        </div>
        <div className="buttonGraph">
          <button onClick={handledGraphToggle}>{'GRAPH'}</button>
        </div>
      </div>
      <div id="content1">
        <GraphWrapper showGraph={showGraph} />
      </div>
      <div id="content2">Content2</div>
      <div id="content3">Content3</div>
      <div id="footer">Footer</div>
    </div>
  );
};

export default LoginPage;
