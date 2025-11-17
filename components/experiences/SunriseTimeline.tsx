"use client";
import { motion } from "motion/react";
import { immersiveTimeline } from "@/lib/showcaseData";

export default function SunriseTimeline() {
  return (
    <motion.section
      className='py-16 md:py-20'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className='rounded-[2.5rem] border border-black/5 bg-gradient-to-br from-white to-[#f7f2ea] p-8 text-[#1c140b] shadow-[0_30px_80px_rgba(15,23,42,0.1)] md:p-12'>
        <div className='flex flex-col gap-3 text-center md:text-left'>
          <p className='text-xs uppercase tracking-[0.55em] text-[#a07f5c]'>
            Sunrise to starlight
          </p>
          <h2 className='text-3xl font-semibold md:text-5xl'>
            One slow, lavish day in Nepal.
          </h2>
          <p className='text-base text-[#4c3c2c]/90 md:text-lg max-w-3xl'>
            Designed for guests who crave mindful pacing. Every moment layers
            sound, scent, texture, and taste.
          </p>
        </div>

        <div className='mt-10 grid gap-6 md:grid-cols-3'>
          {immersiveTimeline.map((stop) => (
            <motion.article
              key={stop.id}
              className='flex flex-col gap-3 rounded-2xl border border-[#eadfd1] bg-white/90 p-6 text-[#1c140b] backdrop-blur'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <p className='text-xs uppercase tracking-[0.4em] text-[#b18f6b]'>
                {stop.label}
              </p>
              <h3 className='text-xl font-semibold'>{stop.title}</h3>
              <p className='text-sm text-[#5b4c39]'>{stop.description}</p>
              <span className='mt-auto text-[0.65rem] uppercase tracking-[0.3em] text-[#a89279]'>
                {stop.focus}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
