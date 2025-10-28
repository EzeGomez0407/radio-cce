import { useEffect, useRef, useState } from "react";

export function usePlayerFM() {
  // const audioContext = useMemo(()=>(new AudioContext()),[]) 
  const audioElemRef = useRef(null);
  const [playBtn, setPlayBtn] = useState();
  // const trackRef = useRef(null)
  
  useEffect(() => {
    const elemAudio = document.getElementById("player-fm");
    const btnPlayPause = document.getElementById("btn-play-pause")
    if(!btnPlayPause || !elemAudio) return;
    
    audioElemRef.current = elemAudio
    
    setPlayBtn(btnPlayPause);
  }, []);
  
  const handlePlayPause = (e) => {
    e.preventDefault()
    if (!audioElemRef.current || !playBtn) return;
    console.log(audioElemRef);
    // Play or pause track depending on state
    if (playBtn.dataset.playing === "false") {
      audioElemRef.current.play();
      playBtn.dataset.playing = "true";
    } else if (playBtn.dataset.playing === "true") {
      audioElemRef.current.pause();
      playBtn.dataset.playing = "false";
    }
  };

  const handleVolume = (e) => {
    e.preventDefault()
    const {value} = e.target
    audioElemRef.current.volume = value
  }
  return { handlePlayPause, handleVolume };
}
