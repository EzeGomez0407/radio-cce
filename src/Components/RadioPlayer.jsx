import "./styles/RadioPlayer.css";
import { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPauseCircleOutline } from "react-icons/io5";
import { usePlayerFM } from "../service/usePlayerFM";
import logoCCE from '/logo.png'

export default function RadioPlayer() {
  const [playOrPause, setPlayOrPause] = useState(false)
  const {handlePlayPause, handleVolume} = usePlayerFM()
  
  const handleMusic = (e)=>{
    handlePlayPause(e)
    setPlayOrPause(!playOrPause)
  }
  return (
    <>
      <div className="bg-white min-w-[95%] fixed inset-x-2.5 bottom-6 rounded-lg flex px-10 py-3 items-center justify-between gap-3 shadow-2xl shadow-black ">
        <div className="relative">
          {/* ESTABA AGREGANDO LA ANIMACION DE PLAY XD */}
          <img src={logoCCE} alt="" className="absolute w-100 -top-1 z-300 -left-1.5 blur-[2px]"/>
          <button data-playing="false" onClick={handleMusic} id="btn-play-pause" className="relative text-[#242424] active:outline-1 active:text-[85px] z-500">
            {
              playOrPause === false ? <span className="text-[90px] text-red-400 z-600"><IoPlayCircleOutline /></span> : <span className="text-[90px] text-blue-800 z-600" ><IoPauseCircleOutline /></span>
            }
            
          </button>
        </div>
        <input type="range" onChange={handleVolume} min={0} max={1} step={0.01} className="w-[60%] h-10"/>
        <audio id="player-fm"
          src="https://sapircast.caster.fm:17661/PEPBf?token=617648bfed600045cec7b5f0a0ccc75e"
        ></audio>
        {/* <audio id="player-fm"
          src="/alaben.mp3"
        ></audio> */}
      </div>
    </>
  );
}
