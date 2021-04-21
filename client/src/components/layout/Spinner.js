import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export const Spinner = () => {
  return (
    <div>
      <Fragment>
        <img
          src={spinner}
          alt="Loading..."
          style={{ width: 200, margin: "auto", display: "block" }}
        />
      </Fragment>
    </div>
  );
};