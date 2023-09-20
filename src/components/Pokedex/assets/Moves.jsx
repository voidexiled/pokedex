import React from "react";
import { capitalize, space } from "../../../services/lib/Text";

export default function Moves({ moves }) {
  return (
    <>
      {moves && (
        <ul className="moves h-[100px] max-h-[120px] overflow-auto grid grid-flow-row grid-cols-1 grid-rows-4 gap-2 font-vt323 font-thin ">
          {moves.map((item, key) => {
            console.log(item);
            return (
              <li key={key} className="opacity-[72%]">
                {capitalize(space(item.ability.name))}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
