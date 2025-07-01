import Image from "next/image";

const images = [
  "/assets/images/gal1.webp",
  "/assets/images/gal2.webp",
  "/assets/images/gal3.webp",
  "/assets/images/gal4.webp",
];

export default function Gallery() {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4  pb-10">
      {images.map((src, index) => (
        <div key={index} className="relative w-full aspect-[1/1]">
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
