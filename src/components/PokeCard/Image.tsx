import React, { FC, HTMLAttributes } from "react";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

export const Image: FC<ImageProps> = ({ src, alt }) => {
  return (
    <div className="pokecard__image width-100 p-block-10 p-inline-6 ds-flex-center radius-sm">
      <img src={src} alt={alt} />
    </div>
  );
};
