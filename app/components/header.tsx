import { Brand } from "./brand";
import { OpeningStatus } from "./opening-status";

const navItems = [
  ["Plants", "#plants"],
  ["Plant care", "#care"],
  ["Workshops", "#workshops"],
  ["Visit", "#visit"],
] as const;

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 grid grid-cols-[1fr_auto] items-center gap-8 border-b border-white/35 px-[3vw] py-5 text-white lg:grid-cols-[1fr_auto_1fr]">
      <a href="#top" aria-label="Fern & Clay, home" className="w-max no-underline"><Brand /></a>
      <nav aria-label="Primary navigation" className="hidden items-center gap-[clamp(1rem,2.5vw,2.5rem)] lg:flex">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} className="text-[0.82rem] font-bold tracking-[0.06em] uppercase hover:underline">{label}</a>
        ))}
      </nav>
      <a href="#visit" className="justify-self-end text-[0.68rem] font-bold tracking-[0.06em] uppercase hover:underline sm:text-[0.82rem]">
        <OpeningStatus compact />
      </a>
    </header>
  );
}
