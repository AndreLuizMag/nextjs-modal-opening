import React, { FC, HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="pokecard width-100 ds-flex flow-col-nw gap-md p-10 radius-lg">
      {children}
    </div>
  );
};
