"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { signatureJourneys } from "@/lib/showcaseData";

export default function SignatureJourneys() {
  return (
    <motion.section
      id='journeys'
      className='relative overflow-hidden bg-gradient-to-b from-[#f7f1e7] via-[#f2ebe0] to-[#ede2d3] py-20 md:py-28'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-[80%] rounded-[5rem] bg-gradient-to-r from-white/60 via-transparent to-white/60 blur-3xl' />
      <div className='pointer-events-none absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#fcedd8]/60 to-transparent blur-3xl' />
      <div className='relative mx-auto max-w-6xl px-6 lg:px-10'>
        <motion.div
          className='flex flex-col gap-4 md:max-w-3xl'
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <div className='inline-flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-[#957450]'>
            <span className='h-px w-8 bg-[#b7956c]/60' /> Signature journeys
          </div>
          <h2 className='text-3xl font-semibold leading-tight text-[#181109] md:text-5xl'>
            Trekking classics, reimagined with private comforts.
          </h2>
          <p className='text-base text-[#4c3c2c] md:text-lg'>
            Helicopter shuttles, curated lodges, and altitude-aware pacing
            ensure each trail stays indulgent without diluting authenticity.
          </p>
        </motion.div>

        <div className='relative mt-12'>
          <div className='pointer-events-none absolute inset-y-0 left-0 hidden w-10 bg-gradient-to-r from-[#f4efe6] to-transparent sm:block' />
          <div className='pointer-events-none absolute inset-y-0 right-0 hidden w-10 bg-gradient-to-l from-[#f4efe6] to-transparent sm:block' />

          <div className='-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pl-6 pr-12 sm:mx-0 sm:pl-0 sm:pr-6'>
            {signatureJourneys.map((journey, index) => (
              <motion.article
                key={journey.id}
                className='group relative snap-center shrink-0 w-[280px] sm:w-[360px]'
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 * index, duration: 0.6 },
                  },
                }}
              >
                <div className='absolute inset-0 rounded-[2.25rem] bg-gradient-to-br from-white via-white/90 to-[#f7efe7] opacity-90 transition duration-500 group-hover:opacity-100' />
                <div className='absolute inset-0 rounded-[2.25rem] border border-white/70 shadow-[0_35px_80px_rgba(15,23,42,0.1)]' />
                <div className='relative flex h-full flex-col overflow-hidden rounded-[2.25rem] backdrop-blur'>
                  <div className='relative h-56 overflow-hidden'>
                    <Image
                      src={journey.image}
                      alt={journey.title}
                      fill
                      sizes='(max-width: 640px) 90vw, 360px'
                      className='object-cover transition duration-700 ease-out group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent' />
                    <div className='absolute top-4 right-4 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.35em] text-white/90'>
                      <span className='h-px w-8 bg-white/50' />
                      {journey.difficulty}
                    </div>
                    <div className='absolute bottom-4 left-4 text-xs uppercase tracking-[0.35em] text-white'>
                      {journey.region}
                    </div>
                  </div>

                  <div className='flex flex-1 flex-col gap-5 p-6 text-[#181109]'>
                    <div className='flex items-start justify-between gap-4'>
                      <div>
                        <h3 className='text-xl font-semibold leading-snug'>
                          {journey.title}
                        </h3>
                        <p className='mt-2 text-sm text-[#6a5a48]'>
                          {journey.description}
                        </p>
                      </div>
                      <span className='rounded-full bg-[#f4e6d3] px-3 py-1 text-[0.6rem] uppercase tracking-[0.35em] text-[#a37544]'>
                        Elite
                      </span>
                    </div>

                    <dl className='grid grid-cols-2 gap-4 text-sm text-[#3f2f1f]'>
                      <div className='rounded-2xl border border-black/5 p-3'>
                        <dt className='text-[0.6rem] uppercase tracking-[0.35em] text-[#b2a08c]'>
                          Days
                        </dt>
                        <dd className='mt-1 text-lg font-semibold'>
                          {journey.duration}
                        </dd>
                      </div>
                      <div className='rounded-2xl border border-black/5 p-3'>
                        <dt className='text-[0.6rem] uppercase tracking-[0.35em] text-[#b2a08c]'>
                          Difficulty
                        </dt>
                        <dd className='mt-1 text-lg font-semibold'>
                          {journey.difficulty}
                        </dd>
                      </div>
                      <div className='rounded-2xl border border-black/5 p-3 col-span-2'>
                        <dt className='text-[0.6rem] uppercase tracking-[0.35em] text-[#b2a08c]'>
                          Season
                        </dt>
                        <dd className='mt-1 text-lg font-semibold'>
                          {journey.season}
                        </dd>
                      </div>
                    </dl>

                    <div className='flex items-center justify-between border-t border-black/5 pt-4 text-[0.6rem] uppercase tracking-[0.35em] text-[#9c8772]'>
                      <div className='flex flex-wrap gap-2'>
                        <span className='rounded-full border border-black/5 px-3 py-1'>
                          Boutique stays
                        </span>
                        <span className='rounded-full border border-black/5 px-3 py-1'>
                          Slow pace
                        </span>
                      </div>
                      <span className='inline-flex items-center gap-2 text-[#7a5d42]'>
                        Tailored
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          className='h-4 w-4'
                          fill='none'
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                        >
                          <path d='M5 12h14M13 6l6 6-6 6' />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
