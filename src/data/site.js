export const siteConfig = {
  name: "Auralis Studio",
  tagline: "We design brands and digital products people remember.",
  description:
    "Auralis Studio is a design agency crafting brand identities, websites and digital experiences that turn attention into growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://auralis-studio.vercel.app",
  email: "hello@auralis.studio",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
