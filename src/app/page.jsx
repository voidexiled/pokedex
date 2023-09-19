"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { getPokemonById } from "../services/api/pokemon";
import PokemonCard from "@/components/Pokedex/PokemonCard";
import { PokemonSchema } from "../services/lib/PokemonSchema";
import NavBar from "../components/Nav/NavBar";
const SEARCH_STATES = {
  INITIAL: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: 3,
};
const ledColors = {
  error: "bg-[#E01111]",
  success: "bg-[#00FF00]",
  warning: "bg-[#FFA500]",
  loading: "bg-[#0000FF]",
  default: "bg-[#000000]",
};
export default function Main() {
  const [inputValue, setInputValue] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState(PokemonSchema);
  const [searchState, setSearchState] = useState(SEARCH_STATES.INITIAL);
  const [ledColor, setLedColor] = useState(ledColors.default);

  async function searchNextPokemon() {
    console.log("Buscando Siguiente Pokemon");
    if (currentPokemon) {
      console.log(currentPokemon.number);
      if (currentPokemon.number < 1011) {
        const nextId = currentPokemon.number + 1;
        await getPokemonById(nextId)
          .then((data) => {
            console.log(data);
            if (data && data.name) {
              setSearchState(SEARCH_STATES.SUCCESS);

              console.log(data);
            } else {
              setSearchState(SEARCH_STATES.ERROR);
            }

            beginAnimation(data);
          })
          .catch((err) => {
            console.log(err);
            setSearchState(SEARCH_STATES.ERROR);
          });
      }
    }
  }

  function searchPreviousPokemon() {
    console.log("Buscando Siguiente Pokemon");
    if (currentPokemon) {
      if (currentPokemon.number > 1) {
        const nextId = currentPokemon.number - 1;
        getPokemonById(nextId)
          .then((data) => {
            console.log(data);
            if (data && data.name) {
              setSearchState(SEARCH_STATES.SUCCESS);

              console.log(data);
            } else {
              setSearchState(SEARCH_STATES.ERROR);
            }

            beginAnimation(data);
          })
          .catch((err) => {
            console.log(err);
            setSearchState(SEARCH_STATES.ERROR);
          });
      }
    }
  }
  useEffect(() => {
    if (searchState === SEARCH_STATES.ERROR) {
      setLedColor(ledColors.error);
    } else if (searchState === SEARCH_STATES.SUCCESS) {
      setLedColor(ledColors.success);
    } else if (searchState === SEARCH_STATES.LOADING) {
      setLedColor(ledColors.loading);
    } else {
      setLedColor(ledColors.default);
    }
  }, [searchState]);

  const beginAnimation = (data) => {
    var pokeCard = document.getElementById("Card");
    var pokemonImage = document.getElementById("pokeImage");
    var pokemonTitle = document.getElementById("pokemonTitle");
    var weightLabel = document.getElementById("weightSpan");
    var heightLabel = document.getElementById("heightSpan");
    var dexNumber = document.getElementById("dexNumber");
    console.log("EPAAA\n" + data);

    const opacityElements = [pokemonTitle, weightLabel, heightLabel, dexNumber];

    pokemonImage.classList.add("animate-fromZeroToLeft-400");
    //pokeCard.classList.add("after:animate-shineGreen");
    pokemonImage.addEventListener("animationend", (event) => {
      if (event.animationName == "fromZeroToLeft-400") {
        setCurrentPokemon(data);
        pokemonImage.classList.remove("animate-fromZeroToLeft-400");
        pokemonImage.classList.add("animate-fromRightToZero-400");
      }
      if (event.animationName == "fromRightToZero-400") {
        pokemonImage.classList.remove("animate-fromRightToZero-400");
      }
      /*if (event.animationName == "shineGreen") {
        pokeCard.classList.remove("after:animate-shineGreen");
      }*/
    });

    opacityElements.map((element) => {
      element.classList.add("animate-fadeOut");
      element.addEventListener("animationend", (event) => {
        if (event.animationName == "fadeOut") {
          element.classList.remove("animate-fadeOut");
          element.classList.add("animate-fadeIn");
        }
        if (event.animationName == "fadeIn") {
          element.classList.remove("animate-fadeIn");
        }
      });
    });
  };

  // create a function
  const handleSearch = async () => {
    var myImage = document.getElementById("pokeImage");
    setSearchState(SEARCH_STATES.LOADING);
    console.log(inputValue);
    await getPokemonById(inputValue)
      .then((data) => {
        console.log(data);
        if (data && data.name) {
          setSearchState(SEARCH_STATES.SUCCESS);

          console.log(data);
        } else {
          setSearchState(SEARCH_STATES.ERROR);
        }

        beginAnimation(data);
      })
      .catch((err) => {
        console.log(err);
        setSearchState(SEARCH_STATES.ERROR);
      });
  };

  return (
    <>
      <NavBar
        handleSearch={handleSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></NavBar>
      <div className="flex w-full justify-center items-center">
        <PokemonCard
          currentPokemon={currentPokemon}
          ledColor={ledColor}
          nextPokemon={searchNextPokemon}
          previousPokemon={searchPreviousPokemon}
        ></PokemonCard>
      </div>

      <footer id="copyright " className="grid ">
        <span className="m-auto">
          &copy; 2023 Jesus Jalomo. All rights reserved.
        </span>
      </footer>
    </>
  );
}
