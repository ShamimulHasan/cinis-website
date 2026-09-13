import ServiceDetail from "@/components/ServiceDetail";

export const metadata = {
  title: "Post Maintenance Cleaning",
  description: "Your space deserves a post-maintenance glow — leave the cleanup to us.",
};

export default function Page() {
  return (
    <ServiceDetail
      currentHref="/services/post-maintenance"
      title="Post Maintenance Cleaning"
      eyebrow="Handed back looking its best."
      image="https://i.ibb.co/jrmSg7Z/hero-section.jpg"
      intro="Your space deserves a post-maintenance glow. Leave the cleanup to us after maintenance work — we'll make sure your space looks its best before anyone steps back in."
      points={[
        "Clearing dust, residue and debris left behind by trade work",
        "Detail cleaning of surfaces disturbed during maintenance",
        "Fast turnaround so downtime stays short",
        "A final space that looks like nothing happened",
      ]}
    />
  );
}
