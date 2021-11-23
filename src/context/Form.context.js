import React, { createContext } from "react";
import { NewEstimation } from "../data/newEstimation";

export const FormContext = React.createContext({
  form: {},
  handleChange: () => {}
});

// export const FormContext = createContext(initialState);
