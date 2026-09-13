import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Laboratory Cleaning | CINI'S",
  description: "Get the perfect clean for your lab with our specialised cleaning service.",
};

export default function Page() {
  return (
    <ServiceDetail
      currentHref="/services/laboratory"
      title="Laboratory Cleaning"
      eyebrow="A thorough, specialised clean for lab spaces."
      image="https://i.ibb.co/jrmSg7Z/hero-section.jpg"
      intro="Get the perfect clean for your lab with our specialised cleaning service. Our friendly, trained team thoroughly sanitises lab spaces so your team can focus on the work, not the upkeep."
      points={[
        "Sanitisation tailored to laboratory surfaces and equipment",
        "Careful handling around sensitive instruments and materials",
        "Regular or one-off cleaning schedules available",
        "Trained, friendly staff familiar with lab environments",
      ]}
    />
  );
}
