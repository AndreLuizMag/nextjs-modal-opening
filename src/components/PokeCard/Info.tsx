import React, { FC, HTMLAttributes, ReactNode } from "react";

interface InfoProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  children: ReactNode;
}

export const Info: FC<InfoProps> = ({ name, children }) => {
  return (
    <span className="ds-inline-flex gap-xs">
      <b>{name}:</b>
      {children}
    </span>
  );
};
