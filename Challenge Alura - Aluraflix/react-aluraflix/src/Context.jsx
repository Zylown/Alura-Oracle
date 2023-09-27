import React, { createContext } from "react";

export const DataCarruselContext = createContext();

const CounterProvider = ({ children }) => {
  return (
    <DataCarruselContext.Provider>
      {children}
    </DataCarruselContext.Provider>
  );
};
