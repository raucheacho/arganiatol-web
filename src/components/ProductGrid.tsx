import { Products } from "woocommerce-rest-ts-api";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Products[];
};

export default async function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-7xl mx-auto">
      {products?.map((product: Products, index: number) => (
        <ProductCard
          id={product.id}
          key={index}
          image={product.images[0].src as string}
          title={product.name}
          price={`$${product.price}`}
          isNew={index % 2 === 0}
        />
      ))}
    </div>
  );
}
