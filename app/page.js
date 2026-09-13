import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ServiceFinder from "@/components/ServiceFinder";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import RevealOnScroll from "@/components/RevealOnScroll";
import { IconFlask, IconBuilding, IconWrench, IconSparkle, IconShield, IconArrow } from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img src="https://i.ibb.co/jrmSg7Z/hero-section.jpg" alt="" />
        </div>
        <div className="wrap">
          <div className="hero-content">
            <span className="eyebrow">Melbourne · Since 1995</span>
            <h1>Experience the cleanliness your space deserves.</h1>
            <p>
              From cleanrooms and laboratories to everyday offices, CINI'S
              delivers precision cleaning that meets the standard your
              environment demands.
            </p>
            <div className="cta-row">
              <a href="tel:+1300933063" className="btn btn-primary">Call 1300 933 063</a>
              <Link href="/about" className="btn btn-outline">Learn more</Link>
            </div>
          </div>

          <div className="hero-strip">
            <div className="item"><strong>25+</strong><span>Years in operation</span></div>
            <div className="item"><strong>5</strong><span>Specialist services</span></div>
            <div className="item"><strong>Fully</strong><span>Insured &amp; trusted</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="eyebrow">Our Services</span>
            <h2>Quality cleaning for a refreshing environment</h2>
            <p>Five specialised services, each run to the standard its environment requires.</p>
          </RevealOnScroll>
          <div className="services-grid">
            <ServiceCard
              icon={<IconShield />}
              title="Cleanroom / Sterile Cleaning"
              description="Cleaning to meet strict sterile-environment standards for spaces where contamination isn't an option."
              href="/services/cleanroom"
            />
            <ServiceCard
              icon={<IconFlask />}
              title="Laboratory Cleaning"
              description="Specialised sanitisation for lab spaces, carried out by a team trained in the environment's requirements."
              href="/services/laboratory"
            />
            <ServiceCard
              icon={<IconSparkle />}
              title="Lab Preparation"
              description="Getting a space ready before it's put to use, so setup doesn't stall on cleaning."
              href="/services/lab-preparation"
            />
            <ServiceCard
              icon={<IconWrench />}
              title="Post Maintenance Cleaning"
              description="Clearing the residue maintenance work leaves behind, so the space is handed back looking its best."
              href="/services/post-maintenance"
            />
            <ServiceCard
              icon={<IconBuilding />}
              title="Office Cleaning"
              description="Reliable, recurring cleaning that keeps a workplace neat and tidy every day, not just before inspections."
              href="/services/office"
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <ServiceFinder />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Attention to detail, every time</h2>
            <p>
              Faulty cleaning and sanitisation in pharmaceutical facilities
              can result in costly shutdowns — CINI'S is built around
              getting the detail right.
            </p>
          </RevealOnScroll>
          <WhyUs />
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="eyebrow">See The Difference</span>
            <h2>This is the standard we clean to</h2>
            <p>Drag the slider to see what "clean" means at CINI'S.</p>
          </RevealOnScroll>
          <BeforeAfterSlider
            beforeSrc="https://i.ibb.co/jrmSg7Z/hero-section.jpg"
            afterSrc="https://i.ibb.co/jrmSg7Z/hero-section.jpg"
            beforeLabel="Untreated"
            afterLabel="CINI'S clean"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap about-grid">
          <div className="about-photo-wrap">
            <img src="https://www.csocs.com.au/about_us.png" alt="The CINI'S team at work" />
            <div className="about-badge">
              <strong>1995</strong>
              <span>Established</span>
            </div>
          </div>
          <div className="about-text">
            <span className="eyebrow">About Our Company</span>
            <h2>Thirty years of cleaning the spaces others can't get wrong</h2>
            <p>
              CINI'S has provided an exceptional level of cleaning services
              since 1995. Since then, we've become a leading choice for
              commercial and pharmaceutical cleaning across Melbourne.
            </p>
            <p>Our focus has never changed: listen to our clients, understand their needs, and deliver an exceptional standard of service.</p>
            <Link href="/about" className="btn btn-outline-navy">
              Learn more about us
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="eyebrow">Testimonials</span>
            <h2>What our clients say</h2>
          </RevealOnScroll>
          <Testimonials />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-banner">
            <div>
              <h2>Ready for a cleaner, safer space?</h2>
              <p>Tell us about your facility and we'll tell you how we'd approach it.</p>
            </div>
            <div className="cta-row">
              <Link href="/contact" className="btn btn-outline">
                Request a quote <IconArrow />
              </Link>
              <a href="tel:+1300933063" className="btn" style={{ background: "#fff", color: "var(--navy)" }}>
                Call 1300 933 063
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
