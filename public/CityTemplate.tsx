type CityPageProps = { city: string };

export default function CityPage({ city }: CityPageProps) {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "24px" }}>
      <h1>Demolition, Drywall Demo & Asbestos-Related Removal in {city}, BC</h1>

      <p>
        Everything Demo Demolition serves the Lower Mainland with drywall & interior
        demolition, selective demo, full house demolition, debris hauling, and site prep.
        We work with homeowners, builders, and contractors in {city}.
      </p>

      <h2>Services in {city}</h2>
      <ul>
        <li><strong>Drywall & interior demolition</strong> (suites, kitchens, baths)</li>
        <li><strong>Selective demolition</strong> (walls, ceilings, flooring, framing)</li>
        <li><strong>Popcorn ceiling removal</strong> (prep + containment)</li>
        <li><strong>Full house demolition</strong> (structure removal + haul-out)</li>
        <li><strong>Concrete removal</strong> (slabs, patios, walkways)</li>
        <li><strong>Excavation & site prep</strong> (grading, trenching, cleanup)</li>
      </ul>

      <h2>Asbestos-related work</h2>
      <p>
        If asbestos is suspected (common in older drywall compound, ceiling texture, vinyl tile,
        insulation, plaster), we can help coordinate testing and compliant removal/handling.
        Safety and regulatory compliance come first.
      </p>

      <h2>Get a quote in {city}</h2>
      <p>
        Send photos, square footage, access notes, and timeline — we’ll quote it and book you in.
      </p>
    </main>
  );
}
