import React, { FC, HTMLAttributes, ReactNode } from "react";

interface ListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const List: FC<ListProps> = ({ children }) => {
  return <div className="pokelist ds-flex flow-row-wr gap-sm">{children}</div>;
};
