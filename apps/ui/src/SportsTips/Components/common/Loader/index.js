import spinnerSVG from "./spinner.svg";
import React from "react";
import { SpinnerImage } from "./styles";
function Loader() {
  return (
    <center>
      <SpinnerImage src={spinnerSVG} />
    </center>
  );
}

export default Loader;
