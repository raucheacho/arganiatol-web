import Image from "next/image";

export default function ShowcaseRight() {
  return (
    <section className="pt-10 px-4 mx-auto max-w-7xl flex justify-center">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-28 space-y-10 lg:space-y-0">
        {/* Texte à gauche */}
        <div className="flex flex-col items-start space-y-6 max-w-md mt-10 lg:mt-0">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-lg quentin">Collection starter</h3>
            <h2 className="text-2xl sm:text-3xl font-semibold montserrat">
              A new destination for natural cosmetics
            </h2>
            <p className="text-sm sm:text-base text-[#121212] poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          {/* Bouton */}
          <a
            href="#"
            className="relative w-full md:w-[9rem] h-11 group focus:outline-none cursor-pointer"
          >
            <span className="absolute inset-0 bg-[#FFF6DA] transition-transform duration-300 group-hover:translate-x-[2%] group-hover:translate-y-[5%]" />
            <span className="absolute inset-0 border border-black translate-x-[-2%] translate-y-[-14%] md:translate-x-[-4%] md:translate-y-[-12%] z-0" />
            <span className="absolute inset-0 flex items-center justify-center z-10 text-black font-medium text-sm">
              Read More
            </span>
          </a>
        </div>

        {/* Images à droite */}
        <div className="relative w-full max-w-sm aspect-[4/5] flex justify-center items-center">
          {/* Fond jaune décalé */}
          <div className="absolute inset-0 bg-[#FFF6DA] -translate-x-[3%] translate-y-[3%] z-0" />

          {/* Image principale */}
          <Image
            src="/assets/images/showcase-right.webp"
            alt="Showcase"
            fill={false}
            width={400}
            height={500}
            className="relative z-10 border border-black w-full h-full object-cover"
          />

          {/* Image produit superposée */}
          <Image
            src="/assets/images/showcase-right-product.webp"
            alt="Produit"
            width={96}
            height={96}
            className="absolute z-20 w-20 sm:w-24 h-auto left-[82%] md:left-[88%] bottom-[50%] translate-y-[50%]"
          />
        </div>
      </div>
    </section>
  );
}
