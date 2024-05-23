import React from "react";

export const Skeleton = () => {
  return (
    <div className="pokecard__skeleton ds-flex flow-col-nw gap-md">
      <div className="pokecard__skeleton__image radius-sm" />

      <div className="ds-flex flow-col-nw gap-xs">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="pokecard__skeleton__item radius-3xs" />
        ))}
      </div>
    </div>
  );
};
