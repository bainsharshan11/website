import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function City() {
  const { city } = useParams<{ city: string }>();

  if (!city) return null;

  const cityName = city
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">
          Demolition, Drywall & Asbestos Removal in {cityName}, BC
        </h1>

        <p className="mb-4">
          Everything Demo Demolition provides professional drywall demolition,
          asbestos abatement, and full house demolition services in {cityName} and
          across the Lower Mainland.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Services in {cityName}
        </h2>

        <ul className="list-disc pl-6 mb-6">
          <li>Drywall & interior demolition</li>
          <li>Asbestos testing & abatement</li>
          <li>Full house demolition</li>
          <li>Selective & structural demolition</li>
          <li>Concrete removal & site prep</li>
        </ul>

        <p>
          Contact us today for a free quote in <strong>{cityName}</strong>.
        </p>
      </main>

      <Footer />
    </div>
  );
}
