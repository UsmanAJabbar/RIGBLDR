import React from "react";

const initialState = {
  selected: {
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
