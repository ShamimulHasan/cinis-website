import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img className="footer-logo" src="/logo_white.svg" alt="CINI'S logo" />
            <p style={{ color: "#B9CFE6", fontSize: "0.92rem", maxWidth: "34ch" }}>
              CINI'S has provided commercial and pharmaceutical cleaning
              services since 1995, trusted by facilities across Melbourne
              for spaces where clean isn't optional.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <Link href="/services/cleanroom">Cleanroom / Sterile</Link>
            <Link href="/services/laboratory">Laboratory Cleaning</Link>
            <Link href="/services/lab-preparation">Lab Preparation</Link>
            <Link href="/services/post-maintenance">Post Maintenance</Link>
            <Link href="/services/office">Office Cleaning</Link>
          </div>

          <div>
            <h4>Company</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <h4>Contact</h4>
            <span style={{ display: "block", padding: "6px 0", fontSize: "0.92rem" }}>
              2/11 Silvretta Court, Clyde North, VIC 3978
            </span>
            <a href="tel:+1300933063">1300 933 063</a>
            <a href="mailto:cinis@csocs.com.au">cinis@csocs.com.au</a>
            <span style={{ display: "block", padding: "6px 0", fontSize: "0.92rem" }}>
              Mon–Fri, 9:00am–4:00pm
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CINI'S Sterile &amp; Office Cleaning Services</span>
          <span>Clyde North, Victoria, Australia</span>
        </div>
      </div>
    </footer>
  );
}
