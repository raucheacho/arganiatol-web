// import Image from "next/image";
// import Link from "next/link";

// type ProductCardProps = {
//   id: number;
//   image: string;
//   title: string;
//   price: string;
//   isNew?: boolean;
// };

// export default function ProductCard({
//   image,
//   title,
//   price,
//   isNew = true,
//   id,
// }: ProductCardProps) {
//   return (
//     <div className="bg-[#FFF6DA] p-3 relative group overflow-hidden">
//       {/* Badge */}
//       {isNew ? (
//         <div className="w-full flex mb-2">
//           <span className="bg-[#FB6431] px-2 text-white mr-5 text-xs uppercase">
//             New
//           </span>
//         </div>
//       ) : (
//         <div className="w-full flex mb-2">
//           <span className="bg-[#E5BC38] px-2 text-white mr-5 text-xs uppercase">
//             disponible
//           </span>
//         </div>
//       )}

//       {/* Image */}
//       <div className="w-full flex justify-center">
//         <Image
//           src={image}
//           alt={title}
//           width={300}
//           height={256}
//           className="lg:w-full lg:h-64 h-48 object-contain"
//         />
//       </div>

//       {/* Infos produit */}
//       <div className="flex justify-between items-start mt-4 ">
//         <h3 className="font-medium text-black text-xs md:text-base">{title}</h3>
//         <h3 className="font-medium text-black text-xs md:text-base">{price}</h3>
//       </div>

//       {/* Boutons au survol */}
//       <div className="absolute inset-0 bg-[#E5BC38]/50 backdrop-blur-xs flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//         <button className="bg-[#E5BC38] text-black px-4 py-2 cursor-pointer hover:bg-[#E5BC38]/80 transition-all duration-200 w-40">
//           Ajouter au panier
//         </button>
//         <Link
//           href={`/products/${id}`}
//           className="bg-[#FFF6DA] text-black px-4 py-2 cursor-pointer border border-black hover:bg-[#FFF6DA]/80 transition-all duration-200 w-40"
//         >
//           Voir plus
//         </Link>
//       </div>

//     </div>
//   );
// }
import { ShoppingBag } from "lucide-react";
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
  isNew = true,
  id,
}: ProductCardProps) {
  return (
    <div className="relative bg-[#FFF6DA] py-4 px-6 shadow-md group overflow-hidden transition-all duration-300">
      {/* Badge */}
      <div className="mb-3">
        <span
          className={`px-3 py-1 text-white text-[10px] tracking-wide uppercase text-center ${
            isNew ? "bg-[#FB6431]" : "bg-[#E5BC38]"
          }`}
        >
          {isNew ? "Nouveau" : "Disponible"}
        </span>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center h-48 md:h-56">
        <Image
          src={image}
          alt={title}
          width={220}
          height={220}
          className="object-contain max-h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Infos produit */}
      <div className="mt-4 flex justify-between items-center">
        <h3 className="font-semibold text-sm md:text-base text-black">
          {title}
        </h3>
        <h3 className="font-bold text-sm md:text-base text-black ">{price}</h3>
      </div>

      {/* Actions - visibles mobile / hover desktop */}
      <div
        className="flex flex-col gap-2 lg:absolute lg:inset-0 lg:backdrop-blur-md 
                   lg:items-center lg:justify-center lg:opacity-0 lg:group-hover:opacity-100 
                   transition-opacity duration-300 ease-in-out py-4 md:px-6 lg:gap-3"
      >
        <button
          className="bg-[#E5BC38] text-black font-medium text-sm py-2 px-4 text-center w-full 
                     hover:bg-[#d9a500] transition-colors duration-200 shadow-md flex items-center justify-center gap-2"
        >
          <ShoppingBag />
          <span>Add to cart</span>
        </button>
        <Link
          href={`/products/${id}`}
          className="bg-white text-black font-medium text-sm py-2 px-4 text-center w-full 
                     border border-black hover:bg-gray-100 transition-colors duration-200 shadow"
        >
          View more
        </Link>
      </div>
    </div>
  );
}
