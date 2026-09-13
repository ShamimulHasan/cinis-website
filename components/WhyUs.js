import { IconTeam, IconHeart, IconSparkle, IconBolt, IconShield } from "./Icons";

const items = [
  {
    icon: <IconTeam />,
    title: "Experienced Crew",
    text: "With over 25 years in the industry, CINI'S is a trusted leader in commercial and pharmaceutical cleaning.",
  },
  {
    icon: <IconHeart />,
    title: "Client-Focused",
    text: "We listen to your needs and tailor our services accordingly, ensuring your satisfaction every time.",
  },
  {
    icon: <IconSparkle />,
    title: "Exceptional Quality",
    text: "Our commitment to excellence guarantees a clean and healthy environment for your business.",
  },
  {
    icon: <IconBolt />,
    title: "Responsive Customer Service",
    text: "If something goes wrong, we take decisive action to fully resolve the problem — quickly.",
  },
  {
    icon: <IconShield />,
    title: "Fully Insured",
    text: "Our cleaning services are fully insured, giving clients confidence and peace of mind.",
  },
];

export default function WhyUs() {
  return (
    <div className="why-grid">
      {items.map((item) => (
        <div className="why-item" key={item.title}>
          <div className="why-icon">{item.icon}</div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
