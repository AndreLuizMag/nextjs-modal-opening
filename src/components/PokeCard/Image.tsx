import React, { FC, HTMLAttributes } from "react";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

export const Image: FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className="width-100 p-block-10 p-inline-6 ds-flex-center">
      <img src={src} alt={alt} />
    </div>
  );
};
