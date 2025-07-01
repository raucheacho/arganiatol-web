import BarreImage from "@/components/BarreImage";
import NewsletterForm from "@/components/NewsletterForm";
import PhilosophySection from "@/components/PhilosophySection";

const Page = () => {
  return (
    <div className="bg-[#E5BC38]">
      {/* Breadcrumb Section */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="text-sm">
          <span>Home</span> / <span>About Us</span>
        </nav>
      </div>
      <BarreImage image="/assets/images/WT5A9054.webp" />

      {/* Main Content Section */}
      <PhilosophySection />
      <NewsletterForm />
      <BarreImage image="/assets/images/image-campagne.webp" />
    </div>
  );
};

export default Page;
