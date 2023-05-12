import React from 'react';
import TMovement from './tMovement';

const TableWrapperMov = ({ showTable }) => {
  if (!showTable) {
    return null;
  }

  return (
    <div className="tableMovement">
      <TMovement />
    </div>
  );
};

export default TableWrapperMov;
