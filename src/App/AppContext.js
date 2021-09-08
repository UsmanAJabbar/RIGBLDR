import React from "react";

const initialState = {
  selectedProduct: {
    CPU: {},
    Mobo: {},
    SSD: {},
    RAM: {},
    GPU: {},
    PSU: {},
    Case: {}
  }
}

const AppContext = React.createContext({
  ...initialState
});

export default AppContext;
