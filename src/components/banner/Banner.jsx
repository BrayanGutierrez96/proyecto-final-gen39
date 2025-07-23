import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./banner.css";
function Banner() {
  const [botones, setBotones] = useState(null);

  const cambiarColorBotones = (indice) => {
    setBotones(indice);
  };
  return (
    <div className="grid grid-cols-2 bg-black p-6 ml-[30%] mr-20 my-20 rounded-sm">
      <div className="flex justify-center flex-col items-center text-white">
        <h4 className="flex items-center text-2xl gap-2">
          <img src="./iconos2/manzana-apple.png" alt="" />
          Iphone 14 Series
        </h4>
        <p className="text-3xl">Up to 10% off Voucher</p>
        <div className="flex gap-2 items-center justify-between">
          <p className="border-b-2 pb-2 text-3xl flex items-center gap-2 justify-center">
            Shop Now
          </p>
          <span className="font-thin text-2xl">
            <FaArrowRightLong />
          </span>
        </div>
      </div>
      <div className="w-full bg-white flex justify-center">
        <img
          className="imagen-iphone14"
          src="/iconos2/iphone14.png"
          alt="iphone14"
        />
      </div>
      <div className="col-span-2 flex justify-center gap-4">
        {[0, 1, 2, 3, 4].map((boton, indice) => {
          return (
            <div
              onClick={() => {
                cambiarColorBotones(indice);
              }}
              data-testid={`boton-${indice}`}
              className={`${
                botones === indice ? "bg-red-400" : "bg-stone-400"
              } w-3 h-3  rounded-full hover:cursor-pointer hover:scale-[1.1]`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Banner;
