import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { IconPin, IconPhone, IconMail, IconClock } from "@/components/Icons";

export const metadata = {
  title: "Contact | CINI'S Sterile & Office Cleaning Services",
  description: "Get in touch with CINI'S for a cleaning quote across cleanroom, laboratory and office spaces.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" style={{ padding: "90px 0 60px" }}>
        <div className="hero-bg">
          <img src="https://i.ibb.co/jrmSg7Z/hero-section.jpg" alt="" />
        </div>
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Contact</div>
          <h1>Talk to us about your space</h1>
          <p>Office, lab or cleanroom — tell us what you're working with and we'll tell you how we'd approach it.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-layout">
          <div className="contact-info-card">
            <h3>Contact details</h3>
            <div className="contact-info-row">
              <IconPin />
              <div><strong>Address</strong><span>2/11 Silvretta Court, Clyde North, VIC 3978</span></div>
            </div>
            <div className="contact-info-row">
              <IconPhone />
              <div><strong>Phone</strong><span><a href="tel:+1300933063">1300 933 063</a></span></div>
            </div>
            <div className="contact-info-row">
              <IconMail />
              <div><strong>Email</strong><span><a href="mailto:cinis@csocs.com.au">cinis@csocs.com.au</a></span></div>
            </div>
            <div className="contact-info-row">
              <IconClock />
              <div><strong>Hours</strong><span>Mon–Fri, 9:00am–4:00pm</span></div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
