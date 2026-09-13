import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Office Cleaning",
  description: "Enjoy a fresh office every day with our reliable cleaning service.",
};

export default function Page() {
  return (
    <ServiceDetail
      currentHref="/services/office"
      title="Office Cleaning"
      eyebrow="A neat, tidy workplace, every day."
      image="https://i.ibb.co/jrmSg7Z/hero-section.jpg"
      intro="Enjoy a fresh office every day with our reliable cleaning service. We'll make sure your space is neat and tidy — not just before an inspection, but every day your team walks in."
      points={[
        "Recurring cleaning scheduled around your working hours",
        "Kitchens, bathrooms, desks and common areas covered",
        "Consistent staff who know your space",
        "Flexible arrangements as your office grows",
      ]}
    />
  );
}
