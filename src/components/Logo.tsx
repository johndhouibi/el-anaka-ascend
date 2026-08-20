import { Link } from "@tanstack/react-router";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-gold text-base font-black text-marine shadow-gold">
        EA
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`truncate text-lg font-extrabold tracking-[0.18em] ${
            inverted ? "text-marine-foreground" : "text-marine"
          }`}
        >
          EL ANAKA
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
          Since 1972
        </span>
      </span>
    </Link>
  );
}
