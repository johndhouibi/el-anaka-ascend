import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "@/components/Logo";
import { useRegistration } from "@/components/RegistrationDialog";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/departments", label: "Departments" },
  { to: "/about", label: "About Us" },
  { to: "/student-space", label: "Student Space" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

const LANGS = [
  { code: "FR", label: "Français" },
  { code: "AR", label: "العربية" },
  { code: "EN", label: "English" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const { open } = useRegistration();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-border/70 bg-background/90 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-background"
      }`}
    >
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-marine after:w-full" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="relative rounded-md px-3 py-2 text-sm font-medium transition-colors after:absolute after:bottom-1 after:left-3 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:text-marine hover:after:w-[calc(100%-1.5rem)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
                <Globe />
                <span className="hidden sm:inline">{lang}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {LANGS.map((l) => (
                <DropdownMenuItem key={l.code} onSelect={() => setLang(l.code)}>
                  <span className="font-semibold">{l.code}</span>
                  <span className="ml-2 text-muted-foreground">{l.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="gold" className="hidden sm:inline-flex" onClick={() => open()}>
            Pre-Register Now
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-marine" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="border-b border-border/60 py-3 text-sm font-medium last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="gold"
              className="mt-4 w-full sm:hidden"
              onClick={() => {
                setMobileOpen(false);
                open();
              }}
            >
              Pre-Register Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
