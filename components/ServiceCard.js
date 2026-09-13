import Link from "next/link";
import { IconArrow } from "./Icons";

export default function ServiceCard({ icon, title, description, href }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={href} className="learn-more">
        Learn more <IconArrow />
      </Link>
    </div>
  );
}
