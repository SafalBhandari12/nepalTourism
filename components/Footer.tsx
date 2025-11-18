"use client";
import React from "react";
import BlurText from "@/components/BlurText";

export default function Footer() {
  return (
    <footer id='contact' className='bg-[#0f0f0f] text-white py-20'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12'>
          {/* Left: giant heading */}
          <div className='w-full lg:w-1/2 text-left'>
            <h2 className='font-bold leading-tight text-white text-[1.8rem] sm:text-[2.8rem] md:text-[3.6rem] lg:text-[4.8rem]'>
              <div className='block'>
                <BlurText
                  text={"Get in touch"}
                  animateBy='words'
                  delay={2}
                  className='block whitespace-nowrap'
                />
              </div>

              <div className='block -mt-1'>
                <BlurText
                  text={"with us today."}
                  animateBy='words'
                  delay={6}
                  className='block'
                />
              </div>
            </h2>
          </div>

          {/* Right: description, CTA, small credit */}
          <div className='w-full lg:w-1/2 max-w-md text-left flex flex-col items-start gap-8'>
            <BlurText
              text={
                "Have questions about your Nepal adventure? Our expert team is ready to craft the perfect itinerary for you. Reach out today and let's start planning your dream journey to the Himalayas. We're here to help make your experience unforgettable."
              }
              animateBy='words'
              delay={10}
              className='text-white text-base md:text-lg leading-relaxed font-normal'
            />

            <a
              href='https://wa.me/977xxxxxxxxxx'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block bg-[#d6df3a] text-black font-semibold rounded-full px-10 py-4 shadow-md hover:brightness-95 transition'
            >
              <BlurText
                text={"CONTACT US"}
                animateBy='words'
                delay={15}
                className='text-black text-sm md:text-base font-medium'
              />
            </a>

            {/* Contact Info */}
          </div>
        </div>
      </div>

      {/* Floating Contact Buttons */}
      {/* Removed floating buttons */}
    </footer>
  );
}
