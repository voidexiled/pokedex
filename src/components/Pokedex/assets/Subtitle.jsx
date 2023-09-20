import React, { useEffect } from "react";

export default function Subtitle({ children, textColor }) {
  return (
    <>
      <h3
        style={{
          color: textColor,
          textShadow: `0 0 2px #1d1d1d`,
        }}
        className={` rounded-lg px-3 text-xl justify-center align-middle text-center font-extrabold `}
      >
        {children}
      </h3>
    </>
  );
}
