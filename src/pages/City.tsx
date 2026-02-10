import { useParams } from "react-router-dom";

export default function City() {
  const { city } = useParams<{ city: string }>();

  if (!city) return null;

  const cityName = city
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "24px" }}>
      <h1>Demolition & Asbestos Removal in {cityName}, BC</h1>

      <p>
        Everything Demo provides professional drywall demolition, asbestos
        abatement, and full house demolition services in {cityName} and
        throughout the Lower Mainland.
      </p>

      <h2>Services in {cityName}</h2>
      <ul>
        <li>Drywall & interior demolition</li>
        <li>Asbestos testing & abatement</li>
        <li>Full house demolition</li>
        <li>Selective & structural demolition</li>
        <li>Concrete removal & excavation</li>
      </ul>

      <p>Call today for a free quote in {cityName}.</p>
    </main>
  );
}
