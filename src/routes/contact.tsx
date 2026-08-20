import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RegistrationForm } from "@/components/RegistrationDialog";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Admissions — El Anaka Academy Sfax" },
      {
        name: "description",
        content:
          "Contact El Anaka Academy: Route de Tunis km 0.5, Immeuble COTUB, 3002 Sfax, Tunisia. Phone, email and online inquiry form.",
      },
      { property: "og:title", content: "Contact El Anaka Academy" },
      {
        property: "og:description",
        content: "Reach our admissions team in Sfax by phone, email or online form.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-marine py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Contact"
            title="Talk to our admissions team"
            description="We answer every inquiry within 24 hours, in French, Arabic or English."
            inverted
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-marine">Headquarters</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-marine text-gold">
                  <MapPin className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-marine">Address</p>
                  <p className="text-sm text-muted-foreground">{CONTACT.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-marine text-gold">
                  <Phone className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-marine">Phone</p>
                  {CONTACT.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block text-sm text-muted-foreground hover:text-gold"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-marine text-gold">
                  <Mail className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-marine">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-muted-foreground hover:text-gold"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-marine text-gold">
                  <Clock className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-marine">Opening hours</p>
                  <p className="text-sm text-muted-foreground">{CONTACT.hours}</p>
                </div>
              </li>
            </ul>

            <iframe
              title="El Anaka Academy location in Sfax"
              className="mt-8 h-72 w-full rounded-3xl border border-border"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=10.72%2C34.72%2C10.79%2C34.77&layer=mapnik"
            />
          </div>

          <div className="rounded-3xl border border-gold/40 bg-sand p-7 shadow-elegant">
            <h2 className="text-2xl font-extrabold text-marine">Send an inquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us which program interests you and we'll get back to you.
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
