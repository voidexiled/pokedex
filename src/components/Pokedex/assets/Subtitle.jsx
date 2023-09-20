import React, { useEffect } from "react";

export default function Subtitle({ children, textColor }) {
  return (
    <>
      <h3
        style={{
          color: textColor,
          textShadow: `0 0 1px rgba(15,15,15,0.18)`,
        }}
        className={` rounded-lg px-3 text-xl justify-center align-middle text-center font-extrabold `}
      >
        {children}
      </h3>
    </>
  );
}
