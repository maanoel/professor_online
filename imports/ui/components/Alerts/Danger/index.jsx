import React, { Fragment } from "react";

const AlertDanger = (obj) => {
  console.log(obj);
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
