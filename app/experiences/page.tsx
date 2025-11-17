import Link from "next/link";
import ExperiencesHero from "@/components/experiences/ExperiencesHero";
import JourneySpotlights from "@/components/experiences/JourneySpotlights";
import SunriseTimeline from "@/components/experiences/SunriseTimeline";
import ThematicEscapes from "@/components/experiences/ThematicEscapes";

export default function ExperiencesPage() {
  return (
    <main className='min-h-screen bg-[#f7f5f0] py-12 md:py-20'>
      <div className='mx-auto max-w-6xl px-6 lg:px-10 space-y-16 md:space-y-24'>
        <ExperiencesHero />
        <JourneySpotlights />
        <SunriseTimeline />
        <ThematicEscapes />
        <section className='rounded-[2.5rem] bg-white border border-black/5 p-10 flex flex-col gap-6 text-center md:text-left md:flex-row md:items-center md:justify-between'>
          <div>
            <p className='text-xs uppercase tracking-[0.5em] text-neutral-400'>
              White-glove planning
            </p>
            <h3 className='text-2xl md:text-3xl font-semibold text-[#120c05]'>
              Speak to a Kathmandu-based travel designer today.
            </h3>
            <p className='text-neutral-600 mt-2'>
              Share your wishlist—we respond with a crafted moodboard and
              outline within 24 hours.
            </p>
          </div>
          <Link
            href='/#contact'
            className='inline-flex items-center justify-center self-center rounded-full bg-[#120c05] text-white px-6 py-3 text-sm font-semibold tracking-tight'
          >
            Schedule a call
          </Link>
        </section>
      </div>
    </main>
  );
}
