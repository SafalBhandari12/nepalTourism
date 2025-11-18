"use client";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "motion/react";
import { scenicSpots } from "@/lib/showcaseData";

export default function ScenicShowcase() {
  return (
    <motion.section
      id='gallery'
      className='relative w-full bg-[#f7f2ea] text-[#1b1309] py-12 md:py-20 overflow-hidden'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='absolute inset-0 opacity-80 pointer-events-none'>
        <div className='absolute -left-32 top-10 hidden h-96 w-96 rounded-full bg-gradient-to-br from-[#ffddc1]/70 via-[#f6f0e6]/20 to-transparent blur-[130px] md:block' />
        <div className='absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-[#c2d8ff]/60 via-transparent to-transparent blur-[140px]' />
      </div>

      <div className='relative z-10 mx-auto max-w-6xl px-6 lg:px-10'>
        <motion.div
          className='flex max-w-3xl flex-col gap-4 text-center md:text-left'
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <p className='text-xs uppercase tracking-[0.6em] text-[#aa8456]'>
            Frames of Nepal
          </p>
          <h2 className='text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl'>
            Wild horizons, sacred valleys, unforgettable light.
          </h2>
          <p className='text-base text-[#4a3a2a]/90 md:text-lg'>
            Every itinerary we craft is anchored in sensory storytelling. This
            collage keeps the tone in sync with the rest of the site while still
            celebrating contrast.
          </p>
        </motion.div>

        <div className='mt-14 grid grid-cols-1 gap-6 md:grid-cols-12'>
          {scenicSpots.map((spot, index) => (
            <motion.article
              key={spot.id}
              className={clsx(
                "group relative overflow-hidden rounded-[2rem] border border-black/5 bg-gradient-to-br from-white to-white/70",
                spot.gridClass,
                spot.heightClass
              )}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.97 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { delay: index * 0.08, duration: 0.6 },
                },
              }}
            >
              <div className='absolute inset-0'>
                <Image
                  src={spot.image}
                  alt={spot.title}
                  fill
                  sizes='(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 33vw'
                  className='object-cover transition duration-700 ease-out group-hover:scale-105'
                  priority={spot.id === "sagarmatha"}
                />
                <div
                  className={clsx(
                    "absolute inset-0 bg-gradient-to-t opacity-80",
                    spot.accent
                  )}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
              </div>

              <div className='relative z-10 flex h-full flex-col justify-between gap-4 p-6 sm:p-8 text-white'>
                <div className='flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/80'>
                  <span className='inline-flex h-2 w-2 rounded-full bg-white/70' />
                  {spot.location}
                </div>
                <div>
                  <h3 className='text-2xl font-semibold md:text-3xl'>
                    {spot.title}
                  </h3>
                  <p className='mt-3 text-sm text-white/80 md:text-base'>
                    {spot.blurb}
                  </p>
                </div>
                <div className='flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.25em] text-white/85'>
                  {spot.tags.map((tag) => (
                    <span
                      key={tag}
                      className='rounded-full border border-white/30 bg-white/5 px-3 py-1 backdrop-blur'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
