import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About El Anaka Academy — 50 Years of Training in Sfax" },
      {
        name: "description",
        content:
          "Founded in 1972, El Anaka Academy is a state-certified vocational training center in Sfax, Tunisia, specialising in culinary arts, aesthetics and fashion.",
      },
      { property: "og:title", content: "About El Anaka Academy" },
      {
        property: "og:description",
        content: "A Sfax institution training certified professionals since 1972.",
      },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { year: "1972", text: "El Anaka opens its doors in Sfax with its first sewing and cutting workshops." },
  { year: "1988", text: "The beauty & aesthetics department is created, with a public training salon." },
  { year: "2001", text: "Culinary arts and pastry programs launch in fully equipped production kitchens." },
  { year: "2014", text: "Rapid training formats introduced for working adults and career changers." },
  { year: "Today", text: "Three departments, twelve certified programs, thousands of graduates." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-marine py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="About Us"
            title="Half a century of vocational craft"
            description="El Anaka Academy has trained the cooks, stylists and beauty professionals of Sfax since 1972 — always with the same principle: learn the trade by practising it."
            inverted
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <img
            src={heroImage}
            alt="Practical training at El Anaka Academy"
            loading="lazy"
            width={1200}
            height={1408}
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
          />
          <div>
            <h2 className="text-3xl font-extrabold text-marine">Our mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We prepare young people and career changers for real, employable trades. Our
              instructors are practising professionals, our workshops mirror working environments,
              and every diploma is issued under state pedagogical control.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From the first week, students spend the majority of their time in the kitchen, the
              salon or the atelier. That is how confidence — and a career — is built.
            </p>

            <ol className="mt-10 space-y-6 border-l border-border pl-6">
              {TIMELINE.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[1.9rem] top-1.5 size-3 rounded-full bg-gradient-gold" />
                  <p className="text-sm font-black tracking-wide text-gold">{t.year}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
