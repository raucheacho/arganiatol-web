import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/motion-primitives/carousel";

export function ProductCarousel() {
  return (
    <div className="relative w-full px-0">
      <Carousel>
        <CarouselContent className="-ml-4">
          {Array.from({ length: 5 }, (_, index) => (
            <CarouselItem className="basis-1/5 pl-4" key={index}>
              <div className="flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800">
                {index}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
