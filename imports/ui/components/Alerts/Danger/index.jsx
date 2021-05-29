import React, { Fragment } from "react";

const AlertDanger = (obj) => {
  return (
    <section>
      {obj && obj.message ? (
        <Fragment>
          <div className="alert alert-danger">
            <strong>{obj.message}</strong>
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </section>
  );
};

export default AlertDanger;
