import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./banner.css";
import { Link } from "react-router-dom";
function Banner() {
  const [botones, setBotones] = useState(null);

  const cambiarColorBotones = (indice) => {
    setBotones(indice);
  };
  return (
    <div className="bg-black text-white col-span-3 m-20 grid grid-cols-2 p-6 rounded-md ">
    <div className="flex justify-evenly items-center flex-col">
      <div className="p-6 flex flex-col gap-6">
        <div
          className="flex items-center gap-4 text-sm sm:text-md tracking-wide
"
        >
          <img src="./iconos2/icono-apple.png" alt=""  />
          <h4>iPhone 14 Series</h4>
        </div>
        <h6 className=" text-2xl sm:text-5xl tracking-wide">
          Up to 10% <br></br> off Voucher
        </h6>
        <div className="flex gap-4 items-center text-xl ">
          <Link className=" border-b-2 border-white">Shop Now</Link>
          <span className="hover:cursor-pointer">
            <FaArrowRightLong />
          </span>
        </div>
      </div>
    </div>
    <div className="">
      <img  src="./iconos2/iphone14.png" alt="" className="imagen-iphone14" />
    </div>
    <div className="flex justify-center gap-4 col-span-2 items-center">
      {[0, 1, 2, 3, 4].map((boton, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              cambiarColorBotones(index);
            }}
            className={`${
              botones === index ? "bg-red-400" : "bg-stone-400"
            } w-5 h-5 rounded-full hover:cursor-pointer hover:scale-[1.1]`}
          ></div>
        );
      })}
    </div>
  </div>
  );
}

export default Banner;
