import Image from "next/image";
import { workshops } from "@/data/workshops";

export function Workshops() {
  return (
    <section id="workshops" aria-labelledby="workshops-title" className="grid min-h-[720px] grid-cols-[minmax(0,1.06fr)_minmax(400px,0.94fr)] bg-forest-deep text-white max-lg:grid-cols-1">
      <div className="relative min-h-[520px] max-sm:min-h-0 max-sm:aspect-4/3">
        <Image src="/images/potting-workshop.jpg" alt="People repotting leafy plants together at a timber greenhouse table" fill sizes="(max-width: 1024px) 100vw, 53vw" className="object-cover" />
      </div>
      <div className="flex flex-col justify-center px-[clamp(4rem,7vw,7.5rem)] py-16 max-sm:px-5 max-sm:py-18">
        <p className="mb-5 text-[0.78rem] font-extrabold tracking-[0.14em] text-[#d4ae72] uppercase">At the potting bench</p>
        <h2 id="workshops-title" className="mb-6 font-serif text-[clamp(2.6rem,5.5vw,5.4rem)] leading-[0.98] font-normal tracking-[-0.035em]">Small workshops, with time to ask questions.</h2>
        <p className="max-w-[530px] text-white/70">Six places per session. Tools, materials, tea and a plant to take home are included.</p>
        <div className="my-7 border-t border-white/25">
          {workshops.map((workshop) => (
            <article key={workshop.name} className="flex justify-between gap-8 border-b border-white/25 py-5">
              <div>
                <p className="mb-2 text-xs font-bold tracking-[0.07em] text-[#d4ae72] uppercase">{workshop.date}</p>
                <h3 className="mb-1 font-serif text-2xl font-normal">{workshop.name}</h3>
                <p className="text-sm text-white/62">{workshop.description}</p>
              </div>
              <strong>{workshop.price}</strong>
            </article>
          ))}
        </div>
        <a href="mailto:hello@fernandclay.example?subject=Workshop%20booking" className="inline-flex min-h-13 items-center justify-center border border-white/50 px-5 py-3 text-sm font-extrabold tracking-[0.035em] no-underline hover:bg-cream hover:text-forest">Ask about a place</a>
      </div>
    </section>
  );
}
