import React from 'react';
import FormAddMove from './formAddMove';

const FormAddMoveWrapper = ({ showForm }) => {
  if (!showForm) {
    return null;
  }

  return (
    <div className="formAddMove">
      <FormAddMove />
    </div>
  );
};

export default FormAddMoveWrapper;
