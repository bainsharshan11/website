import { useParams } from "react-router-dom";

export default function City() {
  const { city } = useParams();

  const cityName =
    (city || "your area")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "24px" }}>
      <h1>Demolition, Drywall Demo & Asbestos Removal in {cityName}, BC</h1>

      <p>
        Everything Demo Demolition serves the Lower Mainland with drywall & interior
        demolition, selective demo, full house demolition, debris hauling, and site prep.
        We work with homeowners, builders, and contractors in {cityName}.
      </p>

      <h2>Services in {cityName}</h2>
      <ul>
        <li>Drywall & interior demolition</li>
        <li>Selective demolition (walls, ceilings, flooring, framing)</li>
        <li>Popcorn ceiling removal (prep + containment)</li>
        <li>Full house demolition (structure removal + haul-out)</li>
        <li>Concrete removal & site prep</li>
        <li>Excavation & site prep (grading, trenching, cleanup)</li>
      </ul>

      <h2>Asbestos-related work</h2>
      <p>
        If asbestos is suspected (common in older drywall compound, ceiling texture, vinyl tile,
        insulation, plaster), we can help coordinate testing and compliant handling.
      </p>

      <h2>Get a quote in {cityName}</h2>
      <p>Call or text for a fast quote.</p>
    </main>
  );
}
