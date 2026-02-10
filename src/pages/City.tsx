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

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-10">
        <h1 className="text-4xl font-bold">
          Demolition, Drywall Demo & Asbestos Removal in {cityName}, BC
        </h1>

        <p className="text-lg text-gray-700">
          Everything Demo Demolition provides professional drywall demolition,
          asbestos abatement, and full house demolition services in {cityName}
          and throughout the Lower Mainland.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Demolition Services in {cityName}
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Drywall & interior demolition</li>
            <li>Selective & structural demolition</li>
            <li>Popcorn ceiling removal</li>
            <li>Full house demolition</li>
            <li>Concrete removal & site prep</li>
            <li>Asbestos testing & abatement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Get a Quote in {cityName}
          </h2>
          <p>Call or text today for a fast demolition quote in {cityName}, BC.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
