import HeartRed from "@/components/Pokedex/assets/HeartRed";
import Group from "@/components/Pokedex/assets/Group";
import LeftArrowSvgrepoCom2 from "@/components/Pokedex/assets/LeftArrowSvgrepoCom2";
import Rectangle8 from "@/components/Pokedex/assets/Rectangle8";
import Group1 from "@/components/Pokedex/assets/Group1";
import LineHeightSvgrepoCom1 from "@/components/Pokedex/assets/LineHeightSvgrepoCom1";
import Line1 from "@/components/Pokedex/assets/Line1";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Component1({ currentPokemon }) {
  return (
    <div
      className={`m-auto h-[690px] w-[450px] pb-[70px] pt-[31px] px-[20px] flex justify-center `}
    >
      <div className="[max-width:457px] pt-[21px] rounded-[25px] bg-[#1D1D1D] drop-shadow-lg pb-10 items-center flex-col flex h-full w-full px-4">
        <div className="font-[700] font-inter gap-[105px] h-[189px] w-[425px] text-left text-white items-end justify-between flex-col flex">
          <div className="gap-[178px] pr-[25px] w-full flex items-center justify-between pl-9">
            <p className="[flex-grow:1] w-[99px] text-xl h-6">
              {currentPokemon.name &&
                capitalizeFirstLetter(currentPokemon.name)}
            </p>
            <div className="[flex-grow:1] gap-[29px] flex justify-between items-center h-full">
              <p className="[flex-grow:1] h-[17px] text-sm w-9">#001</p>
              <div className="w-[34px] rounded-[5px] py-[9px] h-full bg-white flex justify-center items-center px-2">
                <HeartRed className="w-[18px] h-4" />
              </div>
            </div>
          </div>
          <div className="gap-[342px] flex justify-between items-center">
            <div className="w-[17px] pt-px flex justify-center items-center">
              <Group className="w-[17px] h-8" />
            </div>
            <LeftArrowSvgrepoCom2 className="w-[50px] h-[50px]" />
          </div>
        </div>
        <div className="w-[350px] h-[264px] bg-bulbasaur-1x mt-[-130px] bg-center bg-cover" />
        <div className="[flex-grow:1] w-[392px] pt-[75px] pb-[22px] pl-[55px] pr-[31px] mt-[-85px] flex justify-end items-end relative">
          <Rectangle8 className="inset-[0] absolute" />
          <div className="gap-10 flex relative h-full w-full">
            <div className="gap-[5px] font-inter flex flex-col">
              <p className="w-[77px] text-[15px] font-[800] text-[#097200] h-[18px] text-center">
                About
              </p>
              <div className="[flex-grow:1] text-[#1D1D1D] gap-1 flex justify-between items-center mt-5 w-full text-left">
                <div className="w-[35px] gap-[7px] font-[300] flex flex-col items-center h-full">
                  <Group1 className="w-[21px] h-6" />
                  <p className="[max-width:35px] text-[10px] h-3 tracking-wider w-full">
                    Weight
                  </p>
                  <LineHeightSvgrepoCom1 className="w-[26px] h-[4px] mt-3" />
                </div>
                <div className="[flex-grow:1] gap-[45px] font-[400] flex flex-col justify-between">
                  <p className="h-[15px] w-[38px] text-xs tracking-wider">
                    3.5 kg
                  </p>
                  <p className="h-[15px] w-[35px] text-xs tracking-wider">
                    0.4 m
                  </p>
                </div>
              </div>
              <p className="text-[10px] font-[300] text-[#1D1D1D] w-[34px] tracking-wider text-left h-3">
                Height
              </p>
            </div>
            <div className="pt-[5px] flex ml-6 justify-center">
              <Line1 className="w-[0] h-[196px]" />
            </div>
            <div className="gap-[11px] flex flex-col items-center">
              <p className="w-[77px] font-inter text-[15px] font-[800] text-[#097200] h-[18px] text-center">
                Types
              </p>
              <div className="w-[68px] drop-shadow-lg bg-gradient-to-b from-[rgba(16,208,0,1)] to-[rgba(9,114,0,1)] rounded-[101px] font-inter font-[700] h-4 flex mt-5 items-center justify-center text-white text-center">
                <p className="[max-width:68px] text-[10px] tracking-wider h-4 w-full">
                  Grass
                </p>
              </div>
              <p className="font-inter text-[15px] font-[800] text-[#097200] mt-[34px] h-[18px] w-[50px] text-left">
                Moves
              </p>
              <div className="[flex-grow:1] w-[126px] text-left leading-none h-6">
                <div className="font-inter text-[10px] font-[500] text-[#3A3A3A] tracking-wider">
                  <ul className="[padding-inline-start:1.5em] font-inter text-[#3A3A3A] font-[500]">
                    <ul className="[padding-inline-start:1.5em]">
                      <li className="text-[10px] tracking-wider list-disc">
                        <span className="text-[10px] tracking-wider list-disc">
                          Overgrow
                          <br />
                        </span>
                      </li>
                      <li className="text-[10px] tracking-wider list-disc">
                        <span className="text-[10px] tracking-wider list-disc">
                          Chlorophyll
                        </span>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
