import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, CalendarDays, FileText, LifeBuoy } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RegistrationForm } from "@/components/RegistrationDialog";

export const Route = createFileRoute("/student-space")({
  head: () => ({
    meta: [
      { title: "Student Space & Pre-Registration — El Anaka Academy" },
      {
        name: "description",
        content:
          "Pre-register online for culinary, beauty or fashion programs at El Anaka Academy Sfax, and access schedules, curricula and student support.",
      },
      { property: "og:title", content: "Student Space — El Anaka Academy" },
      {
        property: "og:description",
        content: "Pre-register online and access schedules, curricula and student support.",
      },
    ],
  }),
  component: StudentSpacePage,
});

const RESOURCES = [
  { icon: CalendarDays, title: "Intake calendar", body: "Session start dates for all three departments." },
  { icon: FileText, title: "Curricula & documents", body: "Program outlines, supply lists and enrolment forms." },
  { icon: BookOpen, title: "Course materials", body: "Workshop guides shared by your instructors." },
  { icon: LifeBuoy, title: "Student support", body: "Administrative help, internships and career advice." },
];

function StudentSpacePage() {
  return (
    <>
      <section className="bg-gradient-marine py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Student Space"
            title="Everything you need, in one place"
            description="Pre-register for the next intake and find the resources that support you throughout your training."
            inverted
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_minmax(0,26rem)]">
          <div className="grid gap-6 sm:grid-cols-2">
            {RESOURCES.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-marine text-gold">
                  <r.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-marine">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-gold/40 bg-sand p-7 shadow-elegant">
            <h2 className="text-2xl font-extrabold text-marine">Online pre-registration</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the form and our admissions team replies within 24 hours.
            </p>
            <div className="mt-6">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
