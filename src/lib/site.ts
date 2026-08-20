import culinary from "@/assets/dept-culinary.jpg";
import beauty from "@/assets/dept-beauty.jpg";
import fashion from "@/assets/dept-fashion.jpg";

export type Department = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  image: string;
  courses: string[];
  highlights: string[];
};

export const DEPARTMENTS: Department[] = [
  {
    slug: "culinary",
    icon: "🍳",
    title: "Culinary Arts & Pâtisserie",
    tagline: "Kitchen technician, European & Tunisian pastry, artisan baking.",
    image: culinary,
    courses: [
      "Kitchen Technician (Technicien de cuisine)",
      "European & Tunisian Pastry",
      "Artisan Bakery & Viennoiserie",
      "Restaurant Service & Hospitality",
    ],
    highlights: ["State-certified", "Rapid training available", "Production kitchens on site"],
  },
  {
    slug: "beauty",
    icon: "💄",
    title: "Beauty & Aesthetics",
    tagline: "Hairdressing for men and women, advanced skincare, beautician training.",
    image: beauty,
    courses: [
      "Hairdressing — Women",
      "Hairdressing — Men (Barbering)",
      "Beautician / Esthéticienne",
      "Advanced Skincare & Spa Techniques",
    ],
    highlights: ["State-certified", "Live training salon", "Evening sessions"],
  },
  {
    slug: "fashion",
    icon: "✂️",
    title: "Fashion & Clothing",
    tagline: "Stylist-modéliste, pattern cutting, industrial and couture sewing.",
    image: fashion,
    courses: [
      "Styliste-Modéliste",
      "Pattern Making & Cutting (Coupe)",
      "Couture & Industrial Sewing",
      "Traditional Tunisian Garment Design",
    ],
    highlights: ["State-certified", "Equipped atelier", "Portfolio support"],
  },
];

export const CONTACT = {
  address: "Route de Tunis km 0.5, Immeuble COTUB — 3002 Sfax, Tunisia",
  phones: ["+216 74 401 111", "+216 98 400 222"],
  email: "contact@elanaka.com",
  hours: "Mon – Sat · 08:00 – 18:00",
};
