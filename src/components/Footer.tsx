import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { CONTACT, DEPARTMENTS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-gradient-marine text-marine-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="[&_a]:text-marine-foreground">
            <Logo inverted />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-marine-foreground/70">
            A Sfax institution since 1972, training certified professionals in culinary arts,
            aesthetics and fashion design.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid size-9 place-items-center rounded-full border border-marine-foreground/20 text-marine-foreground/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Programs</h3>
          <ul className="mt-5 space-y-3 text-sm text-marine-foreground/75">
            {DEPARTMENTS.map((d) => (
              <li key={d.slug}>
                <Link to="/departments" hash={d.slug} className="transition-colors hover:text-gold">
                  {d.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Academy</h3>
          <ul className="mt-5 space-y-3 text-sm text-marine-foreground/75">
            <li>
              <Link to="/about" className="transition-colors hover:text-gold">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/student-space" className="transition-colors hover:text-gold">
                Student Space
              </Link>
            </li>
            <li>
              <Link to="/news" className="transition-colors hover:text-gold">
                News
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Headquarters
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-marine-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{CONTACT.address}</span>
            </li>
            {CONTACT.phones.map((p) => (
              <li key={p} className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-gold">
                  {p}
                </a>
              </li>
            ))}
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-marine-foreground/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-marine-foreground/55 sm:flex-row">
          <p>© {new Date().getFullYear()} El Anaka Academy — Sfax, Tunisia. All rights reserved.</p>
          <p>Diplômes agréés par l'État · Since 1972</p>
        </div>
      </div>
    </footer>
  );
}
