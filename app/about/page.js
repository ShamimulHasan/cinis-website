import Link from "next/link";
import Image from "next/image";
import WhyUs from "@/components/WhyUs";
import { IconCheck } from "@/components/Icons";

export const metadata = {
  title: "About Us",
  description: "CINI'S has provided commercial and pharmaceutical cleaning since 1995.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-bg">
          <Image
            src="https://i.ibb.co/jrmSg7Z/hero-section.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / About Us</div>
          <h1>Thirty years of getting the detail right</h1>
          <p>CINI'S has provided commercial and pharmaceutical cleaning services since 1995.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap about-grid">
          <div className="about-photo-wrap">
            <Image
              src="https://www.csocs.com.au/about_us.png"
              alt="The CINI'S team at work"
              fill
              sizes="(max-width: 860px) 100vw, 560px"
              style={{ objectFit: "cover" }}
            />
            <div className="about-badge">
              <strong>25+</strong>
              <span>Years of experience</span>
            </div>
          </div>
          <div className="about-text">
            <span className="eyebrow">Our Story</span>
            <h2>Built on attention to detail</h2>
            <p>
              CINI'S has been providing an exceptional level of cleaning
              services since 1995. Since then, we've become a leading
              choice for cleaning in commercial and pharmaceutical
              settings across Melbourne.
            </p>
            <p>
              Attention to detail is essential when pharmaceutical
              facilities are being cleaned — faulty cleaning and
              sanitisation can result in costly shutdowns. That standard
              shapes every service we offer.
            </p>
            <p>Our focus is simple: listen to our clients, understand their needs, and provide an exceptional level of cleaning service.</p>
            <ul>
              <li><IconCheck /> Trusted by commercial and pharmaceutical clients since 1995</li>
              <li><IconCheck /> Staff trained specifically for cleanroom and lab environments</li>
              <li><IconCheck /> Fully insured on every job</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why Choose Us</span>
            <h2>What clients can expect</h2>
          </div>
          <WhyUs />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-banner">
            <div>
              <h2>Want to know how we'd approach your space?</h2>
              <p>Get in touch and we'll talk through what your facility needs.</p>
            </div>
            <Link href="/contact" className="btn btn-outline">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
