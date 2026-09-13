import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "How CINI'S collects, uses and stores the information you provide when you contact us.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-bg" />
        <div className="wrap">
          <div className="breadcrumb"><Link href="/">Home</Link> / Privacy Policy</div>
          <h1>Privacy Policy</h1>
          <p>How we collect, use and protect the information you share with us.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap legal-content">
          <span className="updated">Last updated: 14 September 2026</span>

          <h2>Who we are</h2>
          <p>
            This policy covers CINI'S Sterile &amp; Office Cleaning Services
            ("CINI'S", "we", "us"), based at 2/11 Silvretta Court, Clyde
            North, VIC 3978. If you have any questions about this policy or
            your information, contact us on{" "}
            <a href="tel:+1300933063">1300 933 063</a> or{" "}
            <a href="mailto:cinis@csocs.com.au">cinis@csocs.com.au</a>.
          </p>

          <h2>What we collect</h2>
          <p>When you submit an enquiry through our contact form, we collect:</p>
          <ul>
            <li>Your name, email address and phone number</li>
            <li>The service you're enquiring about</li>
            <li>Any details you write in your message</li>
          </ul>
          <p>We don't collect any information from visitors who are just browsing the site.</p>

          <h2>How we use it</h2>
          <p>
            We use the information you submit solely to respond to your
            enquiry, discuss your cleaning needs, and provide a quote or
            arrange a service. We don't use it for marketing you haven't
            asked for, and we never sell or rent it to anyone.
          </p>

          <h2>Where it's stored</h2>
          <p>
            Enquiries are saved to a private Google Sheet that only CINI'S
            staff can access, and a copy may be emailed to our team's inbox
            for a faster response. Google acts as our data storage provider
            for this — they don't use your information for their own
            purposes. Your enquiry is kept until we no longer need it for
            the purpose you submitted it for, or until you ask us to delete
            it.
          </p>

          <h2>Cookies and local storage</h2>
          <p>
            This site doesn't use tracking or advertising cookies. Your
            light/dark theme preference is saved in your browser's local
            storage — it never leaves your device and isn't visible to us.
          </p>
          <p>
            We use Vercel Analytics to understand overall site traffic
            (e.g. how many people visit, which pages are popular). It
            doesn't use cookies and doesn't collect anything that
            identifies you personally — only aggregated, anonymous usage
            statistics.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask us at any time what information we hold about you,
            ask us to correct it, or ask us to delete it. Contact us using
            the details above and we'll action your request.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes, we'll update this page and the "last
            updated" date above.
          </p>
        </div>
      </section>
    </>
  );
}
