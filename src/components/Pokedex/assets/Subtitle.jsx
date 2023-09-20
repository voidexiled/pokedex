import React, { useEffect } from "react";
import { Nunito_Sans } from "next/font/google";
const mooli = Nunito_Sans({ subsets: ["latin"] });

export default function Subtitle({ children, textColor }) {
  return (
    <>
      <h3
        style={{
          color: textColor,
          textShadow: `0 0 1px rgba(15,15,15,0.18)`,
        }}
        className={` rounded-lg px-3 text-xl tracking-[0.1em] justify-center align-middle text-center font-extrabold ${mooli.className}`}
      >
        {children}
      </h3>
    </>
  );
}
