import { createContext, useState } from "react";
import React from "react";
const DescriptionContext = createContext();

export function DescriptionProvider({ children }) {
  const [piece, setPiece] = useState({});

  const addToDescription = (arg) => {
    setPiece(arg);
  };
  return (
    <DescriptionContext.Provider value={{ piece, addToDescription }}>
      {children}
    </DescriptionContext.Provider>
  );
}
export default DescriptionContext;
