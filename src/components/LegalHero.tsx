import Link from "next/link";

interface LegalHeroProps {
  title: string;
  subtitle?: string;
}

export default function LegalHero({ title, subtitle }: LegalHeroProps) {
  return (
    <section className=" bg-black py-10 lg:py-12 px-4 lg:px-6 border-b">
      <div className="max-w-5xl mx-auto text-center">
        <Link
          href="/"
          className="text-3xl lg:text-4xl font-extrabold text-[#E5BC38] mb-2 block"
        >
          Arganiatol
        </Link>
        <h1 className="text-xl lg:text-4xl font-bold text-[#FFF6DA]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[#FFF6DA] mt-2 text-sm lg:text-base md:text-lg">
            {subtitle}
          </p>
        )}

        <nav className="mt-6 flex flex-wrap justify-center gap-4 text-xs lg:text-sm text-[#E5BC38] font-medium">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-use" className="hover:underline">
            Terms of Use
          </Link>
          <Link href="/shipping-policy" className="hover:underline">
            Shipping Policy
          </Link>
          <Link href="/refund-policy" className="hover:underline">
            Refund Policy
          </Link>
        </nav>
      </div>
    </section>
  );
}
