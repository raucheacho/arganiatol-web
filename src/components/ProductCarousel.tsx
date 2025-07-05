import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/motion-primitives/carousel";
import Image from "next/image";
type ProductImage = {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
};

export function ProductCarousel({ images }: { images: ProductImage[] }) {
  return (
    <div className="relative w-full px-0">
      <Carousel>
        <CarouselContent className="-ml-4">
          {images.map((image: ProductImage, index: number) => (
            <CarouselItem className="basis-1/5 pl-4" key={index}>
              <div className="flex aspect-square items-center justify-center border bg-white border-black dark:border-zinc-800">
                <Image
                  width={350}
                  height={250}
                  src={image.src}
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
