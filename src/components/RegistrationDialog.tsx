import { createContext, useContext, useState, type ReactNode } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DEPARTMENTS } from "@/lib/site";

type Ctx = { open: (program?: string) => void };
const RegistrationContext = createContext<Ctx>({ open: () => {} });

export const useRegistration = () => useContext(RegistrationContext);

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [program, setProgram] = useState("");

  return (
    <RegistrationContext.Provider
      value={{
        open: (p) => {
          setProgram(p ?? "");
          setIsOpen(true);
        },
      }}
    >
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl">Pre-Registration</DialogTitle>
            <DialogDescription>
              Reserve your seat for the next intake. Our admissions team replies within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <RegistrationForm defaultProgram={program} onDone={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </RegistrationContext.Provider>
  );
}

export function RegistrationForm({
  defaultProgram = "",
  onDone,
}: {
  defaultProgram?: string;
  onDone?: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const allCourses = DEPARTMENTS.flatMap((d) => d.courses.map((c) => `${d.title} — ${c}`));

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitting(true);
        window.setTimeout(() => {
          setSubmitting(false);
          toast.success("Request received", {
            description: "Admissions will contact you within 24 hours.",
          });
          (e.target as HTMLFormElement).reset();
          onDone?.();
        }, 600);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" name="firstName" required placeholder="Amine" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" name="lastName" required placeholder="Ben Salah" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@email.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" required placeholder="+216 ..." />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="program">Desired program</Label>
        <select
          id="program"
          name="program"
          defaultValue={defaultProgram}
          required
          className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <option value="" disabled>
            Select a program
          </option>
          {DEPARTMENTS.map((d) => (
            <option key={d.slug} value={d.title}>
              {d.title}
            </option>
          ))}
          {allCourses.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea id="message" name="message" rows={3} placeholder="Tell us about your goals..." />
      </div>
      <Button type="submit" variant="gold" size="lg" disabled={submitting} className="w-full">
        {submitting ? "Sending..." : "Submit pre-registration"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        By submitting you agree to be contacted by El Anaka Academy admissions.
      </p>
    </form>
  );
}
