import React, { createContext } from "react";

export const FormContext = React.createContext({
  form: {},
  handleChange: () => {}
});

// export const FormContext = createContext(initialState);
