import React, { useEffect, useState } from "react";
import HeartRed from "./assets/HeartRed";
import Image from "next/image";
import BodyColumn from "./assets/BodyColumn";
import Subtitle from "./assets/Subtitle";
import { TYPE, TYPE_COLOR } from "../../services/lib/PokemonTypes";
import Type from "./assets/Type";
import Moves from "./assets/Moves";

export default function PokemonCard({
  currentPokemon,
  ledColor,
  nextPokemon,
  previousPokemon,
}) {
  const [types, setTypes] = useState([]);
  const [textColor, setTextColor] = useState("#1d1d1d");
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const handleTextColor = (type) => {
    if (type) {
      const typeName = type.type.name;
      const typeColor = TYPE_COLOR[typeName];
      setTextColor(typeColor);
    }
  };
  useEffect(() => {
    if (currentPokemon) {
      setTypes(currentPokemon.types);

      handleTextColor(types[0]);
    }
  }, [types, currentPokemon]);
  useEffect(() => {
    const camera = document.getElementById("led");
    camera.style.background = ledColor;
  }, [ledColor]);

  return (
    <>
      <div
        id="Card"
        className="non-selectable overflow-hidden relative flex flex-col m-auto h-[600px] w-[380px] bg-[#1D1D1D] shadow-2xl rounded-3xl p-2 text-white  font-vt323 "
      >
        <div
          id="CardHeader"
          className=" p-4 flex flex-row justify-between items-center h-14"
        >
          <h2 id="pokemonTitle" className="font-bold text-lg ">
            {(currentPokemon && capitalize(currentPokemon.name)) || "Not Found"}
          </h2>
          <div
            id="camera"
            className="absolute bg-white rounded-full h-[18px] w-[62px] top-[14px] left-2/4 -translate-x-2/4 flex flex-row justify-between items-center px-2"
          >
            <span
              id="led"
              className={`transition-all w-2 h-2 rounded-full opacity-[72%]`}
            ></span>
            <span className="bg-[#404040] opacity-[72%] h-2 w-6 rounded-full"></span>
            <span
              className={`bg-[#0F0F0F] w-[5px] h-[5px] rounded-full opacity-[72%]`}
            ></span>
          </div>
          <div className="flex flex-row gap-6 h-full items-center justify-center">
            <h3 id="dexNumber" className="font-bold text-sm opacity-75">
              {(currentPokemon && "#" + currentPokemon.number) || "#???"}
            </h3>
            <div className="p-2 bg-white rounded-md group transition-all box-border">
              <HeartRed className="w-4 h-4 m-auto transition-all group-hover:scale-[145%] group-active:scale-[130%]" />
            </div>
          </div>
        </div>
        <div id="CardBody" className=" h-full w-full p-1 flex flex-col">
          <div
            id="PokemonViewer"
            className=" flex flex-row justify-between items-center"
          >
            <span>
              <Image
                src="/chevron-left.svg"
                alt="An SVG of an eye"
                width={64}
                height={64}
                className="transition-all hover:cursor-pointer hover:scale-125"
                onClick={previousPokemon}
              />
            </span>
            <Image
              id="pokeImage"
              src={
                (currentPokemon && currentPokemon.sprites.front_default) ||
                "/pokemon_not_found.png"
              }
              alt="Imagen Actual del Pokemon"
              width={220}
              height={220}
              quality="65"
              className="pokeImg transition-all transform ease-in-out "
            ></Image>
            <Image
              src="/chevron-right.svg"
              alt="An SVG of an eye"
              width={64}
              height={64}
              className="transition-all hover:cursor-pointer hover:scale-125"
              onClick={nextPokemon}
            />
          </div>
          <div
            id="StatsViewer"
            className="relative bg-stats-card bg-contain bg-center overflow-hidden bg-no-repeat  grid grid-flow-col grid-cols-custom mx-1 h-[290px] text-black pt-10"
          >
            <BodyColumn
              id="about"
              className="grid-flow-row grid-rows-about-card"
            >
              <Subtitle textColor={textColor}> About</Subtitle>
              <div className="relative flex gap-x-1 weight ">
                <span>
                  <Image
                    src="/weight.svg"
                    alt="An SVG of an eye"
                    width={24}
                    height={24}
                    quality={100}
                    className="transition-all opacity-[72%] "
                  />
                </span>
                <span
                  id="weightSpan"
                  className="font-thin text-base opacity-[72%]"
                >
                  {currentPokemon && currentPokemon.weight / 10} kg
                </span>
              </div>
              <div className="relative flex gap-x-1 height">
                <span>
                  <Image
                    src="/height.svg"
                    alt="An SVG of an eye"
                    width={24}
                    height={24}
                    quality={100}
                    className="transition-all opacity-[72%]"
                  />
                </span>
                <span id="heightSpan" className="font-thin opacity-[72%]">
                  {currentPokemon && currentPokemon.height / 10} m
                </span>
              </div>
            </BodyColumn>
            <div className="col-span-1  bg-[#1d1d1d] bg-opacity-[30%] rounded-full max-h-[225px] mt-3"></div>
            <BodyColumn
              id="typeAndAbilitys"
              className="grid-flow-row grid-rows-moves "
            >
              <Subtitle textColor={textColor}>Types</Subtitle>
              <div className="flex  w-full h-[24px] justify-center gap-x-2 items-center">
                {types.map((key, type) => {
                  console.log(key);
                  return <Type key={type} type={key.type.name}></Type>;
                })}
              </div>
              <Subtitle textColor={textColor}>Moves</Subtitle>
              <Moves moves={currentPokemon && currentPokemon.abilities}></Moves>
            </BodyColumn>
          </div>
        </div>
      </div>
    </>
  );
}
