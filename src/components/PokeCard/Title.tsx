import React, { FC, HTMLAttributes, ReactNode } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const Title: FC<TitleProps> = ({ children }) => {
  return <h3>{children}</h3>;
};
