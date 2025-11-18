"use client";
import StaggeredMenuSimple from "./StaggeredMenuSimple";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "#about" },
  { label: "Gallery", link: "#gallery" },
  { label: "Journeys", link: "#journeys" },
  { label: "Culture", link: "#culture" },
  { label: "Experiences", link: "/experiences" },
  { label: "Map", link: "/map" },
  { label: "Contact", link: "#contact" },
];
const socialItems = [
  {
    label: "Instagram",
    link: "https://www.instagram.com/exploreNepal",
  },
  { label: "WhatsApp", link: "https://wa.me/977xxxxxxxxxx" },
];

const showcaseStats = [
  { label: "Private routes", value: "27 curated" },
  { label: "Local experts", value: "48 hosts" },
  { label: "Altitude ready", value: "6,000 m+" },
];

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Determine video source once on mount
    const src = "/bannerVideo1.mp4";
    setVideoSrc(src);

    // Delay autoplay until loader is done (adjust timeout as needed)
    // Use 2000ms for mobile, 3000ms for desktop
    const isMobile = window.innerWidth < 768;
    const timeout = isMobile ? 1000 : 3000;

    const timer = setTimeout(() => {
      setShouldAutoPlay(true);
      if (videoRef.current) {
        videoRef.current.play().catch((err) => console.log("Play error:", err));
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className='relative w-full h-screen overflow-hidden bg-black'>
      {/* fullscreen video background - only load appropriate video */}
      {videoSrc && (
        <video
          ref={videoRef}
          className='absolute inset-0 w-full h-full object-cover'
          src={videoSrc}
          loop
          muted
          playsInline
          preload='auto'
          aria-hidden
        />
      )}

      {/* StaggeredMenuSimple placed above the video as navbar */}
      <div className='absolute inset-0 z-50 pointer-events-auto'>
        <StaggeredMenuSimple
          position='right'
          items={menuItems}
          socials={socialItems}
          colors={["#B19EEF", "#5227FF", "#8A6BFF"]}
        />
      </div>

      {/* Ambient gradient for readable overlay */}
      <div className='absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/60 to-black/85' />
    </section>
  );
}
