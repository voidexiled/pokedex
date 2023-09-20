import React from "react";
import { TYPE_COLOR } from "@/services/lib/PokemonTypes";
import { Noto_Sans } from "next/font/google";
import { capitalize } from "../../../services/lib/Text";
const firasans = Noto_Sans({ weight: "400", subsets: ["latin"] });

export default function Type({ type }) {
  const typeColor = TYPE_COLOR[type];
  return (
    <>
      <div
        style={{
          backgroundColor: typeColor,
          boxShadow: " 0 0 6px 0px " + typeColor,
        }}
        className={`type grid h-[20px] px-3 rounded-full text-sm align-middle text-center  ${firasans.className}`}
      >
        <span
          style={{ textShadow: `0 0 4px #1d1d1d` }}
          className="text-[#d1d1d1] font-medium text-center align-middle m-auto"
        >
          {capitalize(type)}
        </span>
      </div>
    </>
  );
}
