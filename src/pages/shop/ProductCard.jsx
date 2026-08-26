import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Handbag, Eye, Heart } from 'lucide-react';
import StarRating from './StarRating';
import Tooltip from '../../components/ui/Tooltip';
import QuickViewModal from '../../components/ui/QuickViewModal';
import { addToCart } from '../../slices/cartSlice';
import { addToWishlist } from '../../slices/wishlistSlice';
import useOutsideClick from '../../hooks/outsideClick';
import { showToast } from '../../hooks/useActionToast';
import { Link } from 'react-router';


const ProductCard = ({ product }) => {
    const name = product.name || product.title || '';
    const price = product.price ?? 0;
    const oldPrice = product.oldPrice || null;
    const rating = product.rating ?? 0;
    const image = product.thumbnail || product.images?.[0] || product.image || '';
    const outOfStock = product.outOfStock ?? (product.stock === 0);
    const salePercent = product.salePercent || null;
    const [wished, setWished] = useState(false);
    const [added, setAdded] = useState(false);
    const [quickView, setQuickView] = useState(false);
    const [showActions, setShowActions] = useState(false);
    const [pulseKey, setPulseKey] = useState(0);
    const cardRef = useRef(null);
    const dispatch = useDispatch();

    useOutsideClick(cardRef, () => setShowActions(false), showActions);

    const handleTouch = () => {
        setShowActions((s) => !s);
        setPulseKey((k) => k + 1);
    };

    return (
        <Link
            to={`/product/${product.id}`}
            ref={cardRef}
            onTouchStart={handleTouch}
            className="w-full border rounded-md border-gray-200 hover:border-primary duration-150 shadow-[0_2px_12px_rgba(0,0,0,0.06)] cursor-pointer group/cart overflow-hidden relative block"
        >
            {/* badges */}
            {outOfStock && (
                <span className="absolute top-3 left-3 z-10 bg-gray-900 text-white text-[11px] font-pop font-medium px-2.5 py-1 rounded-md">
                    Out of Stock
                </span>
            )}
            {!outOfStock && salePercent && (
                <span className="absolute top-3 left-3 z-10 bg-badgeone text-white text-[11px] font-pop font-medium px-2.5 py-1 rounded-md">
                    Sale {salePercent}%
                </span>
            )}

            {/* wishlist + quick view — slide from top on hover */}
            <div
                key={pulseKey}
                className={`absolute right-5 z-10 flex flex-col gap-2 transition-all duration-300 ease-in-out
                            ${wished || showActions ? 'top-3 animate-touchPulse' : '-top-10 group-hover/cart:top-3'}`}
            >
                <Tooltip text={wished ? "Remove from Wishlist" : "Add to Wishlist"} position="left">
                    <button
                        type="button"
                        aria-label="Add to wishlist"
                        onClick={(e) => { e.stopPropagation(); dispatch(addToWishlist(product)); setWished(true); showToast('wishlist', name); }}
                        className="flex justify-center items-center rounded-full h-8 w-8 border bg-white border-gray-200 hover:bg-primary duration-300 ease-in-out cursor-pointer group/wish"
                    >
                        <Heart size={16} fill={wished ? '#00B207' : 'none'} className={`${wished ? 'text-primary' : 'text-gray-500 group-hover/wish:text-white'} duration-300`} />
                    </button>
                </Tooltip>
                <Tooltip text="Quick View" position="left">
                    <button
                        type="button"
                        aria-label="Quick view"
                        onClick={(e) => { e.stopPropagation(); setQuickView(true); }}
                        className="flex justify-center items-center rounded-full h-8 w-8 border bg-white border-gray-200 hover:bg-primary duration-300 ease-in-out cursor-pointer group/eye"
                    >
                        <Eye size={16} className="text-gray-500 group-hover/eye:text-white duration-300" />
                    </button>
                </Tooltip>
            </div>

            {/* image — same as ProductShowcase */}
            <img src={image} alt={name} className={`pb-4 flex items-center justify-center w-full object-contain ${outOfStock ? 'opacity-40 grayscale-[40%]' : ''}`} loading="lazy" />

            {/* body — same as ProductShowcase */}
            <div className="px-2 font-pop relative">
                <div className="truncate text-gray-700 text-[14px] pt-4 pb-1">
                    {name}
                </div>
                <div>
                    <p className="text-gray-800 font-medium font-semibold">
                        {price && '$'}{price && price.toFixed(2)}
                        {oldPrice && (
                            <span className="text-gray-400 text-[12px] font-normal line-through ml-2">${oldPrice.toFixed(2)}</span>
                        )}
                    </p>
                    <p className="flex pt-[6px] pb-3">
                        <StarRating rating={rating} />
                    </p>
                </div>

                {/* cart button — same as ProductShowcase */}
                <div className="absolute right-5 bottom-4">
                    <Tooltip
                        text={outOfStock ? "Out of Stock" : added ? "Added to Cart" : "Add to Cart"}
                        position="left"
                    >
                        <button
                            type="button"
                            aria-label={added ? 'Added to cart' : 'Add to cart'}
                            disabled={outOfStock}
                            onClick={(e) => { e.stopPropagation(); dispatch(addToCart(product)); showToast('cart', name); setAdded(true); setTimeout(() => setAdded(false), 1200); }}
                            className={`w-10 h-10 flex justify-center items-center rounded-full duration-500 ease-in-out cursor-pointer ${showActions ? 'animate-touchPulse' : ''}
                                        ${outOfStock
                                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                                : added
                                    ? 'bg-primary text-white'
                                    : showActions
                                        ? 'bg-primary'
                                        : 'bg-gray-200 group-hover/cart:bg-primary'
                            }`}
                        >
                            <Handbag className={`duration-300 ${added || showActions ? 'text-white' : 'group-hover/cart:text-white'}`} />
                        </button>
                    </Tooltip>
                </div>
            </div>

            <QuickViewModal open={quickView} onClose={() => setQuickView(false)} product={product} />
        </Link>
    );
};

export default ProductCard;