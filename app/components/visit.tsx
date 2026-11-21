import Image from "next/image";

const hours = [
  ["Monday", "Closed"],
  ["Tuesday–Friday", "10am–6pm"],
  ["Saturday", "9.30am–6pm"],
  ["Sunday", "11am–4pm"],
] as const;

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="grid grid-cols-[minmax(0,1.1fr)_minmax(430px,0.9fr)] bg-[#d8cfbd] max-lg:grid-cols-1">
      <div className="relative min-h-[740px] max-lg:min-h-0 max-lg:aspect-video max-sm:aspect-4/3">
        <Image src="/images/shopfront.jpg" alt="Dark green Fern and Clay shopfront with plants visible through misted glass" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
      </div>
      <div className="px-[clamp(4rem,7vw,7rem)] py-16 max-lg:px-[6vw] max-sm:px-5 max-sm:py-18">
        <p className="mb-5 text-[0.78rem] font-extrabold tracking-[0.14em] text-terracotta uppercase">Come by the greenhouse</p>
        <h2 id="visit-title" className="mb-7 font-serif text-[clamp(2.6rem,5.5vw,5.4rem)] leading-[0.98] font-normal tracking-[-0.035em]">Visit Fern &amp; Clay</h2>
        <address className="font-serif text-2xl leading-9 not-italic">18 Fernbank Mews<br />Stoke Newington<br />London N16 0QH</address>
        <p className="my-6 max-w-[520px] text-[#4e5a53]">Seven minutes’ walk from Stoke Newington station. Cycle stands are beside the mews entrance; step-free access is available through the side gate.</p>
        <div className="grid grid-cols-[1.15fr_0.85fr] gap-12 border-t border-ink/20 pt-8 max-sm:grid-cols-1 max-sm:gap-8">
          <div>
            <h3 className="mb-3 font-serif text-xl font-normal">Opening hours</h3>
            <dl className="text-sm">
              {hours.map(([day, time]) => <div key={day} className="flex justify-between gap-8 py-1"><dt>{day}</dt><dd>{time}</dd></div>)}
            </dl>
          </div>
          <div>
            <h3 className="mb-3 font-serif text-xl font-normal">Contact</h3>
            <p className="text-sm leading-6"><a href="tel:+442079460184" className="underline underline-offset-4">020 7946 0184</a><br /><a href="mailto:hello@fernandclay.example" className="underline underline-offset-4">hello@fernandclay.example</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
