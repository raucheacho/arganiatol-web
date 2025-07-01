import { getProduct } from "@/actions/products";
import { ProductCarousel } from "@/components/ProductCarousel";
import SetQuantity from "@/components/SetQuantity";
import Button from "@/components/ui/button-argan";
import { Star } from "lucide-react";
import Head from "next/head";
import Image from "next/image";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await getProduct(id);
  // const { items: cartItems, updateQuantity, addItem } = useCartStore();

  // const currProductQuantity =
  //   cartItems.find((item) => item.id === product.id)?.quantity || 0;
  // const handleProduct = (quantity: number) => {
  //   const findProduct = cartItems.find((item) => item.id === product.id);
  //   if (findProduct) {
  //     updateQuantity(findProduct.id, quantity);
  //   } else {
  //     addItem(product);
  //   }
  // };

  const reviews = [
    {
      id: 1,
      author: "Gillian Sergiente.",
      rating: 5,
      comment: "Absolutely amazing! I love it",
      date: "05/21/25",
    },
    {
      id: 2,
      author: "Gillian Sergiente.",
      rating: 5,
      comment: "Absolutely amazing! I love it",
      date: "05/21/25",
    },
  ];

  // const handleAddToCart = () => {
  //   // Logique d'ajout au panier
  //   console.log(`Ajouté au panier: ${""} x ${product.name}`);
  // };

  // const handleWishlist = () => {
  //   setIsWishlisted(!isWishlisted);
  //   // Logique wishlist
  //   console.log(`${isWishlisted ? "Retiré de" : "Ajouté à"} la wishlist`);
  // };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <>
      <Head>
        <title>Hair Serum - Arganatol</title>
        <meta
          name="description"
          content="Hair Serum by Arganatol - Premium hair care product"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="bg-[#E5BC38] min-h-screen">
        {/* Breadcrumb Section */}
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="text-sm">
            <span>Home</span> / <span>Hair Care</span> /{" "}
            <span className="font-bold">Hair Serum</span>
          </nav>
        </div>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mt-10 px-6">
          {/* Product Image */}
          <div className="flex flex-col items-start space-y-10">
            <div className="relative w-full h-[550px]">
              {/* Fond jaune décalé */}
              <div className="absolute inset-0 bg-[#FFF6DA] -translate-x-[3%] translate-y-[3%] z-0" />

              {/* Image principale */}
              <Image
                src={product.images[0].src}
                alt="product"
                fill={false}
                width={400}
                height={500}
                className="relative z-10 border w-full h-full object-contain  border-black"
              />
            </div>
            <ProductCarousel />
          </div>

          {/* Product Info */}
          <div className="space-y-5">
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4 text-sm">
                <div className="flex">
                  {renderStars(Math.floor(product.rating))}
                </div>
                <span className="underline font-bold">
                  {product.rating} ({product.reviewCount} Reviews)
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold">${product.price}</div>
                <div className="line-through text-white text-lg">
                  ${product.originalPrice}
                </div>
              </div>
              <div className="text-xs mb-4">save ${product.discount}</div>
            </div>

            {/* Quantity + Cart */}
            <div className="flex items-center gap-4 mb-6">
              <SetQuantity currProductQuantity={1} />
              <Button variant="light">Add to cart</Button>
            </div>

            <div className="text-sm lg:flex items-center lg:space-x-4 grid grid-cols-2 gap-3">
              {/* <button
                onClick={handleWishlist}
                className="flex items-center gap-1 hover:text-red-600 transition-colors"
              >
                <Heart
                  className={`w-4 h-4 ${
                    isWishlisted ? "fill-red-600 text-red-600" : ""
                  }`}
                />
                {isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              </button> */}
              <div>
                <strong>Category:</strong> {product.category}
              </div>
              <div>
                <strong>Tag:</strong> {product.tag}
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <div className="border border-black p-6">
            <div className="flex items-center gap-2 text-sm mb-4">
              <div className="flex">
                {renderStars(Math.floor(product.rating))}
              </div>
              <span className="underline font-bold">
                {product.rating} ({product.reviewCount} Reviews)
              </span>
            </div>

            <div className="flex gap-4 mb-6">
              <button className="bg-[#FFF6DA] border border-black px-4 py-2 hover:bg-black hover:text-[#FFF6DA] transition text-xs lg:text-base">
                WRITE A REVIEW
              </button>
              <button className="bg-[#FFF6DA] border border-black px-4 py-2 hover:bg-black hover:text-[#FFF6DA] transition text-xs lg:text-base">
                ASK A QUESTION
              </button>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-t border-black pt-4">
                  <div className="font-bold">{review.author}</div>
                  <div className="flex mb-2">{renderStars(review.rating)}</div>
                  <p className="text-sm">{review.comment}</p>
                  <div className="text-xs text-gray-800 mt-2">
                    {review.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductPage;
