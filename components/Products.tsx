"use client";
import React from "react";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import BlurText from "@/components/BlurText";

const Products = () => {
  return (
    <section id='services' className='py-24 bg-[#2c5aa0]'>
      <div className='mx-auto max-w-5xl px-6 mb-16'>
        <div className='flex flex-col items-start'>
          <div className='leading-none'>
            <BlurText
              text={"Explore"}
              className='text-[#ddf0f7] text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold'
              animateBy='letters'
              delay={1}
              vertical
            />
          </div>
          <div className='-mt-4'>
            <BlurText
              text={"Destinations"}
              className='text-[#ddf0f7] text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold'
              animateBy='letters'
              delay={3}
              vertical
            />
          </div>
        </div>
      </div>
      <ScrollStack>
        <ScrollStackItem
          title='Kathmandu Valley'
          subtitle='Explore ancient temples, vibrant culture, and stunning architecture in Nepal historic capital.'
        >
          <Image
            src={"/card1.png"}
            alt='Kathmandu Valley'
            className='w-full h-full object-cover rounded-lg'
            width={1200}
            height={800}
          />
        </ScrollStackItem>

        <ScrollStackItem
          title='Annapurna Trekking'
          subtitle='Experience breathtaking mountain vistas and picturesque trails through the Annapurna region.'
        >
          <Image
            src={"/card2.png"}
            alt='Annapurna Trekking'
            className='w-full h-full object-cover rounded-lg'
            width={1200}
            height={800}
          />
        </ScrollStackItem>
        <ScrollStackItem
          title='Everest Base Camp'
          subtitle='Journey to the foot of the worlds highest mountain and experience the Sherpa culture.'
        >
          <Image
            src={"/card3.png"}
            alt='Everest Base Camp'
            className='w-full h-full object-cover rounded-lg'
            width={1200}
            height={800}
          />
        </ScrollStackItem>

        <ScrollStackItem
          title='Pokhara Lake Paradise'
          subtitle='Relax by serene lakes surrounded by the majestic Himalayas and enjoy adventure activities.'
        >
          <Image
            src='./card4.png'
            alt='Pokhara Lake'
            className='w-full h-full object-cover rounded-lg'
            width={1200}
            height={800}
            unoptimized
          />
        </ScrollStackItem>
      </ScrollStack>
    </section>
  );
};

export default Products;
