import Image from "next/image";
import { OpeningStatus } from "./opening-status";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[min(920px,100svh)] items-end overflow-hidden bg-forest-deep text-white max-sm:min-h-[790px]">
      <Image src="/images/greenhouse-hero.jpg" alt="Leafy houseplants on worn timber benches inside a misted old greenhouse" fill preload sizes="100vw" className="object-cover object-center max-sm:object-[62%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,28,22,0.82)_0%,rgba(9,28,22,0.54)_40%,rgba(9,28,22,0.08)_72%),linear-gradient(0deg,rgba(9,28,22,0.58)_0%,transparent_45%)] max-sm:bg-[linear-gradient(0deg,rgba(9,28,22,0.93)_0%,rgba(9,28,22,0.48)_72%,rgba(9,28,22,0.32)_100%)]" aria-hidden="true" />
      <div className="relative z-10 w-[min(790px,70vw)] px-[3vw] pt-[clamp(9rem,18vh,13rem)] pb-[clamp(3.5rem,8vh,6rem)] max-sm:w-full max-sm:px-5 max-sm:pt-32 max-sm:pb-[9.5rem]">
        <p className="mb-5 text-[0.78rem] font-extrabold tracking-[0.14em] uppercase">Plant shop &amp; working greenhouse · Stoke Newington</p>
        <h1 id="hero-title" className="mb-6 max-w-[780px] font-serif text-[clamp(3.4rem,7.6vw,7.4rem)] leading-[0.98] font-normal tracking-[-0.035em] text-balance max-sm:text-[clamp(3.1rem,15vw,4.6rem)]">Plants grown with patience, chosen for London homes.</h1>
        <p className="mb-8 max-w-[590px] text-[clamp(1.06rem,1.7vw,1.35rem)] leading-[1.55] text-white/88">Houseplants, honest care advice and small weekend workshops, all under the old glasshouse roof.</p>
        <div className="flex flex-wrap items-center gap-7">
          <a href="#plants" className="inline-flex min-h-13 items-center justify-center bg-cream px-5 py-3 text-sm font-extrabold tracking-[0.035em] text-forest no-underline hover:bg-white">See what’s in the greenhouse</a>
          <a href="#visit" className="font-extrabold underline underline-offset-4">Plan your visit</a>
        </div>
      </div>
      <aside aria-label="Today's opening information" className="absolute right-[3vw] bottom-14 z-10 w-[220px] border border-white/40 bg-forest/80 p-5 backdrop-blur-md max-sm:inset-x-5 max-sm:bottom-5 max-sm:grid max-sm:w-auto max-sm:grid-cols-[auto_1fr_auto] max-sm:items-center max-sm:gap-3 max-sm:p-3.5">
        <span className="mb-3 block size-2 rounded-full bg-[#b6c896] shadow-[0_0_0_4px_rgba(182,200,150,0.15)] max-sm:mb-0" aria-hidden="true" />
        <p className="mb-2 font-serif text-xl leading-tight max-sm:mb-0 max-sm:text-lg"><OpeningStatus /></p>
        <span className="text-xs text-white/75">18 Fernbank Mews, N16</span>
      </aside>
    </section>
  );
}
