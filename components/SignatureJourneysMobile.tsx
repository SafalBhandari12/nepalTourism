"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { signatureJourneys } from "@/lib/showcaseData";

export default function SignatureJourneysMobile() {
  return (
    <motion.section
      id='journeys'
      className='relative md:hidden overflow-hidden bg-gradient-to-b from-[#f7f1e7] via-[#f2ebe0] to-[#ede2d3] py-20'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-[80%] rounded-[5rem] bg-gradient-to-r from-white/60 via-transparent to-white/60 blur-3xl' />
      <div className='relative mx-auto max-w-6xl px-6'>
        <motion.div
          className='flex flex-col gap-4'
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <div className='inline-flex items-center gap-3 text-xs uppercase tracking-[0.5em] text-[#957450] w-fit'>
            <span className='h-px w-8 bg-[#b7956c]/60' /> Signature journeys
          </div>
          <h2 className='text-2xl font-semibold leading-tight text-[#181109]'>
            Trekking classics, reimagined with private comforts.
          </h2>
          <p className='text-sm text-[#4c3c2c]'>
            Helicopter shuttles, curated lodges, and altitude-aware pacing
            ensure each trail stays indulgent without diluting authenticity.
          </p>
        </motion.div>

        <div className='relative mt-8'>
          <div className='flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 px-0'>
            {signatureJourneys.map((journey, index) => (
              <motion.article
                key={journey.id}
                className='group relative snap-center shrink-0 w-[280px]'
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1 * index, duration: 0.6 },
                  },
                }}
              >
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-white/90 to-[#f7efe7] opacity-90 transition duration-500 group-hover:opacity-100' />
                <div className='absolute inset-0 rounded-2xl border border-white/70 shadow-[0_35px_80px_rgba(15,23,42,0.1)]' />
                <div className='relative flex h-full flex-col overflow-hidden rounded-2xl backdrop-blur'>
                  <div className='relative h-40 overflow-hidden'>
                    <Image
                      src={journey.image}
                      alt={journey.title}
                      fill
                      sizes='280px'
                      className='object-cover transition duration-700 ease-out group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent' />
                    <div className='absolute top-2 right-2 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.35em] text-white/90'>
                      <span className='h-px w-6 bg-white/50' />
                      {journey.difficulty}
                    </div>
                    <div className='absolute bottom-2 left-2 text-xs uppercase tracking-[0.35em] text-white'>
                      {journey.region}
                    </div>
                  </div>

                  <div className='flex flex-1 flex-col gap-3 p-4 text-[#181109]'>
                    <div>
                      <h3 className='text-lg font-semibold leading-snug'>
                        {journey.title}
                      </h3>
                      <p className='mt-1 text-xs text-[#6a5a48] line-clamp-2'>
                        {journey.description}
                      </p>
                    </div>

                    <dl className='grid grid-cols-2 gap-2 text-xs text-[#3f2f1f]'>
                      <div className='rounded-lg border border-black/5 p-2'>
                        <dt className='text-[0.5rem] uppercase tracking-[0.35em] text-[#b2a08c]'>
                          Days
                        </dt>
                        <dd className='mt-1 font-semibold'>
                          {journey.duration}
                        </dd>
                      </div>
                      <div className='rounded-lg border border-black/5 p-2'>
                        <dt className='text-[0.5rem] uppercase tracking-[0.35em] text-[#b2a08c]'>
                          Difficulty
                        </dt>
                        <dd className='mt-1 font-semibold'>
                          {journey.difficulty}
                        </dd>
                      </div>
                    </dl>

                    <div className='border-t border-black/5 pt-2 text-[0.65rem] uppercase tracking-[0.35em] text-[#7a5d42]'>
                      <span>Tailored Experience →</span>
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
