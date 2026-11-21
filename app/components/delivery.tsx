export function Delivery() {
  return (
    <section aria-labelledby="delivery-title" className="grid grid-cols-2 items-start gap-[9vw] px-[6vw] py-[clamp(5rem,10vw,9rem)] max-sm:grid-cols-1 max-sm:gap-9 max-sm:px-5 max-sm:py-18">
      <div>
        <p className="mb-5 text-[0.78rem] font-extrabold tracking-[0.14em] text-terracotta uppercase">Across the neighbourhood</p>
        <h2 id="delivery-title" className="max-w-[670px] font-serif text-[clamp(2.6rem,5.5vw,5.4rem)] leading-[0.98] font-normal tracking-[-0.035em]">Local delivery, handled by our own team.</h2>
      </div>
      <div className="pt-9 max-sm:pt-0">
        <p className="mb-4 max-w-[650px] text-lg leading-8">We deliver to N16, N1 and E5 on Tuesdays and Saturdays. Delivery is £6.50, or free when you spend £50. Orders placed by 2pm the day before are eligible for the next round.</p>
        <p className="mb-4 max-w-[650px] text-lg leading-8">We carry plants to your door and bring reusable crates back with us. For anything taller than 1.2m, call so we can confirm access first.</p>
        <a href="mailto:hello@fernandclay.example?subject=Local%20delivery" className="mt-3 inline-block font-extrabold text-forest underline underline-offset-4">Arrange local delivery</a>
      </div>
    </section>
  );
}
