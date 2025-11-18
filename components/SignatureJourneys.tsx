"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { signatureJourneys } from "@/lib/showcaseData";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function SignatureJourneys() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Only on desktop

    const panels = gsap.utils.toArray<HTMLElement>(".journey-panel");
    const container = panelsContainerRef.current;

    if (!container || panels.length === 0) return;

    const tween = gsap.to(panels, {
      x: () => -1 * (container.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        start: "top top",
        scrub: 1,
        end: () => "+=" + (container.scrollWidth - window.innerWidth - 100),
        markers: false,
      },
    });

    // Anchor navigation
    document.querySelectorAll(".journey-anchor").forEach((anchor) => {
      anchor.addEventListener("click", function (e: Event) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        );
        const targetElem = document.querySelector(href || "");

        if (
          targetElem &&
          container.contains(targetElem) &&
          tween.scrollTrigger
        ) {
          const panelIndex = panels.indexOf(targetElem as HTMLElement);
          if (panelIndex === -1) return;

          const totalScroll =
            tween.scrollTrigger.end - tween.scrollTrigger.start;
          const panelWidth = window.innerWidth;
          const scrollAmount = panelIndex * panelWidth;
          const y = Math.round(
            tween.scrollTrigger.start +
              (scrollAmount / (container.scrollWidth - window.innerWidth)) *
                totalScroll
          );

          gsap.to(window, {
            scrollTo: { y: y, autoKill: false },
            duration: 1,
          });
        }
      });
    });

    return () => {
      tween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id='journeys'
      className='relative hidden md:block'
    >
      {/* Header Section - stays in viewport */}
      <div className='relative bg-gradient-to-b from-[#f7f1e7] via-[#f2ebe0] to-[#ede2d3] py-20 md:py-28'>
        <div className='pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 w-[80%] rounded-[5rem] bg-gradient-to-r from-white/60 via-transparent to-white/60 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-[#fcedd8]/60 to-transparent blur-3xl' />
        <div className='relative mx-auto max-w-6xl px-6 lg:px-10'>
          <motion.div
            className='flex flex-col gap-4 md:max-w-3xl'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
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
        </div>
      </div>

      {/* Horizontal Scrolling Panels */}
      <div
        ref={panelsContainerRef}
        className='relative w-screen overflow-hidden bg-gradient-to-b from-[#ede2d3] to-[#ede2d3]'
      >
        <div className='flex w-max'>
          {signatureJourneys.map((journey, index) => (
            <article
              key={journey.id}
              id={`journey-${journey.id}`}
              className='journey-panel relative flex-shrink-0 overflow-hidden w-screen'
            >
              <div className='flex h-screen w-screen'>
                {/* Left Column - Image */}
                <div className='w-1/2 relative overflow-hidden'>
                  <Image
                    src={journey.image}
                    alt={journey.title}
                    fill
                    sizes='50vw'
                    className='object-cover'
                    priority={index < 2}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
                </div>

                {/* Right Column - Content */}
                <div className='w-1/2 flex flex-col items-center justify-center px-12 py-16 bg-gradient-to-br from-white/95 via-[#faf8f5] to-[#f5f1ed]'>
                  <div className='max-w-lg'>
                    <div className='mb-4 flex items-center gap-3'>
                      <span className='text-[0.6rem] uppercase tracking-[0.35em] text-[#957450]'>
                        {journey.region}
                      </span>
                      <span className='text-[0.6rem] uppercase tracking-[0.35em] text-white/90 bg-[#957450] px-3 py-1 rounded-full'>
                        {journey.difficulty}
                      </span>
                    </div>

                    <h2 className='text-4xl font-bold leading-tight text-[#181109] mb-6'>
                      {journey.title}
                    </h2>

                    <p className='text-lg text-[#4c3c2c] mb-8 leading-relaxed'>
                      {journey.description}
                    </p>

                    <div className='grid grid-cols-3 gap-4 mb-8'>
                      <div className='rounded-2xl border border-[#957450]/20 bg-white/50 p-4'>
                        <dt className='text-[0.6rem] uppercase tracking-[0.35em] text-[#b2a08c] font-semibold'>
                          Distance
                        </dt>
                        <dd className='mt-2 text-2xl font-bold text-[#181109]'>
                          {journey.distance}
                        </dd>
                      </div>
                      <div className='rounded-2xl border border-[#957450]/20 bg-white/50 p-4'>
                        <dt className='text-[0.6rem] uppercase tracking-[0.35em] text-[#b2a08c] font-semibold'>
                          Days
                        </dt>
                        <dd className='mt-2 text-2xl font-bold text-[#181109]'>
                          {journey.duration}
                        </dd>
                      </div>
                      <div className='rounded-2xl border border-[#957450]/20 bg-white/50 p-4'>
                        <dt className='text-[0.6rem] uppercase tracking-[0.35em] text-[#b2a08c] font-semibold'>
                          Season
                        </dt>
                        <dd className='mt-2 text-base font-bold text-[#181109]'>
                          {journey.season.split(" • ")[0]}
                        </dd>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className='flex items-center justify-between gap-4'>
                      {index > 0 && (
                        <a
                          href={`#journey-${signatureJourneys[index - 1].id}`}
                          className='journey-anchor group flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#957450] text-[#957450] hover:bg-[#957450] hover:text-white transition-all'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            className='h-4 w-4'
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                          >
                            <path d='M15 19l-7-7 7-7' />
                          </svg>
                          Previous
                        </a>
                      )}
                      {index < signatureJourneys.length - 1 && (
                        <a
                          href={`#journey-${signatureJourneys[index + 1].id}`}
                          className='journey-anchor group flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#957450] text-white bg-[#957450] hover:bg-[#7a5d42] transition-all'
                        >
                          Next
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            className='h-4 w-4'
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                          >
                            <path d='M9 5l7 7-7 7' />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
