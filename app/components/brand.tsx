export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 font-serif tracking-[-0.03em] ${footer ? "text-xl" : "text-2xl"}`}>
      <span className="hidden h-6 w-4 -rotate-[25deg] rounded-[100%_0_100%_0] border border-current sm:block" aria-hidden="true" />
      <span>Fern <i className="font-normal text-brass">&amp;</i> Clay</span>
    </span>
  );
}
