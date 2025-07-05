import LegalHero from "@/components/LegalHero";

export default function TermsOfUse() {
  return (
    <>
      <LegalHero
        title="Terms of Use"
        subtitle="Understand the rules and responsibilities when using Arganiatol's website and services."
      />

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
        <p className="mb-4">Effective date: July 2, 2025</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By accessing and using the Arganiatol website, you agree to these
          Terms of Use and all applicable laws. If you do not agree, please do
          not use the site.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. Use of Our Website
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            You must be at least 18 years old or have parental consent to use
            our site
          </li>
          <li>You may not use our products or services for illegal purposes</li>
          <li>You agree not to tamper with, hack, or damage our systems</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Products and Orders
        </h2>
        <p className="mb-4">
          All cosmetic products are subject to availability and may be withdrawn
          at any time. Prices and descriptions may change without notice. We
          reserve the right to cancel or refuse any order.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          4. Intellectual Property
        </h2>
        <p className="mb-4">
          All content on Arganiatol.com (including text, images, logos, videos)
          is owned by Arganiatol and protected by intellectual property laws.
          Unauthorized use is prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          5. Limitation of Liability
        </h2>
        <p className="mb-4">
          We are not liable for any indirect, incidental, or consequential
          damages from the use of our site or products. Always consult a
          dermatologist for medical concerns.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          6. Changes to These Terms
        </h2>
        <p className="mb-4">
          We reserve the right to modify these terms at any time. Continued use
          of the site constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact</h2>
        <p>
          For legal or site-related questions, contact us at:{" "}
          <strong>contact@arganiatol.com</strong>
        </p>
      </main>
    </>
  );
}
