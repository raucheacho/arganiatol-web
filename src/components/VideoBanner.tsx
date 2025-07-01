import Image from "next/image";

export default function VideoBanner() {
  return (
    <section className="bg-[url('/assets/images/video-banner.webp')] py-12 px-6 bg-cover bg-center h-[30vh] lg:h-[40vh] flex items-center justify-center">
      {/* Bouton play désactivé — décommenter si nécessaire */}

      <div className=" h-auto w-fit">
        <Image
          src="/assets/svgs/play.svg"
          alt="Play Video"
          width={64}
          height={64}
        />
      </div>
    </section>
  );
}
