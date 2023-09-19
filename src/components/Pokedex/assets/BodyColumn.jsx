import React from "react";
export default function BodyColumn({ children, className = "" }) {
  return (
    <div
      className={`grid grid-flow-row max-h-[200px] mx-4 justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
}
