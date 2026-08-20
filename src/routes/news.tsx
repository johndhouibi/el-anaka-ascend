import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { DEPARTMENTS } from "@/lib/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — El Anaka Academy Sfax" },
      {
        name: "description",
        content:
          "Latest news, open days, competitions and intake announcements from El Anaka Academy in Sfax, Tunisia.",
      },
      { property: "og:title", content: "News & Events — El Anaka Academy" },
      {
        property: "og:description",
        content: "Open days, competitions and intake announcements from El Anaka Academy.",
      },
    ],
  }),
  component: NewsPage,
});

const POSTS = [
  {
    date: "12 Sept 2026",
    tag: "Admissions",
    title: "Autumn intake registrations are open",
    body: "Seats for the culinary, aesthetics and fashion departments are now open for the autumn session. Places per workshop are limited.",
    image: DEPARTMENTS[0].image,
  },
  {
    date: "28 Aug 2026",
    tag: "Competition",
    title: "Our pastry students win the regional Sfax trophy",
    body: "Three second-year students took first place in the regional pastry competition with a modern take on Tunisian classics.",
    image: DEPARTMENTS[0].image,
  },
  {
    date: "05 Aug 2026",
    tag: "Open day",
    title: "Open day: visit our salon and ateliers",
    body: "Meet the instructors, tour the training salon and atelier, and get personalised advice on choosing your program.",
    image: DEPARTMENTS[1].image,
  },
  {
    date: "19 Jul 2026",
    tag: "Program",
    title: "New rapid training format for working adults",
    body: "Evening and weekend sessions now available for pattern cutting and sewing, designed for career changers.",
    image: DEPARTMENTS[2].image,
  },
];

function NewsPage() {
  return (
    <>
      <section className="bg-gradient-marine py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="News"
            title="What's happening at El Anaka"
            description="Intakes, competitions, open days and student achievements."
            inverted
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-elegant"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={900}
                  height={700}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
                  <span className="text-gold">{p.tag}</span>
                  <span className="text-muted-foreground">{p.date}</span>
                </div>
                <h2 className="mt-3 text-xl font-bold text-marine">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
