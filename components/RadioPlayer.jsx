"use client";
import "./styles/RadioPlayer.css";
import { useState } from "react";
import { IoPlayCircleOutline, IoPauseCircleOutline } from "react-icons/io5";
import { usePlayerFM } from "../service/usePlayerFM";

export default function RadioPlayer() {
  const [isLoading, setIsLoading] = useState(false);
  const [playOrPause, setPlayOrPause] = useState(false);
  const { handlePlayPause, handleVolume } = usePlayerFM();

  const handleMusic = (e) => {
    // Le pasamos el estado actual para que el hook sepa si poner loading o no
    handlePlayPause(e, playOrPause, setIsLoading);
    setPlayOrPause(!playOrPause);
  };
  return (
    <div
      className="bg-white fixed bottom-6 right-6 rounded-lg flex px-10 py-3 items-center justify-between gap-3 shadow-2xl shadow-black sm:w-125 max-sm:inset-x-2.5 w-[95%]"
      id="player-content"
    >
      <div className="relative flex items-center justify-center w-20 h-20">
        {/* El botón se mantiene SIEMPRE montado para no romper las referencias */}
        <button
          data-playing="false"
          onClick={handleMusic}
          id="btn-play-pause"
          className="relative text-[#242424] active:outline-1 active:text-[85px] z-50"
          disabled={isLoading && !playOrPause} // Opcional: deshabilita mientras carga el play inicial
        >
          {playOrPause ? (
            <span className="text-[80px] text-blue-800">
              <IoPauseCircleOutline />
            </span>
          ) : (
            <span className="text-[80px] text-red-400">
              <IoPlayCircleOutline />
            </span>
          )}
        </button>

        {/* El spinner se dibuja de forma absoluta rodeando o superponiendo al botón */}
        {isLoading && (
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin pointer-events-none"></div>
        )}
      </div>
      <input
        type="range"
        onChange={handleVolume}
        min={0}
        max={1}
        step={0.01}
        className="w-[60%] h-10"
      />
      <audio
        id="player-fm"
        src="https://stream.zeno.fm/gaa51gprq18uv"
        onPlaying={() => setIsLoading(false)} // ¡La clave! Se dispara cuando el sonido realmente arranca
        onWaiting={() => setIsLoading(true)}  // Si se corta el streaming por lag, muestra el loading de nuevo
        onPause={() => setIsLoading(false)}   // Si lo pausamos manual, aseguramos limpiar el loading
      ></audio>
    </div>
  );
}
