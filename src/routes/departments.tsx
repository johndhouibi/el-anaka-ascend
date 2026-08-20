import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { useRegistration } from "@/components/RegistrationDialog";
import { DEPARTMENTS } from "@/lib/site";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments & Programs — El Anaka Academy Sfax" },
      {
        name: "description",
        content:
          "Explore certified curricula in culinary arts and pastry, beauty & aesthetics, and fashion design at El Anaka Academy in Sfax.",
      },
      { property: "og:title", content: "Departments & Programs — El Anaka Academy" },
      {
        property: "og:description",
        content: "Certified curricula in culinary arts, aesthetics and fashion design.",
      },
    ],
  }),
  component: DepartmentsPage,
});

function DepartmentsPage() {
  const { open } = useRegistration();

  return (
    <>
      <section className="bg-gradient-marine py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Departments"
            title="Curricula built with the trade, for the trade"
            description="Full-year diplomas and rapid training formats, all under state pedagogical control."
            inverted
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page space-y-20">
          {DEPARTMENTS.map((dept, i) => (
            <div
              key={dept.slug}
              id={dept.slug}
              className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={dept.image}
                  alt={dept.title}
                  loading="lazy"
                  width={900}
                  height={700}
                  className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant"
                />
              </div>
              <div>
                <span className="text-3xl">{dept.icon}</span>
                <h2 className="mt-3 text-3xl font-extrabold text-marine">{dept.title}</h2>
                <p className="mt-3 text-muted-foreground">{dept.tagline}</p>

                <ul className="mt-7 space-y-3">
                  {dept.courses.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold/60"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {dept.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground"
                    >
                      <GraduationCap className="size-3.5" />
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button variant="marine" size="lg" onClick={() => open(dept.title)}>
                    Apply to this department
                  </Button>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="size-4 text-gold" /> Day & evening sessions
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
