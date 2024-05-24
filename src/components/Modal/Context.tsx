import React, { FC, HTMLAttributes, ReactNode } from "react";
import { createContext } from "vm";

const ModalContext = createContext();

interface ContextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ContextProvider: FC<ContextProps> = ({ children }) => {
  return (
    <ModalContext.Provider value={children}>{children}</ModalContext.Provider>
  );
};

export { ModalContext, ContextProvider };
