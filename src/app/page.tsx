import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import GuaranteeSection from "@/components/GuaranteeSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsletterForm from "@/components/NewsletterForm";
import ProductSection from "@/components/ProductSection";
import ShowcaseLeft from "@/components/ShowcaseLeft";
import ShowcaseRight from "@/components/ShowcaseRight";
import VideoBanner from "@/components/VideoBanner";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Main Content */}
      <div className="bg-[#E5BC38] text-black">
        <Header />
        <div className=" lg:mb-20">
          <ShowcaseLeft />
          <ShowcaseRight />
        </div>
        <GuaranteeSection />
        <VideoBanner />
        <ProductSection />
        <NewsletterForm />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}
