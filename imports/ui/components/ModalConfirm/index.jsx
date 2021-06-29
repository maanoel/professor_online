import React, { useState } from "react";

import "./styles.css";

const ModalConfirm = ({ modalTitle, modalBody, callBackConfirm }) => {
  return (
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{modalTitle}</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">{modalBody}</div>
        <div className="modal-footer">
          <button
            id="cancel-confirm"
            type="button"
            className="btn btn-secondary modal-button"
            data-dismiss="modal"
          >
            Cancelar
          </button>
          <button
            data-dismiss="modal"
            type="button"
            className="btn btn-primary modal-button"
            onClick={() => callBackConfirm()}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
