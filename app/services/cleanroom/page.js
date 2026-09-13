import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Cleanroom / Sterile Cleaning | CINI'S",
  description: "Specialising in cleanroom and sterile environment cleaning, meeting even the strictest standards.",
};

export default function Page() {
  return (
    <ServiceDetail
      currentHref="/services/cleanroom"
      title="Cleanroom / Sterile Cleaning"
      eyebrow="Cleaning built for environments where contamination isn't an option."
      image="https://i.ibb.co/jrmSg7Z/hero-section.jpg"
      intro="Specialising in cleanroom and sterile environment cleaning, we ensure impeccable cleanliness to meet even the strictest standards. Pharmaceutical and cleanroom facilities carry no margin for error — faulty cleaning and sanitisation can result in costly shutdowns."
      points={[
        "Staff trained specifically in sterile-environment protocols",
        "Procedures designed to meet strict compliance standards",
        "Scheduling built around your facility's operating hours",
        "Consistent, documented cleaning you can rely on for audits",
      ]}
    />
  );
}
