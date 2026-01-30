import "./styles/RadioPlayer.css";
import { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPauseCircleOutline } from "react-icons/io5";
import { usePlayerFM } from "../service/usePlayerFM";

export default function RadioPlayer() {
  const [isLoading, setIsLoading] = useState(false);
  const [playOrPause, setPlayOrPause] = useState(false);
  const { handlePlayPause, handleVolume } = usePlayerFM();

  const handleMusic = async (e) => {
    handlePlayPause(e, setIsLoading);
    
    setPlayOrPause(!playOrPause);
  };
  const handlePlaying = ()=>{
    setIsLoading(false)
  }
  return (
      <div className="bg-white fixed bottom-6 right-6 rounded-lg flex px-10 py-3 items-center justify-between gap-3 shadow-2xl shadow-black sm:w-[500px] w-[95%]" id="player-content">
        <div className="relative">
          {/* ESTABA AGREGANDO LA ANIMACION DE PLAY XD */}
          {/* <img src={logoCCE} alt="" className="absolute w-100 -top-1 z-300 -left-1.5 blur-[2px]"/> */}
          {isLoading ? (
            <div className="w-20 h-20 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          ) : (
            <button
              data-playing="false"
              onClick={handleMusic}
              id="btn-play-pause"
              className="relative text-[#242424] active:outline-1 active:text-[85px] z-500"
            >
              {playOrPause === false ? (
                <span className="text-[80px] text-red-400 z-600">
                  <IoPlayCircleOutline />
                </span>
              ) : (
                <span className="text-[80px] text-blue-800 z-600">
                  <IoPauseCircleOutline />
                </span>
              )}
            </button>
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
          onPlay={handlePlaying}
          id="player-fm"
          src="https://stream.zeno.fm/gaa51gprq18uv"
        ></audio>
      </div>
  );
}
