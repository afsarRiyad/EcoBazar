import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import { Quote } from 'lucide-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import vector from "../assets/images/Vector.webp"
import Container from "./Container";

const testimonials = [
  {
    id: 1,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Robert Fox",
    role: "Customer",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Dianne Russell",
    role: "Customer",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Eleanor Pena",
    role: "Customer",
    rating: 3,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 4,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "James Wilson",
    role: "Customer",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 5,
    text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    name: "Sophia Martinez",
    role: "Customer",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className=" py-13 flex items-center justify-center bg-gray-100 px-4">

      <Container >

        {/* Header */}
        <div className="flex items-center justify-between mb-8 relative">
          <h2 className="text-[32px] sm:text-3xl font-semibold text-gray-900">
            Client Testimonials
          </h2>
          <button className="hidden sm:inline custom-prev  cursor-pointer absolute right-20 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow disabled:bg-green-500 disabled:text-white">
        <ChevronLeft />
      </button>

     <button className="hidden sm:inline  custom-next cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow disabled:bg-green-500 disabled:text-white">
        <ChevronRight />
      </button>
        </div>
        {/* Swiper slide starts here*/}
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            
          breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="mySwiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="h-auto flex">
              <div className="bg-white rounded-md p-6 flex flex-col gap-4 shadow-sm h-full">

                <img src={vector} alt="quote" className="w-8 h-[26px] "  />

                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  {t.text}
                </p>
                
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">

                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100"
                    />

                    <div>
                      <p className="font-semibold text-gray-900 text-[16px]">
                        {t.name}
                      </p>
                      <p className="text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star fill="#FBBF24" size={15} className="text-[#FBBF24]" />
                    ))}
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </Container>
    </div>
  );
}