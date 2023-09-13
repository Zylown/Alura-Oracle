import { useState, createContext } from "react";

export const CounterContext = createContext(); // aca hace la implementacion de createContext

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const values = {
    count: count,
    suma() {
      setCount((val) => val + 1);
    },
    resta() {
      setCount((val) => val - 1);
    },
    user: {
      status: "Active",
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJzdGF0dXMiOiJvbmxpbmUifQ.lCg6KWiP0-MKaAbusLwDCqOxfYiumSKeLXmKI13m4nc",
      theme: "light",
    },
  };
  return (
    <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
  );
};
