function CollectionCard() {
  return (
    <div className="relative w-full h-full group focus:outline-none cursor-pointer ">
      <span className="absolute inset-0 bg-[#FFF6DA] transition-transform duration-300 group-hover:translate-x-[2%] group-hover:translate-y-[2%]"></span>
      <div className="absolute inset-0 border  border-black translate-x-[-2%] translate-y-[-5%] md:translate-x-[-4%] md:translate-y-[-5%] z-0 bg-[url('/assets/images/hero.png')] bg-cover bg-center px-10 py-5 flex flex-col justify-between object-cover">
        <div className="inset-0 flex items-start justify-between z-10 flex-col  text-black font-medium text-sm">
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-bold">Summer Collection</h2>
            <p className="text-white">Starting at $17.99</p>
          </div>
        </div>
        <button className="text-white flex cursor-pointer items-center space-x-4">
          <span>Shop Now</span>
          <svg
            className="animated animate-ping duration-300  w-5 h-5"
            width="22"
            height="13"
            viewBox="0 0 22 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 6.67742H21M21 6.67742L12.6977 1M21 6.67742L12.6977 12"
              stroke="#FFF6DA"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CollectionCard;
