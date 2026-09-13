import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Lab Preparation",
  description: "Smooth lab preparation starts with us — making lab setup a breeze.",
};

export default function Page() {
  return (
    <ServiceDetail
      currentHref="/services/lab-preparation"
      title="Lab Preparation"
      eyebrow="A ready space before a single experiment starts."
      image="https://i.ibb.co/jrmSg7Z/hero-section.jpg"
      intro="Smooth lab preparation starts with us. We make lab setup a breeze with our cleaning service, so your workspace is ready to shine before it's put to use."
      points={[
        "Pre-use cleaning so setup doesn't stall on cleanliness",
        "Coordinated timing around your project start dates",
        "Attention to detail across benches, fittings and fixtures",
        "A clean handover you can inspect before moving in",
      ]}
    />
  );
}
