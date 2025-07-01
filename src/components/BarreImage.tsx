export default function BarreImage({ image }: { image: string }) {
  console.log(image);

  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className="py-12 px-6 bg-cover bg-center h-[30vh] lg:h-[40vh] flex items-center justify-center"
    ></section>
  );
}
