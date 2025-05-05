'use client';

import { FC } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Wazitrack from '../../Assets/Images/Img2.png';
import Comply from '../../Assets/Images/Img.png';

const PlatformSection: FC = () => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="platform-section" className="py-12 px-6 md:px-20 font-poppins bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#16A34A]">
          The Platform
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-xl text-gray-800 font-semibold mb-4">
            Built for Africa. Ready for the World.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-[1rem] leading-relaxed">
            <li>Mobile-first, offline-capable tools</li>
            <li>Exporter dashboards for compliance and financing tracking</li>
            <li>Enumerator apps for field data collection</li>
            <li>Local language support</li>
          </ul>

          {/* CTA */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <button
              className="bg-[#16A34A] hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
              onClick={() => handleScroll("contact-us")}
            >
              See the Platform Live
            </button>
          </div>
        </div>

        <div className="flex-1 max-w-[90%] md:max-w-[50%]">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <SwiperSlide>
              <div className="relative group">
                <img
                  src={Comply.src}
                  alt="Comply Platform"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex justify-center items-center text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Comply Platform
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative group">
                <img
                  src={Wazitrack.src}
                  alt="WaziTrack Platform"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex justify-center items-center text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  WaziTrack Platform
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;