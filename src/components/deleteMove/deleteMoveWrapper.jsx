import React from 'react';
import DeleteMove from './deleteMove';

const DelMoveWrapper = ({ showDelMove }) => {
  if (!showDelMove) {
    return null;
  }

  return (
    <div className="delMove-container">
      <DeleteMove />
    </div>
  );
};

export default DelMoveWrapper;
