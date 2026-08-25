import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { X, Minus, Plus, ShoppingCart, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import useOutsideClick from '../../hooks/outsideClick';
import StarRating from '../../pages/shop/StarRating';
import { addToCart } from '../../slices/cartSlice';
import { showToast } from '../../hooks/useActionToast';

/**
 * QuickViewModal — lightweight product quick-view overlay.
 *
 * Props:
 *   open      – boolean
 *   onClose   – () => void
 *   product   – { id, name/title, price, rating, image/images, description, stock, brand }
 */
const QuickViewModal = ({ open, onClose, product }) => {
    const ref = useRef(null);
    const [qty, setQty] = useState(1);
    const [added, setAdded] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const dispatch = useDispatch();

    useOutsideClick(ref, onClose, open);

    // reset state when product changes
    const prevId = useRef(null);
    if (product && product.id !== prevId.current) {
        prevId.current = product.id;
        setQty(1);
        setActiveIdx(0);
    }

    if (!open || !product) return null;

    const name = product.name || product.title || '';
    const images = product.images?.length ? product.images : [product.image || ''];
    const hasMultiple = images.length > 1;
    const price = product.price ?? 0;
    const rating = product.rating ?? 0;
    const description = product.description || 'No description available.';
    const brand = product.brand || '';
    const inStock = product.stock === undefined || product.stock > 0;

    const handleAdd = () => {
        dispatch(addToCart({ ...product, qty }));
        showToast('cart', name);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    const go = (dir) => {
        setActiveIdx((i) => (i + dir + images.length) % images.length);
    };

    return (
        <>
            {/* backdrop */}
            <div className="fixed inset-0 bg-black/60 z-50 transition-opacity" />

            <section className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    ref={ref}
                    className="relative w-full max-w-[870px] bg-white rounded-xl shadow-2xl font-pop animate-[fadeIn_0.3s_ease-out] overflow-hidden"
                >
                    {/* close */}
                    <button
                        onClick={onClose}
                        aria-label="Close quick view"
                        className="absolute right-3 top-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                        <X size={18} className="text-gray-500" />
                    </button>

                    <div className="flex flex-col sm:flex-row">
                        {/* ── image section ── */}
                        <div className="sm:w-[45%] bg-gry flex flex-col">
                            {/* main image */}
                            <div className="relative flex-1 flex items-center justify-center p-4 min-h-[280px] sm:min-h-[340px]">
                                <img
                                    src={images[activeIdx]}
                                    alt={name}
                                    className="max-h-[320px] w-full object-contain"
                                    loading="eager"
                                />

                                {/* prev / next arrows */}
                                {hasMultiple && (
                                    <>
                                        <button
                                            onClick={() => go(-1)}
                                            aria-label="Previous image"
                                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow transition-colors cursor-pointer"
                                        >
                                            <ChevronLeft size={16} className="text-gray-600" />
                                        </button>
                                        <button
                                            onClick={() => go(1)}
                                            aria-label="Next image"
                                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow transition-colors cursor-pointer"
                                        >
                                            <ChevronRight size={16} className="text-gray-600" />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* thumbnails */}
                            {hasMultiple && (
                                <div className="flex items-center gap-2 px-4 pb-4 overflow-x-auto">
                                    {images.map((img, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveIdx(i)}
                                            className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer
                                                ${i === activeIdx ? 'border-primary' : 'border-transparent hover:border-gray-300'}`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${name} ${i + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ── details section ── */}
                        <div className="sm:w-[55%] p-6 sm:p-8 flex flex-col justify-center">
                            {brand && (
                                <span className="text-[12px] text-gray-400 uppercase tracking-wider font-medium mb-1">
                                    {brand}
                                </span>
                            )}

                            <h2 className="text-[22px] font-semibold text-gray-900 leading-snug mb-3">
                                {name}
                            </h2>

                            {/* rating */}
                            <div className="flex items-center gap-2 mb-4">
                                <StarRating rating={rating} size={14} />
                                <span className="text-[13px] text-gray-400">({rating.toFixed(1)})</span>
                            </div>

                            {/* price */}
                            <p className="text-[24px] font-semibold text-gray-900 mb-4">
                                ${price.toFixed(2)}
                            </p>

                            {/* description */}
                            <p className="text-[13px] text-gray-500 leading-relaxed mb-6 line-clamp-3">
                                {description}
                            </p>

                            {/* quantity + actions */}
                            <div className="flex flex-col gap-4">
                                {/* quantity selector */}
                                <div className="flex items-center gap-3">
                                    <span className="text-[13px] text-gray-500">Quantity</span>
                                    <div className="flex items-center border border-gray-200 rounded-full">
                                        <button
                                            onClick={() => setQty((q) => Math.max(1, q - 1))}
                                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gry transition-colors cursor-pointer"
                                        >
                                            <Minus size={14} className="text-gray-500" />
                                        </button>
                                        <span className="w-8 text-center text-[14px] font-medium text-gray-800">
                                            {qty}
                                        </span>
                                        <button
                                            onClick={() => setQty((q) => q + 1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gry transition-colors cursor-pointer"
                                        >
                                            <Plus size={14} className="text-gray-500" />
                                        </button>
                                    </div>
                                </div>

                                {/* buttons */}
                                <div className="flex items-center gap-3">
                                    <button
                                        disabled={!inStock}
                                        onClick={handleAdd}
                                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-[14px] text-white transition-all duration-200 cursor-pointer
                                            ${!inStock
                                                ? 'bg-gray-300 cursor-not-allowed'
                                                : added
                                                    ? 'bg-green-600'
                                                    : 'bg-primary hover:bg-green-600 active:scale-[0.97]'
                                            }`}
                                    >
                                        <ShoppingCart size={16} />
                                        {added ? 'Added!' : inStock ? 'Add to Cart' : 'Out of Stock'}
                                    </button>

                                    <button
                                        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-pointer shrink-0"
                                        aria-label="Add to wishlist"
                                    >
                                        <Heart size={18} className="text-gray-400" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default QuickViewModal;
