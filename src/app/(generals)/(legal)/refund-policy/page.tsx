import LegalHero from "@/components/LegalHero";

export default function RefundPolicy() {
  return (
    <>
      <LegalHero
        title="Refund & Return Policy"
        subtitle="Learn about our return conditions, refund procedures, and how we ensure customer satisfaction."
      />

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Refund & Return Policy</h1>
        <p className="mb-4">Effective date: July 2, 2025</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Eligibility for Returns
        </h2>
        <p className="mb-4">
          Due to hygiene standards, returns are only accepted for unused,
          unopened cosmetic products in their original packaging within 14 days
          of receipt.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Non-Returnable Items
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Opened or used products</li>
          <li>Items purchased on final sale or clearance</li>
          <li>Gift cards and promotional items</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Refunds</h2>
        <p className="mb-4">
          Approved refunds are issued to the original payment method within 7–10
          business days after inspection. Shipping costs are non-refundable.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          4. Damaged or Incorrect Orders
        </h2>
        <p className="mb-4">
          If your order arrives damaged or incorrect, contact us within 48 hours
          with photos. We will provide a replacement or refund where
          appropriate.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          5. How to Initiate a Return
        </h2>
        <p className="mb-4">
          Email <strong>contact@arganiatol.com</strong> with your order number,
          reason for return, and photos if applicable. We will guide you through
          the next steps.
        </p>
      </main>
    </>
  );
}
