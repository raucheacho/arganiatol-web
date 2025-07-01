import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  image: string;
  title: string;
  price: string;
  isNew?: boolean;
};

export default function ProductCard({
  image,
  title,
  price,
  isNew = false,
  id,
}: ProductCardProps) {
  return (
    <div className="bg-[#FFF6DA] p-3 relative group overflow-hidden">
      {/* Badge */}
      {isNew && (
        <div className="w-full flex mb-2">
          <span className="bg-[#FB6431] px-2 text-white rounded-sm mr-5 text-sm uppercase">
            New
          </span>
        </div>
      )}

      {/* Image */}
      <div className="w-full flex justify-center">
        <Image
          src={image}
          alt={title}
          width={300}
          height={256}
          className="lg:w-full lg:h-64 object-contain"
        />
      </div>

      {/* Infos produit */}
      <div className="flex justify-between items-center mt-4">
        <h3 className="font-medium text-black text-xs md:text-base">{title}</h3>
        <h3 className="font-medium text-black text-xs md:text-base">{price}</h3>
      </div>

      {/* Boutons au survol */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <button className="bg-[#E5BC38] text-black px-4 py-2 cursor-pointer hover:bg-[#E5BC38]/80 transition-all duration-200 w-40">
          Ajouter au panier
        </button>
        <Link
          href={`/products/${id}`}
          className="bg-[#FFF6DA] text-black px-4 py-2 cursor-pointer border border-black hover:bg-[#FFF6DA]/80 transition-all duration-200 w-40"
        >
          Voir plus
        </Link>
      </div>
    </div>
  );
}
