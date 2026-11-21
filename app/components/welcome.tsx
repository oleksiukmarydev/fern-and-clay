const facts = [
  ["Fresh stock", "Unpacked every Thursday"],
  ["Care desk", "Free, every day we’re open"],
  ["Local delivery", "N16, N1 and E5"],
] as const;

export function Welcome() {
  return (
    <section aria-labelledby="welcome-title" className="grid grid-cols-[minmax(150px,0.55fr)_minmax(300px,1.5fr)_minmax(230px,0.75fr)] gap-[5vw] px-[6vw] py-[clamp(5rem,10vw,9rem)] max-lg:grid-cols-[1fr_2fr] max-sm:grid-cols-1 max-sm:gap-9 max-sm:px-5 max-sm:py-18">
      <p className="text-[0.78rem] font-extrabold tracking-[0.14em] text-terracotta uppercase">The glasshouse</p>
      <div>
        <h2 id="welcome-title" className="mb-8 max-w-[850px] font-serif text-[clamp(2.6rem,5.5vw,5.4rem)] leading-[0.98] font-normal tracking-[-0.035em] text-balance">A neighbourhood greenhouse for plants that settle in well.</h2>
        <p className="max-w-[680px] text-lg leading-8">We grow and acclimatise our stock in the same cool, changeable conditions found in many London homes. Come in with a photo of your room and we’ll help you choose a plant that suits its light, warmth and your weekly routine.</p>
      </div>
      <dl className="m-0 border-t border-ink/20 max-lg:col-start-2 max-sm:col-auto">
        {facts.map(([term, detail]) => (
          <div key={term} className="border-b border-ink/20 py-5">
            <dt className="font-extrabold">{term}</dt>
            <dd className="mt-1 text-sm text-[#5c655f]">{detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
