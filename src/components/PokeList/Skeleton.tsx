import React, { FC, HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  count?: number;
}

export const Skeleton: FC<SkeletonProps> = ({ count = 4 }) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <div key={index} className="pokelist__item__skeleton radius-sm" />
      ))}
    </>
  );
};
