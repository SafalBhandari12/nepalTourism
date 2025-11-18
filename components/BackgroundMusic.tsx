"use client";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Play audio on first user interaction
  useEffect(() => {
    if (!isMounted || audioStarted) return;

    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = () => {
      audio.volume = 0.2; // Set volume to 30%
      audio.currentTime = 0;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Background music started");
            setAudioStarted(true);
            // Remove listeners after first successful play
            document.removeEventListener("click", playAudio);
            document.removeEventListener("touchstart", playAudio);
            document.removeEventListener("keydown", playAudio);
          })
          .catch((error) => {
            console.log("Audio playback failed:", error);
          });
      }
    };

    // Listen for any user interaction to start music
    document.addEventListener("click", playAudio);
    document.addEventListener("touchstart", playAudio);
    document.addEventListener("keydown", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
      document.removeEventListener("keydown", playAudio);
    };
  }, [isMounted, audioStarted]);

  // Only render on client to avoid hydration mismatch
  if (!isMounted) return null;

  return (
    <audio
      ref={audioRef}
      loop
      preload='auto'
      style={{ display: "none" }}
      crossOrigin='anonymous'
    >
      <source src='/aetheric-music.mp3' type='audio/mpeg' />
      Your browser does not support the audio element.
    </audio>
  );
}
