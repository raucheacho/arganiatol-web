import LegalHero from "@/components/LegalHero";

export default function ShippingPolicy() {
  return (
    <>
      <LegalHero
        title="Shipping Policy"
        subtitle="See how and when Arganiatol delivers your favorite cosmetic products to your door."
      />

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
        <p className="mb-4">Effective date: July 2, 2025</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Order Processing
        </h2>
        <p className="mb-4">
          Orders are processed Monday through Friday, excluding holidays.
          Processing typically takes 1–3 business days after payment
          confirmation.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Shipping Options & Costs
        </h2>
        <p className="mb-4">
          Shipping rates are calculated at checkout based on your location. We
          offer standard, express, and international shipping via trusted
          carriers.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Delivery Times</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Domestic:</strong> 2–5 business days
          </li>
          <li>
            <strong>International:</strong> 7–15 business days
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Tracking</h2>
        <p className="mb-4">
          Once shipped, you will receive a tracking number by email. Please
          allow up to 24 hours for the tracking link to activate.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          5. Customs & Duties
        </h2>
        <p className="mb-4">
          International customers are responsible for customs duties, taxes, and
          fees imposed by their country.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Shipping Issues</h2>
        <p className="mb-4">
          If your package is delayed, lost, or damaged, contact us within 7 days
          of delivery for assistance at <strong>contact@arganiatol.com</strong>.
        </p>
      </main>
    </>
  );
}
