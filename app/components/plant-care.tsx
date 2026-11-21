const services = [
  ["01", "Quick care check", "Ten minutes at the care desk. Free, no booking needed."],
  ["02", "Repotting", "From £8 plus compost and pot. Leave larger plants with us for collection."],
  ["03", "Holiday watering", "Simple self-watering setups from £12; ask at least a week before you go."],
] as const;

export function PlantCare() {
  return (
    <section id="care" aria-labelledby="care-title" className="grid grid-cols-[minmax(280px,0.8fr)_minmax(350px,1.2fr)] gap-[clamp(4rem,11vw,11rem)] bg-paper px-[6vw] py-[clamp(5rem,10vw,9rem)] max-sm:grid-cols-1 max-sm:gap-15 max-sm:px-5 max-sm:py-18">
      <div>
        <p className="mb-5 text-[0.78rem] font-extrabold tracking-[0.14em] text-terracotta uppercase">Practical plant care</p>
        <h2 id="care-title" className="mb-6 max-w-[650px] font-serif text-[clamp(2.6rem,5.5vw,5.4rem)] leading-[0.98] font-normal tracking-[-0.035em]">Bring us the plant you’re worried about.</h2>
        <p className="mb-8 max-w-[570px] text-lg leading-8">Drop in with the plant, a leaf cutting or a few clear photos. We’ll check for pests, watering problems and root stress, then give you a short plan to follow at home.</p>
        <a href="mailto:hello@fernandclay.example?subject=Plant%20care%20question" className="inline-flex min-h-13 items-center justify-center bg-forest px-5 py-3 text-sm font-extrabold tracking-[0.035em] text-white no-underline hover:bg-forest-deep">Send a plant photo</a>
      </div>
      <div aria-label="Plant care services" className="self-center border-t border-ink/20">
        {services.map(([number, name, description]) => (
          <article key={number} className="grid grid-cols-[3rem_1fr] gap-5 border-b border-ink/20 py-6">
            <span className="pt-1 font-serif text-terracotta">{number}</span>
            <div><h3 className="mb-1 font-serif text-2xl font-normal">{name}</h3><p className="text-[#59635c]">{description}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
