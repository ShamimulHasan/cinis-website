import { siteUrl } from "@/lib/site";

// LocalBusiness structured data (Schema.org / JSON-LD) — lets Google show
// CINI'S hours, phone and address directly in search results.
//
// Deliberately NOT including aggregateRating/review markup: the testimonials
// on the site are real quotes but have no star ratings or dates attached, so
// fabricating review schema here would violate Google's structured data
// guidelines (and risks a manual penalty). If CINI'S sets up a Google
// Business Profile with genuine reviews later, that's the correct source for
// review schema — pull from there, don't hand-write it.
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CINI'S Sterile & Office Cleaning Services",
  image: `${siteUrl}/opengraph-image.png`,
  logo: `${siteUrl}/logo.png`,
  url: siteUrl,
  telephone: "+1300933063",
  email: "cinis@csocs.com.au",
  description:
    "Commercial and pharmaceutical cleaning since 1995 — cleanrooms, laboratories, lab preparation, post-maintenance and office cleaning across Melbourne.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2/11 Silvretta Court",
    addressLocality: "Clyde North",
    addressRegion: "VIC",
    postalCode: "3978",
    addressCountry: "AU",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "16:00",
  },
  areaServed: {
    "@type": "City",
    name: "Melbourne",
  },
};
