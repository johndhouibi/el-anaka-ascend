import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { Department } from "@/lib/site";

export function DepartmentCard({ dept }: { dept: Department }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-elegant">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={dept.image}
          alt={dept.title}
          loading="lazy"
          width={900}
          height={700}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-marine/80 via-marine/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-marine backdrop-blur">
          {dept.icon} Department
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-marine">{dept.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dept.tagline}</p>

        <ul className="mt-5 space-y-2">
          {dept.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
              <Check className="size-4 shrink-0 text-gold" />
              {h}
            </li>
          ))}
        </ul>

        <Link
          to="/departments"
          hash={dept.slug}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-marine transition-colors hover:text-gold"
        >
          View curriculum
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
