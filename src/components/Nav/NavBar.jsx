import React, { useEffect } from "react";
import Image from "next/image";

export default function NavBar({ inputValue, setInputValue, handleSearch }) {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const search = () => {
    // aquí puedes manejar la búsqueda de tu Pokemon usando el inputValue
    console.log("Buscando Pokemon:", inputValue);
    handleSearch();
  };

  //   useEffect(() => {
  //     const dexBtn = document.getElementById("dexButton");
  //     dexBtn.addEventListener("click", function (event) {
  //       console.log(event);
  //       console.log(event.target);
  //     });
  //   });
  useEffect(() => {
    const input = document.getElementById("dexSearcher");
    const btn = document.getElementById("dexSearch");
    const apiLink = document.getElementById("apiLink");
    const githubLink = document.getElementById("githubLink");
    function handleClick(event) {
      if (event.target === apiLink) {
        window.open("https://github.com/voidexiled/pokedex-api/");
      } else if (event.target === githubLink) {
        window.open("https://github.com/voidexiled/pokedex/");
      }
    }
    function handleKeyPress(event) {
      if (event.key === "Enter") {
        btn.click();
      }
    }
    apiLink.addEventListener("click", handleClick);
    githubLink.addEventListener("click", handleClick);
    input.addEventListener("keypress", handleKeyPress);
    // Limpiar el efecto cuando el componente se desmonta
    return () => {
      input.removeEventListener("keypress", handleKeyPress);
      apiLink.removeEventListener("click", handleClick);
      githubLink.removeEventListener("click", handleClick);
    };
  }, []); // Dependencia vacía para que el efecto se ejecute solo una vez

  return (
    <div className="md:px-14 flex flex-row justify-between items-center w-full h-[85px] bg-[#1D1D1D] py-2 px-6">
      <span className=" text-2xl text-white navTitle">Pokedex</span>
      <div className="flex w-[220px] lg:w-[320px] h-10 bg-none border border-solid border-white rounded-2xl overflow-hidden">
        <input
          onChange={handleChange}
          value={inputValue}
          type="text"
          id="dexSearcher"
          placeholder="Name or id"
          className="selectable rounded-full m-0 h-full w-8/12 px-4 text-white font-mono bg-transparent border-none focus:border-none focus:border-transparent focus:ring-0 font-extralight text-sm -tracking-tighter"
        />
        <div
          className="flex w-4/12 h-full  justify-center items-center "
          id="dexButton"
        >
          <button
            id="dexSearch"
            onClick={search}
            className="w-full h-full transition-all m-auto text-center align-middle font-sans font-semibold text-cyan-500 hover:text-white hover:bg-[rgb(0,77,112)] focus:bg-[rgb(0,77,112)] active:bg-opacity-40 "
          >
            DEX
          </button>
        </div>
      </div>

      <div className="flex justify-between w-[80px] md:gap-8 ">
        <Image
          id="apiLink"
          src={"/api.svg"}
          width={32}
          height={32}
          alt="API link"
          className="hover:cursor-pointer"
        ></Image>
        <Image
          id="githubLink"
          src={"/github.svg"}
          width={32}
          height={32}
          alt="GITHUB link"
          className="hover:cursor-pointer"
        ></Image>
      </div>
    </div>
  );
}
