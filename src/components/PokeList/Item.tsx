import Link from "next/link";
import React, { FC, HTMLAttributes, ReactNode } from "react";

interface ItemProps extends HTMLAttributes<HTMLLinkElement> {
  href: string;
  children: ReactNode;
}

export const Item: FC<ItemProps> = ({ href, children }) => {
  return (
    <Link
      scroll={false}
      href={href}
      className="pokelist__item p-6 text-decoration-none line-height-none color-blue-dark hover:bgc-blue-light font-weight-500 radius-sm"
    >
      {children}
    </Link>
  );
};
