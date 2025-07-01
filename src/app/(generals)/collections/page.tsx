import CollectionCard from "@/components/CollectionCard";
import NewsletterForm from "@/components/NewsletterForm";
import ProductGrid from "@/components/ProductGrid";

const Page = () => {
  return (
    <div className="bg-[#E5BC38]">
      {/* Breadcrumb Section */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="text-sm">
          <span>Home</span> / <span>Collection</span>
        </nav>
      </div>
      <main className="mt-10">
        {/* {% render './includes/breadcrumb.liquid' %} */}
        <div className="max-w-7xl mx-auto my-10 lg:my-20 grid-cols-1 lg:px-0 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 px-5 h-[520px] md:h-[320px] gap-y-5">
          {Array.from([1, 2]).map((collection, _) => {
            return <CollectionCard key={_} />;
          })}
        </div>
        <div className="max-w-7xl mx-auto py-10 lg:px-0 space-y-5 px-5">
          <h3 className="text-2xl font-regular">Our Bestsellers</h3>
          <ProductGrid products={[]} />
        </div>
        <NewsletterForm />
      </main>
    </div>
  );
};

export default Page;
