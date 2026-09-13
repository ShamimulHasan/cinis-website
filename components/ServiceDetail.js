import Link from "next/link";
import { IconCheck } from "./Icons";

const allServices = [
  { href: "/services/cleanroom", label: "Cleanroom / Sterile Cleaning" },
  { href: "/services/laboratory", label: "Laboratory Cleaning" },
  { href: "/services/lab-preparation", label: "Lab Preparation" },
  { href: "/services/post-maintenance", label: "Post Maintenance Cleaning" },
  { href: "/services/office", label: "Office Cleaning" },
];

export default function ServiceDetail({ title, eyebrow, intro, image, points, currentHref }) {
  const related = allServices.filter((s) => s.href !== currentHref);

  return (
    <>
      <section className="page-hero">
        <div className="hero-bg">
          <img src={image} alt="" />
        </div>
        <div className="wrap">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/services/cleanroom">Services</Link> / {title}
          </div>
          <h1>{title}</h1>
          <p>{eyebrow}</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap service-detail">
          <div>
            <img src={image} alt={title} />
            <p>{intro}</p>
            <ul className="checklist">
              {points.map((point) => (
                <li key={point}><IconCheck /> {point}</li>
              ))}
            </ul>
            <div className="cta-row" style={{ marginTop: "20px" }}>
              <Link href="/contact" className="btn btn-primary">Request a quote</Link>
              <a href="tel:+1300933063" className="btn btn-outline-navy">Call 1300 933 063</a>
            </div>
          </div>

          <aside className="sidebar-card">
            <h3>Other services</h3>
            <div className="related-services">
              {related.map((s) => (
                <Link key={s.href} href={s.href}>{s.label}</Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
