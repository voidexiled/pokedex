import React, { useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
export default function NavBar({ inputValue, setInputValue, handleSearch }) {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const search = () => {
    if (inputValue.length > 0) {
      console.log("Buscando Pokemon:", inputValue);
      handleSearch();
    } else {
      showToast("Please enter a valid name or id");
    }
  };
  function showToast(msg) {
    toast.error(msg, {
      position: "bottom-center",
      id: "invalid",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  useEffect(() => {
    const input = document.getElementById("dexSearcher");
    const btn = document.getElementById("dexSearch");

    function handleKeyPress(event) {
      if (event.key === "Enter") {
        btn.click();
      }
    }

    input.addEventListener("keypress", handleKeyPress);

    return () => {
      input.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div className="md:px-14 flex flex-row justify-between items-center w-full h-[85px] bg-[#1D1D1D] py-2 px-6">
      <h1 className=" text-2xl text-white navTitle">Pokedex</h1>
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
        <a
          href="https://github.com/voidexiled/pokedex-api/"
          target="_blank"
          title="redirect to api github repository"
          className="w-[32px] h-[32px]"
        >
          <Image
            id="apiLink"
            src={"/api.svg"}
            width={32}
            height={32}
            alt="API repository link"
            title="API repository link"
            className="hover:cursor-pointer"
          ></Image>
        </a>
        <a
          href="https://github.com/voidexiled/pokedex/"
          title="redirect to github repository"
          target="_blank"
          className="w-[32px] h-[32px]"
        >
          <Image
            id="githubLink"
            src={"/github.svg"}
            width={32}
            height={32}
            alt="GITHUB repository link"
            title="GITHUB repository link"
            className="hover:cursor-pointer"
          ></Image>
        </a>
      </div>
    </div>
  );
}
