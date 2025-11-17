"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { thematicEscapes } from "@/lib/showcaseData";

export default function ThematicEscapes() {
  return (
    <motion.section
      className='py-16 md:py-24'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className='flex flex-col gap-4 text-center md:text-left'
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
      >
        <p className='text-xs uppercase tracking-[0.5em] text-neutral-500'>
          Tailored Escapes
        </p>
        <h2 className='text-3xl md:text-5xl font-semibold text-[#120c05]'>
          Pick a theme, we layer the details.
        </h2>
        <p className='text-base md:text-lg text-neutral-600 max-w-3xl'>
          Each micro-itinerary includes vetted hosts, transfers, and on-call
          concierges. Swap modules to match your pace.
        </p>
      </motion.div>

      <div className='mt-10 grid gap-8 md:grid-cols-3'>
        {thematicEscapes.map((escape) => (
          <motion.article
            key={escape.id}
            className='rounded-[2rem] border border-black/5 overflow-hidden bg-white flex flex-col shadow-[0_25px_60px_rgba(15,23,42,0.08)]'
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            <div className='relative h-60'>
              <Image
                src={escape.image}
                alt={escape.title}
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent' />
              <span className='absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold tracking-[0.3em] text-black'>
                {escape.badge}
              </span>
            </div>
            <div className='p-8 flex flex-col gap-4 flex-1'>
              <h3 className='text-2xl font-semibold'>{escape.title}</h3>
              <p className='text-sm text-neutral-600'>{escape.description}</p>
              <ul className='space-y-2 text-sm text-neutral-800'>
                {escape.highlights.map((item) => (
                  <li key={item} className='flex items-center gap-2'>
                    <span className='inline-flex h-2 w-2 rounded-full bg-black/60' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
