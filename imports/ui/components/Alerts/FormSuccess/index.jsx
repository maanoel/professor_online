import React from "react";

const FormSuccess = ({ message }) => {
  return (
    <div id="sucess-alert" className="alert alert-success user-form" role="alert">
      {message}
    </div>
  );
};

export default FormSuccess;
