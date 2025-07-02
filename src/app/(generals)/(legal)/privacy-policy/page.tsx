import LegalHero from "@/components/LegalHero";

export default function PrivacyPolicy() {
  return (
    <>
      <LegalHero
        title="Privacy Policy"
        subtitle="Your data matters. Learn how Arganiatol collects and protects your personal information."
      />

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">Effective date: July 2, 2025</p>

        <p className="mb-4">
          This Privacy Policy describes how Arganiatol (“we,” “our,” or “us”)
          collects, uses, and discloses your personal information when you visit
          our website, make a purchase, or otherwise engage with our services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Personal Identifiers:</strong> name, email, phone number,
            billing/shipping address
          </li>
          <li>
            <strong>Payment Information:</strong> handled securely via Stripe or
            other trusted providers
          </li>
          <li>
            <strong>Usage Data:</strong> IP address, browser type, device
            information, pages visited
          </li>
          <li>
            <strong>Marketing Preferences:</strong> if you opt into newsletters
            or promos
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To process and ship your cosmetic orders</li>
          <li>To send transactional and promotional communications</li>
          <li>To personalize your shopping experience</li>
          <li>To improve our website and customer service</li>
          <li>To detect and prevent fraud or misuse of our platform</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Data Sharing and Disclosure
        </h2>
        <p className="mb-4">
          We never sell your personal information. We may share your data with:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Trusted third-party service providers (payment, shipping, analytics)
          </li>
          <li>Government authorities when required by law</li>
          <li>Business partners in case of a merger, acquisition, or sale</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          4. Cookies and Tracking
        </h2>
        <p className="mb-4">
          We use cookies to enhance your experience and analyze traffic. You can
          manage your cookie preferences in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Retention</h2>
        <p className="mb-4">
          We retain your information as long as necessary for legal, business,
          and tax purposes, or until you request its deletion.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Access, correct, or delete your data</li>
          <li>Withdraw consent to marketing</li>
          <li>Request a copy of your data</li>
          <li>File a complaint with a data protection authority</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
        <p className="mb-4">
          For privacy concerns or data requests, email us at:{" "}
          <strong>privacy@arganiatol.com</strong>
        </p>
      </main>
    </>
  );
}
