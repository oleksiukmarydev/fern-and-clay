import { Brand } from "./brand";

export function Footer() {
  return (
    <footer className="grid grid-cols-[auto_1fr] items-center gap-12 bg-[#0d241d] px-[4vw] py-10 text-white max-sm:grid-cols-1 max-sm:gap-4 max-sm:px-5">
      <a href="#top"><Brand footer /></a>
      <p className="justify-self-end text-sm text-white/70 max-sm:justify-self-start">Plants, pots and practical help in Stoke Newington.</p>
    </footer>
  );
}
