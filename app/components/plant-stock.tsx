import Image from "next/image";
import { plants } from "@/data/plants";

export function PlantStock() {
  return (
    <section id="plants" aria-labelledby="plants-title" className="bg-forest px-[6vw] py-[clamp(5rem,10vw,9rem)] text-white max-sm:px-5 max-sm:py-18">
      <div className="mb-14 flex items-end justify-between gap-12 max-sm:mb-9 max-sm:block">
        <div>
          <p className="mb-5 text-[0.78rem] font-extrabold tracking-[0.14em] text-[#d4ae72] uppercase">In the greenhouse now</p>
          <h2 id="plants-title" className="font-serif text-[clamp(2.6rem,5.5vw,5.4rem)] leading-[0.98] font-normal tracking-[-0.035em]">Plants available this week</h2>
        </div>
        <p className="mb-2 max-w-[390px] text-white/68 max-sm:mt-6">Stock changes as plants grow and sell. Call before travelling if you have one in mind.</p>
      </div>
      <div className="grid grid-cols-[minmax(0,1.14fr)_minmax(350px,0.86fr)] items-start gap-[clamp(2.5rem,5vw,6rem)] max-sm:grid-cols-1">
        <figure>
          <Image src="/images/plant-bench.jpg" width={1536} height={1024} sizes="(max-width: 640px) 100vw, 55vw" alt="Ferns, pothos, rubber plants and other leafy plants on a greenhouse bench" className="aspect-4/3 w-full object-cover" />
          <figcaption className="mt-3 font-serif text-white/62 italic">Thursday’s bench, freshly watered.</figcaption>
        </figure>
        <div className="border-t border-white/30">
          {plants.map((plant) => (
            <article key={plant.name} className="grid grid-cols-[1fr_auto] gap-6 border-b border-white/30 py-6 max-sm:gap-3">
              <div>
                <h3 className="mb-1 font-serif text-2xl font-normal">{plant.name}</h3>
                <p className="text-sm text-white/64">{plant.care}</p>
              </div>
              <p className="flex min-w-20 flex-col items-end gap-1 text-sm text-white/64"><span>{plant.pot}</span><strong className="text-base text-white">{plant.price}</strong></p>
            </article>
          ))}
        </div>
      </div>
      <p className="mt-10 ml-auto max-w-[640px] border-l-2 border-brass pl-4 text-white/74">Each plant comes with a handwritten care card. Nursery pots are included; terracotta cover pots start at £8.</p>
    </section>
  );
}
