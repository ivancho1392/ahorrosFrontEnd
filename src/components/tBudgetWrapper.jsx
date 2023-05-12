import React from 'react';
import TBudget from './tBudget';

const TableWrapper = ({ showTable }) => {
  if (!showTable) {
    return null;
  }

  return (
    <div className="tableBudget">
      <TBudget />
    </div>
  );
};

export default TableWrapper;
