"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { signatureJourneys } from "@/lib/showcaseData";

export default function JourneySpotlights() {
  return (
    <motion.section
      className='py-16 md:py-20'
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
          Elevated Logistics
        </p>
        <h2 className='text-3xl md:text-5xl font-semibold text-[#120c05]'>
          Choose a classic—we add the cinematic finish.
        </h2>
      </motion.div>

      <div className='mt-10 grid gap-8 md:grid-cols-2'>
        {signatureJourneys.map((journey) => (
          <motion.article
            key={journey.id}
            className='rounded-[2rem] border border-black/5 overflow-hidden flex flex-col bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)]'
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
          >
            <div className='relative h-64'>
              <Image
                src={journey.image}
                alt={journey.title}
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent' />
              <div className='absolute bottom-4 left-4 text-white text-sm uppercase tracking-[0.3em]'>
                {journey.region}
              </div>
            </div>
            <div className='p-8 flex flex-col gap-5'>
              <div>
                <h3 className='text-2xl font-semibold'>{journey.title}</h3>
                <p className='mt-2 text-base text-neutral-600'>
                  {journey.description}
                </p>
              </div>
              <dl className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-neutral-600'>
                <div>
                  <dt className='uppercase text-[0.65rem] tracking-[0.25em] text-neutral-400'>
                    Distance
                  </dt>
                  <dd className='font-medium'>{journey.distance}</dd>
                </div>
                <div>
                  <dt className='uppercase text-[0.65rem] tracking-[0.25em] text-neutral-400'>
                    Days
                  </dt>
                  <dd className='font-medium'>{journey.duration}</dd>
                </div>
                <div>
                  <dt className='uppercase text-[0.65rem] tracking-[0.25em] text-neutral-400'>
                    Difficulty
                  </dt>
                  <dd className='font-medium'>{journey.difficulty}</dd>
                </div>
                <div>
                  <dt className='uppercase text-[0.65rem] tracking-[0.25em] text-neutral-400'>
                    Season
                  </dt>
                  <dd className='font-medium'>{journey.season}</dd>
                </div>
              </dl>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
