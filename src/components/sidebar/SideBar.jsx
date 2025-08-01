import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function SideBar() {
  const [seleccionado, setSeleccionado] = useState(false);
  const categorias = [
    "Electronics",
    "Home & Lifestyles",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  const toggleSeleccionado = (categoria) => {
    setSeleccionado((prev) => (prev === categoria ? false : categoria));
  };

  return (
    <div className="text-xs sm:text-sm md:text-md lg:text-lg col-span-1 flex justify-center flex-col items-center text-left gap-4 sm:pl-20 py-6 pr-4 border-r-2 border-gray-200">
      <div
        onClick={() => {
          toggleSeleccionado("woman");
        }}
        className={`flex w-full justify-between items-center gap-4 hover:cursor-pointer border-b-2 px-2 py-2 hover:border-gray-400 ${
          seleccionado === "woman"
            ? "bg-gray-400/30 border-transparent rounded-sm"
            : "border-transparent"
        }`}
      >
        <Link>Woman's Fashion </Link>
        <span className="text-sm font-thin text-black/80 flex items-center">
          <IoIosArrowForward />
        </span>
      </div>
      <div
        onClick={() => {
          toggleSeleccionado("men");
        }}
        className={`flex w-full justify-between items-center gap-4 hover:cursor-pointer border-b-2 px-2 py-2 hover:border-gray-400 ${
          seleccionado === "men"
            ? "bg-gray-400/30 border-transparent rounded-sm"
            : "border-transparent"
        }`}
      >
        <Link>Men's Fashion</Link>
        <span className="text-sm font-thin text-black/80 flex items-center">
          <IoIosArrowForward />
        </span>
      </div>
      {categorias.map((categoria, index) => {
        return (
          <Link
            onClick={() => {
              toggleSeleccionado(categoria);
            }}
            key={index}
            className={` w-full  items-center gap-4 hover:cursor-pointer border-b-2 px-2 py-2 hover:border-gray-400 ${
              seleccionado === categoria
                ? "bg-gray-400/30 border-transparent rounded-sm"
                : "border-transparent"
            }`}
          >
            {categoria}
          </Link>
        );
      })}
    </div>
  );
}

export default SideBar;
