import { siteUrl } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/contact",
  "/services/cleanroom",
  "/services/laboratory",
  "/services/lab-preparation",
  "/services/post-maintenance",
  "/services/office",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
