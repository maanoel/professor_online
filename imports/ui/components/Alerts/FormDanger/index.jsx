import React from "react";

const FormDanger = ({ errorMessage }) => {
  return (
    <div className="alert alert-danger user-form-danger" role="alert">
      Ocorreu um erro no momento da realização do seu cadastro.
      <br />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormDanger;
