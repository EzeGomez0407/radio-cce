import { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPauseCircleOutline } from "react-icons/io5";
import "../App.css";
import { usePlayerFM } from "../service/usePlayerFM";

export default function RadioPlayer() {
  const [playOrPause, setPlayOrPause] = useState(false)
  const {handlePlayPause, handleVolume} = usePlayerFM()
  
  const handleMusic = (e)=>{
    handlePlayPause(e)
    setPlayOrPause(!playOrPause)
  }
  return (
    <>
      <div className="bg-white min-w-[95%] fixed inset-x-2.5 bottom-6 rounded-[8px] flex px-10 py-3 items-center justify-between gap-3 shadow-2xl shadow-black ">
        <button data-playing="false" onClick={handleMusic} id="btn-play-pause" className="text-[#242424] active:outline-1 active:text-[85px]">
          {
            playOrPause === false ? <span className="text-[90px] text-red-400"><IoPlayCircleOutline /></span> : <span className="text-[90px] text-blue-500" ><IoPauseCircleOutline /></span>
          }
          
        </button>
        <input type="range" onChange={handleVolume} min={0} max={1} step={0.01} className="w-[60%] h-10"/>
        <audio id="player-fm"
          src="http://shaincast.caster.fm:21547/listen.mp3?authnad926f45a26e4c2363d651fa2605d9cd"
        ></audio>
        {/* <audio id="player-fm"
          src="/alaben.mp3"
        ></audio> */}
      </div>
    </>
  );
}

// Radio Fernando

/* <!--   DO NOT REMOVE THE LINKS BELOW, THEY  WILL BE HIDDEN (AND WILL HELP US A LOT)   -->	 */
/* <a id="cstrFreePlayerBL1" href="//www.caster.fm/">
          Free Shoutcast Hosting
        </a>
        <a id="cstrFreePlayerBL2" href="//www.caster.fm/">
          Radio Stream Hosting
        </a>{" "}
        <div id="cstrFreePlayerDiv"></div> */

// useEffect(() => {
//   const scriptVars = document.createElement("script");
//   scriptVars.type = "text/javascript";
//   scriptVars.innerHTML = `
//     var cstrFreePlayerUid = 571727;
//     var cstrFreePlayerTheme = "purple";
//     var cstrFreePlayerColor = "";
//   `;
//   document.body.appendChild(scriptVars);

//   const script = document.createElement("script");
//   script.src = "//corscdn.caster.fm/freeplayer/FreePlanPlayerEmbed.js";
//   document.body.appendChild(script);

//   return () => {
//     document.body.removeChild(script);
//     document.body.removeChild(scriptVars);
//   };
// }, []);
