import { useEffect, useRef, useState } from "react";

export function usePlayerFM() {
  const audioElemRef = useRef(null);
  const [playBtn, setPlayBtn] = useState();
  
  useEffect(() => {
    const elemAudio = document.getElementById("player-fm");
    const btnPlayPause = document.getElementById("btn-play-pause");
    if (!btnPlayPause || !elemAudio) return;
    
    audioElemRef.current = elemAudio;
    setPlayBtn(btnPlayPause);
  }, []);
  
  const handlePlayPause = (e, isPlaying, setIsLoading) => {
    e.preventDefault();
    if (!audioElemRef.current || !playBtn) return;
    
    // Si NO está sonando (va a dar Play)
    if (!isPlaying) {
      setIsLoading(true); // Encendemos loading inmediatamente
      audioElemRef.current.play().catch(err => {
        console.error("Error al reproducir el streaming:", err);
        setIsLoading(false);
      });
      playBtn.dataset.playing = "true";
    } else {
      // Si ya está sonando (va a dar Pausa)
      audioElemRef.current.pause();
      setIsLoading(false); // Apagamos por las dudas
      playBtn.dataset.playing = "false";
    }
  };

  const handleVolume = (e) => {e.preventDefault();
    if (!audioElemRef.current) return;
    const { value } = e.target;
    audioElemRef.current.volume = value;
  }
  return { handlePlayPause, handleVolume };
}
