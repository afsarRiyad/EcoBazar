import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Minus, Plus, Heart, Share2 } from 'lucide-react';
import Facebook from '../../assets/iconsSocial/facebookSvg.svg?react';
import Twitter from '../../assets/iconsSocial/twitterSvg.svg?react';
import Instagram from '../../assets/iconsSocial/instagramSvg.svg?react';
import StarRating from '../shop/StarRating';
import { addToCart } from '../../slices/cartSlice';
import { addToWishlist } from '../../slices/wishlistSlice';
import { showToast } from '../../hooks/useActionToast';

const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Share2, label: 'Share' },
];

const ProductInfo = ({ product }) => {
    const [qty, setQty] = useState(1);
    const [wished, setWished] = useState(false);
    const dispatch = useDispatch();

    const {
        name,
        sku,
        brand,
        price,
        oldPrice,
        salePercent,
        rating,
        reviewCount,
        outOfStock,
        shortDescription,
        category,
        tags = [],
    } = product;

    const handleAddToCart = () => {
        dispatch(addToCart({ ...product, qty }));
        showToast('cart', name);
    };

    const handleWishlist = () => {
        dispatch(addToWishlist(product));
        setWished(true);
        showToast('wishlist', name);
    };

    return (
        <div className="font-pop w-full">
            <h1 className="dheading">{name}</h1>

            {/* rating + sku + stock */}
            <div className="flex flex-wrap items-center gap-3 pt-2 pb-3">
                <span className="flex items-center gap-1">
                    <StarRating rating={rating} />
                    <span className="default text-[13px]">({reviewCount} Reviews)</span>
                </span>
                <span className="text-gray-300">|</span>
                <span className="default text-[13px]">SKU: {sku}</span>
                <span
                    className={`text-[11px] font-medium px-2.5 py-1 rounded-md ${
                        outOfStock ? 'bg-gray-100 text-gray-500' : 'bg-primary/10 text-primary'
                    }`}
                >
                    {outOfStock ? 'Out of Stock' : 'In Stock'}
                </span>
            </div>

            {/* price */}
            <div className="flex items-center gap-3 pb-4">
                {oldPrice && (
                    <span className="text-gray-400 text-[16px] line-through">${oldPrice.toFixed(2)}</span>
                )}
                <span className="text-gray-900 text-[26px] font-semibold">${price.toFixed(2)}</span>
                {salePercent && (
                    <span className="bg-badgeone text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                        {salePercent}% OFF
                    </span>
                )}
            </div>

            {/* brand + social */}
            <div className="flex items-center justify-between border-y border-gray-100 py-3 mb-4">
                <span className="dfont text-gray-500">
                    Brand: <span className="text-gray-800 font-medium">{brand}</span>
                </span>
                <span className="flex items-center gap-2">
                    <span className="default text-[13px] mr-1">Share item:</span>
                    {socialLinks.map(({ icon: Icon, label }) => (
                        <button
                            key={label}
                            type="button"
                            aria-label={label}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-primary hover:text-white duration-200 cursor-pointer"
                        >
                            <Icon className='w-4 h-4' />
                        </button>
                    ))}
                </span>
            </div>

            <p className="default leading-6 pb-5">{shortDescription}</p>

            {/* qty + cart + wishlist */}
            <div className="flex items-center gap-4 pb-5">
                <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                    <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-primary cursor-pointer"
                    >
                        <Minus size={14} />
                    </button>
                    <span className="w-8 text-center dfont text-gray-800">{qty}</span>
                    <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => setQty((q) => q + 1)}
                        className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-primary cursor-pointer"
                    >
                        <Plus size={14} />
                    </button>
                </div>

                <button
                    type="button"
                    disabled={outOfStock}
                    onClick={handleAddToCart}
                    className={`flex-1 h-11 rounded-full font-pop text-[14px] font-medium duration-200 cursor-pointer ${
                        outOfStock
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                >
                    Add to Cart
                </button>

                <button
                    type="button"
                    aria-label="Add to wishlist"
                    onClick={handleWishlist}
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 hover:border-primary duration-200 cursor-pointer"
                >
                    <Heart size={18} fill={wished ? '#00B207' : 'none'} className={wished ? 'text-primary' : 'text-gray-500'} />
                </button>
            </div>

            {/* category */}
            <p className="dfont text-gray-500 pb-2">
                Category: <span className="text-gray-800">{category}</span>
            </p>

            {/* tags */}
            <p className="dfont text-gray-500 flex flex-wrap gap-1">
                Tags:
                {tags.map((tag, i) => (
                    <span key={tag} className="text-gray-800">
                        {tag}
                        {i < tags.length - 1 ? ',' : ''}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default ProductInfo;