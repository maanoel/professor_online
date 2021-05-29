import React from "react";

const FormDanger = (obj) => {
  return (
    <div className="alert alert-danger user-form-danger" role="alert">
      Ocorreu um erro no momento da realização do seu cadastro.
      <br />
      <span>O usuário cadastrado já existe! </span>
    </div>
  );
};

export default FormDanger;
