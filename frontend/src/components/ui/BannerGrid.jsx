import React from "react";

const BannerGrid = () => {
  return (
    <section className="max-w-7xl mx-auto py-4 px-2">
      <div className="grid grid-cols-12 gap-5 h-[650px]">
        {/* Left Large Banner */}
        <div className="group col-span-12 lg:col-span-6 relative rounded-3xl overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Tech Deals"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-all duration-500">
            <div className="h-full flex flex-col justify-center px-10 transform transition-all duration-500 group-hover:-translate-y-2">
              <span className="text-white/80 uppercase tracking-[4px] text-sm mb-3">
                Limited Offer
              </span>

              <h1 className="text-white text-5xl lg:text-6xl font-bold mb-4">
                Festive Tech Deals
              </h1>

              <p className="text-white/90 text-lg mb-8 max-w-md">
                Discover the latest gadgets and electronics with exclusive
                discounts.
              </p>

              <button className="bg-teal-600 hover:bg-white hover:text-black text-white px-8 py-4 rounded-xl w-fit font-semibold transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Middle Banner */}
        <div className="group col-span-12 lg:col-span-3 relative rounded-3xl overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Sneakers"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500">
            <div className="h-full flex flex-col items-center justify-center text-center px-6 transform transition-all duration-500 group-hover:-translate-y-2">
              <h2 className="text-white text-4xl font-bold mb-4">
                Feels Premium
              </h2>

              <p className="text-white/90 text-lg mb-8">
                As powerful as it is portable
              </p>

              <button className="bg-black hover:bg-white hover:text-black text-white px-7 py-3 rounded-full font-semibold transition-all duration-300">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-5">
          {/* Top Card */}
          <div className="group relative flex-1 rounded-3xl overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca"
              alt="Watch"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500">
              <div className="h-full flex items-center px-8">
                <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Smart Watches
                  </h3>

                  <button className="text-white border-b border-white pb-1 hover:text-red-400 transition">
                    Shop Now →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="group relative flex-1 rounded-3xl overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
              alt="Headphones"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500">
              <div className="h-full flex items-center px-8">
                <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Audio Gear
                  </h3>

                  <button className="text-white border-b border-white pb-1 hover:text-red-400 transition">
                    Shop Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerGrid;
