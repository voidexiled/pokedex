import React, { useEffect, useState } from "react";
import HeartRed from "./assets/HeartRed";
import Rectangle8 from "./assets/Rectangle8";
import Image from "next/image";
import chevronleft from "./chevronleft.svg";
import BodyColumn from "./BodyColumn";

const typeColors = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

export default function PokemonCard({
  currentPokemon,
  ledColor,
  nextPokemon,
  previousPokemon,
}) {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  const [isHovering, setIsHovering] = useState(false);

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
          <span id="pokemonTitle" className="font-bold text-lg ">
            {(currentPokemon && capitalize(currentPokemon.name)) || "Not Found"}
          </span>
          <div
            id="camera"
            className="absolute bg-white rounded-full h-[18px] w-[62px] top-[14px] left-2/4 -translate-x-2/4 flex flex-row justify-between items-center px-2"
          >
            <span
              className={`${ledColor} transition-all w-2 h-2 rounded-full opacity-[72%]`}
            ></span>
            <span className="bg-[#404040] opacity-[72%] h-2 w-6 rounded-full"></span>
            <span
              className={`bg-[#0F0F0F] w-[5px] h-[5px] rounded-full opacity-[72%]`}
            ></span>
          </div>
          <div className="flex flex-row gap-6 h-full items-center justify-center">
            <span id="dexNumber" className="font-bold text-sm opacity-75">
              {(currentPokemon && "#" + currentPokemon.number) || "#???"}
            </span>
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
              // onMouseOver={() => setIsHovering(true)}
              // onMouseOut={() => setIsHovering(false)}
              id="pokeImage"
              // src={
              //   currentPokemon &&
              //   (isHovering
              //     ? currentPokemon.sprites.back_default
              //     : currentPokemon.sprites.front_default)
              // }
              src={
                (currentPokemon && currentPokemon.sprites.front_default) ||
                "/pokemon_not_found.png"
              }
              alt="Imagen Actual del Pokemon"
              width={220}
              height={220}
              quality="100"
              className="  transition-all transform ease-in-out "
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
            className="relative bg-stats-card bg-contain bg-center overflow-hidden bg-no-repeat  grid grid-flow-col grid-cols-custom mx-1 h-[290px] text-black pt-16"
          >
            <BodyColumn
              id="about"
              className="grid-flow-row grid-rows-about-card"
            >
              <h3 className=" text-xl justify-center align-middle text-center font-extrabold text-green-800">
                About
              </h3>
              <div className="relative flex gap-x-1 weight ">
                <span>
                  <Image
                    src="/weight.svg"
                    alt="An SVG of an eye"
                    width={24}
                    height={24}
                    quality={100}
                    className="transition-all "
                  />
                </span>
                <span id="weightSpan" className="font-thin text-base">
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
                    className="transition-all"
                  />
                </span>
                <span id="heightSpan" className="font-thin">
                  {currentPokemon && currentPokemon.height / 10} m
                </span>
              </div>
            </BodyColumn>
            <div className="col-span-1  bg-[#1d1d1d] bg-opacity-[30%] rounded-full max-h-[170px] mt-3"></div>
            <BodyColumn id="typeAndAbilitys" className="">
              aa
            </BodyColumn>
          </div>
        </div>
      </div>
    </>
  );
}
