import { useState } from 'react';
import Image from 'next/image';
import TableWrapper from '../components/tBudgetWrapper';
import TableWrapperMov from '../components/tMovementWrapper';
import FormAddMove from '../components/formAddMove';
import FormAddMoveWrapper from '../components/formAddMoveWrapper';

const LoginPage = () => {
  const [showTBudget, setShowTBudget] = useState(false);
  const [showTMovement, setShowTMovement] = useState(false);
  const [showAMovement, setShowAMovement] = useState(false);

  const handledTBudgetToggle = () => {
    setShowTBudget((prev) => !prev);
  };

  const handledTMovementToggle = () => {
    setShowTMovement((prev) => !prev);
  };

  const handledAMovementToggle = () => {
    setShowAMovement((prev) => !prev);
  };

  return (
    <div className="maincontainer">
      <nav className='total'>
        TOTAL SAVED: $630
      </nav>
      <main>
        <Image src="/GRAFICO1.PNG" className='grafico1' alt="" width={450} height={250} quality={100} />
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
      </div>
      <div id="content1">Content1</div>
      <div id="content2">Content2</div>
      <div id="content3">Content3</div>
      <div id="footer">Footer</div>
    </div>
  );
};

export default LoginPage;
