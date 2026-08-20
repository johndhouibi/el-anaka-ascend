export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  inverted?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${
        inverted ? "text-marine-foreground" : ""
      }`}
    >
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      )}
      <h2
        className={`mt-3 text-3xl font-extrabold sm:text-4xl ${inverted ? "" : "text-marine"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            inverted ? "text-marine-foreground/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
