"use client";
import CardEvents from "./CardEvents";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEvents } from "../lib/store";

export default function Carrousel({ quantElement, msgToEmpty }) {
  const {specialEvents} = useEvents();  
  
  //guardar solo la cantidad de elementos que se especifique de la lista que recibimos
  const limitedElementsList = specialEvents.slice(0, quantElement);
  const [currentElement, setCurrentElement] = useState(0);

  // mostrar el siguiente elemento en el carrousel
  const nextElement = useCallback(() => {
    setCurrentElement((prevElement) =>
      prevElement === limitedElementsList.length - 1 ? 0 : prevElement + 1
    );
  }, [limitedElementsList.length]);

  const goToElement = (index) => {
    setCurrentElement(index);
  };

  useEffect(() => {
    if (limitedElementsList.length <= 1) return;

    const interval = setInterval(nextElement, 5000);

    return () => clearInterval(interval);
  }, [limitedElementsList.length, nextElement, currentElement]);

  return (
    <div className="">
      <div className="flex justify-center gap-2 py-5">
        {limitedElementsList.map((e, i) => (
          <button
            key={i}
            onClick={() => goToElement(i)}
            className={`flex items-center px-2 py-2 transition-colors duration-300 ${
              i === currentElement
                ? "bg-gray-800" // Gris oscuro para el seleccionado
                : "bg-gray-300 hover:bg-gray-400" // Gris claro para el resto
            }`}
          >
            <span className="inline-block w-2 h-2 bg-gray-500 rounded-full"></span>
          </button>
        ))}
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentElement * 100}%)` }}
        >
          {limitedElementsList.map((element) => (
            <CardEvents event={element} key={element.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
