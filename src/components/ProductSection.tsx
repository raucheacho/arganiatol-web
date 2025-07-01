import { getProducts } from "@/actions/products";
import ProductGrid from "./ProductGrid";

const ProductSection = async () => {
  const products = await getProducts();
  // console.log(products);

  return (
    <div className="py-10 px-5 space-y-10">
      <div className="max-w-md space-y-5 mx-auto">
        <h3 className="lg:text-4xl text-2xl font-semibold text-center">
          Mix from ours collections
        </h3>
        <p className="text-center font-semibold text-[14px]">
          Alienum phaedrum torquatoss nec eu, detr periculis ex, nihil
          expetendis in mei. Mei an pericula.
        </p>
        <div className="w-14 border-2 rounded-2xl border-black  mx-auto"></div>
      </div>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductSection;
