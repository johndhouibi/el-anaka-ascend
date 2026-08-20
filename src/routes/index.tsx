import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, GraduationCap, HandHeart, ShieldCheck, Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { DepartmentCard } from "@/components/DepartmentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { useRegistration } from "@/components/RegistrationDialog";
import { DEPARTMENTS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "El Anaka Academy Sfax — Vocational Training Since 1972" },
      {
        name: "description",
        content:
          "State-certified vocational training in culinary arts, beauty & aesthetics and fashion design in Sfax, Tunisia. Over 50 years of excellence.",
      },
      { property: "og:title", content: "El Anaka Academy — Training Professionals Since 1972" },
      {
        property: "og:description",
        content:
          "Certified programs in culinary arts, aesthetics and fashion design in Sfax, Tunisia.",
      },
    ],
  }),
  component: Index,
});

const STATS = [
  { icon: Award, value: "50+", label: "Years of excellence" },
  { icon: ShieldCheck, value: "100%", label: "State pedagogical control" },
  { icon: GraduationCap, value: "12+", label: "Certified programs" },
  { icon: HandHeart, value: "8000+", label: "Graduates in the field" },
];

const VALUES = [
  {
    icon: Award,
    title: "50+ Years of Excellence",
    body: "Founded in 1972, El Anaka has shaped generations of Sfax professionals across three trades.",
  },
  {
    icon: ShieldCheck,
    title: "Diplômes agréés par l'État",
    body: "Every program runs under state pedagogical control, so your certificate is recognised nationwide.",
  },
  {
    icon: Sparkles,
    title: "Hands-on Practical Training",
    body: "Real kitchens, a live salon and a fully equipped atelier — you learn by doing from week one.",
  },
  {
    icon: HandHeart,
    title: "Professional Career Support",
    body: "Internships, employer introductions and guidance for graduates opening their own business.",
  },
];

function Index() {
  const { open } = useRegistration();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-marine">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute -right-24 top-1/4 size-96 rounded-full bg-gold/20 blur-3xl" />

        <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Star className="size-3.5" /> Sfax · Since 1972
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.08] text-marine-foreground sm:text-5xl xl:text-6xl">
              Empowering Future
              <span className="block bg-gradient-gold bg-clip-text text-transparent">
                Professionals Since 1972
              </span>
            </h1>
            <p className="mt-4 text-lg font-medium text-gold/90">
              Formez-vous aux métiers d'avenir.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-marine-foreground/75 sm:text-lg">
              State-certified vocational training in Culinary Arts, Beauty & Aesthetics and Fashion
              Design — right in the heart of Sfax, Tunisia.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <Link to="/departments">Explore Programs</Link>
              </Button>
              <Button variant="goldOutline" size="xl" onClick={() => open()}>
                Contact Admissions
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-marine-foreground/15 pt-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-black text-gold">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-marine-foreground/60">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden size-32 rounded-3xl border border-gold/40 lg:block" />
            <img
              src={heroImage}
              alt="Student chef plating a dessert at El Anaka Academy"
              width={1200}
              height={1408}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elegant ring-1 ring-marine-foreground/10"
            />
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-gold/30 bg-background/95 p-4 shadow-elegant backdrop-blur sm:left-auto sm:right-6 sm:w-64">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Next intake
              </p>
              <p className="mt-1 text-sm font-semibold text-marine">
                Registrations open — limited seats per workshop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-sand py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Departments"
            title="Three trades. One standard of excellence."
            description="Choose the path that matches your ambition. Every program mixes theory with intensive workshop practice and ends in a state-recognised certificate."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.map((d) => (
              <DepartmentCard key={d.slug} dept={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why El Anaka"
            title="A legacy institution built on results"
            description="More than five decades of training, certified by the state and trusted by employers across the Sfax region."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-marine text-gold transition-colors group-hover:bg-gradient-gold group-hover:text-gold-foreground">
                  <v.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-marine">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-marine px-8 py-14 text-center sm:px-16">
            <div className="absolute -left-16 -top-16 size-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-marine-foreground sm:text-4xl">
                Ready to start your career?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-marine-foreground/70">
                Pre-register in two minutes and our admissions team will guide you to the right
                program and intake date.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button variant="gold" size="xl" onClick={() => open()}>
                  Pre-Register Now
                </Button>
                <Button asChild variant="goldOutline" size="xl">
                  <Link to="/contact">Talk to us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
