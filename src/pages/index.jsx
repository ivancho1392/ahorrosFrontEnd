import React, { useState } from 'react';
import TableWrapper from '../components/tBudgetWrapper';
import TableWrapperMov from '../components/tMovementWrapper';
import FormAddMoveWrapper from '../components/formAddMoveWrapper';
import GraphWrapper from '../components/graphWrapper';
import DelMoveWrapper from '../components/deleteMove/deleteMoveWrapper';
import { Button } from '../components/button';
import { TotalSaved } from '../components/totalSaved';
import styles from './index.module.css'

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
    <div className={styles.maincontainer}>
       <TotalSaved  
       className="total"
       valor="630"/>

      <main>
        <DelMoveWrapper showDelMove={showDelMove} />
        <TableWrapper showTable={showTBudget} />
        <TableWrapperMov showTable={showTMovement} />
        <FormAddMoveWrapper showForm={showAMovement} />
      </main>

      <div id="sidebar">
        <Button 
        className="buttonBudget" 
        onClick={handledTBudgetToggle} 
        texto="SEE ALL MOVEMENTS" />

        <Button 
        className="buttonMovement" 
        onClick={handledTMovementToggle} 
        texto="SEARCH MOVEMENT BY ID" />

        <Button 
        className="buttonAMovement" 
        onClick={handledAMovementToggle} 
        texto="ADD NEW MOVEMENT" />

        <Button 
        className="buttonGraph" 
        onClick={handledDelMoveToggle} 
        texto="DELETE MOVEMENT" />

      </div>
      <div id="content1"></div>
      <div id="content2"></div>
      <div id="content3"></div>
      <div id="footer"></div>
    </div>
  );
};

export default LoginPage;
