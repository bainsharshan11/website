import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function City() {
  const { city } = useParams();

  if (!city) return null;

  const cityName = city
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">
          Demolition, Drywall Demo & Asbestos Removal in {cityName}, BC
        </h1>

        <p className="mb-6">
          Everything Demo Demolition provides professional drywall & interior
          demolition, asbestos abatement coordination, and full house demolition
          services in {cityName} and throughout the Lower Mainland.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Services in {cityName}</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Drywall & interior demolition</li>
          <li>Selective demolition (walls, ceilings, flooring, framing)</li>
          <li>Popcorn ceiling removal (prep + containment)</li>
          <li>Full house demolition (structure removal + haul-out)</li>
          <li>Concrete removal & site prep</li>
          <li>Excavation & site prep (grading, trenching, cleanup)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Asbestos-related work</h2>
        <p className="mb-6">
          If asbestos is suspected (common in older drywall compound, ceiling
          texture, vinyl tile, insulation, plaster), we can help coordinate
          testing and compliant handling.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Get a quote in {cityName}</h2>
        <p>Call or text today for a fast quote.</p>
      </main>

      <Footer />
    </div>
  );
}
