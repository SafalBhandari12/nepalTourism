"use client";
import Image from "next/image";
import { motion } from "motion/react";

const heroStats = [
  { label: "Altitude comfort", value: "oxygen-supported" },
  { label: "Hosts", value: "48 local experts" },
  { label: "Itinerary lead time", value: "24 hrs" },
];

export default function ExperiencesHero() {
  return (
    <motion.section
      className='relative isolate min-h-[70vh] overflow-hidden rounded-[3rem] bg-black text-white'
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src='https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=80'
        alt='Trekkers overlooking the Himalayan range during sunrise'
        fill
        priority
        sizes='100vw'
        className='object-cover'
      />
      <div className='absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80' />
      <div className='relative z-10 flex h-full w-full flex-col justify-end gap-6 px-6 py-16 text-white md:px-16 lg:px-24'>
        <p className='text-xs uppercase tracking-[0.55em] text-white/80'>
          Nepal experiences studio
        </p>
        <h1 className='text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl max-w-4xl'>
          Sunrise-to-starlight itineraries for modern explorers.
        </h1>
        <p className='text-base text-white/80 md:text-xl max-w-2xl'>
          Bespoke journeys mixing helicopter access, heritage stays, and
          immersive cultural hosts—crafted in-house by our Kathmandu curators.
        </p>
        <div className='flex flex-wrap gap-4 text-[0.7rem] uppercase tracking-[0.4em] text-white/80'>
          {heroStats.map((stat) => (
            <span
              key={stat.label}
              className='rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur'
            >
              <span className='block text-white/60'>{stat.label}</span>
              <span className='mt-1 block text-white tracking-[0.2em]'>
                {stat.value}
              </span>
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
