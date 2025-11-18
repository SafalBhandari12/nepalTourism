"use client";
import React from "react";
import BlurText from "@/components/BlurText";

export default function MoreAbout() {
  const features = [
    {
      title: "Expert Travel Planning",
      text: "Meticulously crafted itineraries designed around your interests and preferences. Our team ensures every detail is perfect, from transportation to accommodations and activities.",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'
        >
          <path
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'
            fill='#000'
          />
        </svg>
      ),
    },
    {
      title: "Customized Itineraries",
      text: "Tailored tour packages designed for your interests - whether adventure trekking, spiritual retreats, cultural immersion, or wildlife exploration.",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'
        >
          <path
            d='M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'
            fill='#000'
          />
        </svg>
      ),
    },
    {
      title: "Quality Accommodations",
      text: "Comfortable lodges and hotels carefully selected at every destination. From luxury resorts to authentic homestays, we ensure excellent service and hospitality.",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'
        >
          <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' fill='#000' />
        </svg>
      ),
    },
    {
      title: "Safety & Insurance",
      text: "Comprehensive travel insurance, safety protocols, and emergency support available 24/7. Your well-being is our top priority.",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'
        >
          <path
            d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z'
            fill='#000'
          />
        </svg>
      ),
    },
    {
      title: "Sustainable Tourism",
      text: "We support local communities and practice responsible tourism. Your visit directly benefits local families and conservation efforts.",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'
        >
          <path
            d='M12 2C6.7 2 2.5 6.2 2.5 11.5c0 7 7.5 9 9.5 9s9.5-2 9.5-9C21.5 6.2 17.3 2 12 2zm0 17c-1.7 0-6.5-1.8-6.5-7.5C5.5 7.9 8.5 5 12 5s6.5 2.9 6.5 6.5c0 5.7-4.8 7.5-6.5 7.5z'
            fill='#000'
          />
        </svg>
      ),
    },
    {
      title: "Fast & Easy Booking",
      text: "Simple online booking process with flexible payment options and 24-hour customer support for all your queries and changes.",
      icon: (
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'
        >
          <path
            d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z'
            fill='#000'
          />
          <path d='M7 7h10v2H7z' fill='#000' />
        </svg>
      ),
    },
  ];

  return (
    <section className='py-20 flex items-center justify-center min-h-[60vh] bg-[#f7f2ee] favorit-font overflow-hidden'>
      <div className='text-center leading-none w-full max-w-8xl px-4 sm:px-6 md:px-8'>
        <div className='mb-2'>
          <BlurText
            text={"Unforgettable"}
            animateBy='letters'
            delay={1}
            className={`text-[#2c5aa0] font-bold text-[2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] leading-tight justify-center inline-block`}
          />
        </div>

        <div className='-mt-4'>
          <BlurText
            text={"Nepal Adventures"}
            animateBy='letters'
            delay={3}
            className={`text-[#2c5aa0] font-bold text-[2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] leading-tight justify-center inline-block`}
          />
        </div>

        <div className='-mt-4'>
          <BlurText
            text={"Await You."}
            animateBy='letters'
            delay={5}
            className={`text-[#2c5aa0] font-bold text-[2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] leading-tight justify-center inline-block`}
          />
        </div>

        {/* Features grid tailored to tourism */}
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-8'>
          {features.map((f, i) => (
            <div key={i} className='flex flex-col items-start gap-4 py-6 px-2'>
              <div className='flex-shrink-0'>{f.icon}</div>

              <div className='w-full'>
                <BlurText
                  text={f.title}
                  animateBy='words'
                  delay={i * 2 + 7}
                  className='text-black text-xl md:text-2xl font-semibold'
                />

                <div className='mt-3'>
                  <BlurText
                    text={f.text}
                    animateBy='words'
                    delay={i * 1 + 9}
                    className='text-black/90 text-sm md:text-base leading-relaxed font-normal text-justify hyphens-auto'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
