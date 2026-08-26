import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../shop/ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';

const RelatedProducts = ({ products = [] }) => {
    if (!products.length) return null;

    return (
        <div className="w-full pt-14 relative">
            <div className="flex items-center justify-between pb-6">
                <h2 className="dheading text-[24px]">Related Products</h2>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        aria-label="Previous related products"
                        className="related-prev w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-primary hover:text-white hover:border-primary duration-200 cursor-pointer"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        type="button"
                        aria-label="Next related products"
                        className="related-next w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-primary hover:text-white hover:border-primary duration-200 cursor-pointer"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation={{ prevEl: '.related-prev', nextEl: '.related-next' }}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RelatedProducts;