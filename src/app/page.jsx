"use client";
import React, { useState, useEffect } from "react";

import { getPokemonById } from "@/services/api/pokemon";
import PokemonCard from "@/components/Pokedex/PokemonCard";
import { PokemonSchema } from "@/services/lib/PokemonSchema";
import NavBar from "@/components/Nav/NavBar";
import { SEARCH_STATE } from "@/services/lib/SearchStates";
import { LED_COLOR } from "@/services/lib/LedColors";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
export default function Main() {
  const [inputValue, setInputValue] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState(PokemonSchema);
  const [searchState, setSearchState] = useState(SEARCH_STATE.INITIAL);
  const [ledColor, setLedColor] = useState(LED_COLOR.default);

  async function searchNextPokemon() {
    if (currentPokemon) {
      if (currentPokemon.number < 1011) {
        const nextId = currentPokemon.number + 1;
        await getPokemonById(nextId)
          .then((data) => {
            if (data && data.name) {
              setSearchState(SEARCH_STATE.SUCCESS);
            } else {
              setSearchState(SEARCH_STATE.ERROR);
            }

            beginAnimation(data);
          })
          .catch((err) => {
            console.log(err);
            setSearchState(SEARCH_STATE.ERROR);
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
              setSearchState(SEARCH_STATE.SUCCESS);

              console.log(data);
            } else {
              setSearchState(SEARCH_STATE.ERROR);
            }

            beginAnimation(data);
          })
          .catch((err) => {
            console.log(err);
            setSearchState(SEARCH_STATE.ERROR);
          });
      }
    }
  }
  useEffect(() => {
    if (searchState === SEARCH_STATE.ERROR) {
      setLedColor(LED_COLOR.error);
    } else if (searchState === SEARCH_STATE.SUCCESS) {
      setLedColor(LED_COLOR.success);
    } else if (searchState === SEARCH_STATE.LOADING) {
      setLedColor(LED_COLOR.loading);
    } else {
      setLedColor(LED_COLOR.default);
    }
  }, [searchState]);

  const beginAnimation = (data) => {
    var pokeCard = document.getElementById("Card");
    var pokemonImage = document.getElementById("pokeImage");
    var pokemonTitle = document.getElementById("pokemonTitle");
    var weightLabel = document.getElementById("weightSpan");
    var heightLabel = document.getElementById("heightSpan");
    var dexNumber = document.getElementById("dexNumber");
    var typesObj = document.getElementsByClassName("type");
    var movesObj = document.getElementsByClassName("moves");
    console.log("EPAAA\n" + data);

    const opacityElements = [pokemonTitle, weightLabel, heightLabel, dexNumber];
    for (let i = 0; i < typesObj.length; i++) {
      opacityElements.push(typesObj[i]);
    }
    for (let i = 0; i < movesObj.length; i++) {
      opacityElements.push(movesObj[i]);
    }
    pokemonImage.classList.add("animate-fromZeroToLeft-400");

    pokemonImage.addEventListener("animationend", (event) => {
      if (event.animationName == "fromZeroToLeft-400") {
        setCurrentPokemon(data);
        pokemonImage.classList.remove("animate-fromZeroToLeft-400");
        pokemonImage.classList.add("animate-fromRightToZero-400");
      }
      if (event.animationName == "fromRightToZero-400") {
        pokemonImage.classList.remove("animate-fromRightToZero-400");
      }
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
    setSearchState(SEARCH_STATE.LOADING);
    console.log(inputValue);
    await getPokemonById(inputValue)
      .then((data) => {
        console.log(data);
        if (data && data.name) {
          setSearchState(SEARCH_STATE.SUCCESS);

          console.log(data);
        } else {
          setSearchState(SEARCH_STATE.ERROR);
        }

        beginAnimation(data);
      })
      .catch((err) => {
        console.log(err);
        setSearchState(SEARCH_STATE.ERROR);
      });
  };

  return (
    <AnimatePresence>
      <ToastContainer
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
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
    </AnimatePresence>
  );
}
