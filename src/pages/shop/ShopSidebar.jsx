import { useState } from 'react';
import { ChevronUp, ChevronDown, ArrowRight, Check } from 'lucide-react';
import StarRating from './StarRating';
import Product from '../../assets/images/product.webp';

const CATEGORIES = [
    { name: 'All Categories', count: null },
    { name: 'Fresh Fruit (25)', count: 134 },
    { name: 'Vegetables', count: 159 },
    { name: 'Cooking', count: 54 },
    { name: 'Snacks', count: 47 },
    { name: 'Beverages', count: 43 },
    { name: 'Beauty & Health', count: 38 },
    { name: 'Bread & Bakery', count: 15 },
];

const TAGS = ['Healthy', 'Low fat', 'Vegetarian', 'Kid foods', 'Vitamins', 'Bread', 'Meat', 'Snacks', 'Tiffin', 'Launch', 'Dinner', 'Breakfast', 'Fruit'];

const SALE_PRODUCTS = [
    { id: 1, name: 'Red Tomato', price: 32.0, oldPrice: 28.0, rating: 4, image: Product },
    { id: 2, name: 'Chinese Cabbage', price: 24.0, oldPrice: 29.0, rating: 4, image: Product },
    { id: 3, name: 'Green Capsicum', price: 32.0, oldPrice: 29.0, rating: 4, image: Product },
];

// Small section wrapper that can collapse, matching the chevron affordance in the design
const FilterSection = ({ title, children, defaultOpen = true }) => {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="border-b border-gray-100 pb-5 mb-5 last:border-0">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="flex w-full items-center justify-between font-pop text-gray-900 font-semibold text-[15px] pb-4 hover:text-primary transition-colors duration-200 cursor-pointer"
            >
                {title}
                <span className="transition-transform duration-200" style={{ transform: open ? 'rotate(0deg)' : 'rotate(180deg)' }}>
                    <ChevronUp size={18} className="text-gray-400" />
                </span>
            </button>
            <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? '500px' : '0', opacity: open ? 1 : 0 }}>
                {children}
            </div>
        </div>
    );
};

const ShopSidebar = () => {
    const [category, setCategory] = useState('Vegetables');
    const [rating, setRating] = useState(4);
    const [tags, setTags] = useState([]);
    const toggleTag = (t) => setTags((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);
    const [price, setPrice] = useState(1500);

    return (
        <div className="w-full font-pop">
            <FilterSection title="All Categories">
                <ul className="flex flex-col gap-2.5 pl-1">
                    {CATEGORIES.map((c) => (
                        <li key={c.name}>
                            <button
                                type="button"
                                onClick={() => setCategory(c.name)}
                                className="flex items-center justify-between w-full text-left group py-0.5 cursor-pointer"
                            >
                                <span className="flex items-center gap-2.5">
                                    <span
                                        className={`flex items-center justify-center h-[18px] w-[18px] rounded-full border-[1.5px] transition-all duration-200
                                                    ${category === c.name ? 'border-primary bg-primary scale-110' : 'border-gray-300 group-hover:border-primary'}`}
                                    >
                                        {category === c.name && <Check size={10} className="text-white" strokeWidth={3} />}
                                    </span>
                                    <span className={`text-[13.5px] transition-colors duration-200 ${category === c.name ? 'text-gray-900 font-medium' : 'text-gray-500 group-hover:text-gray-700'}`}>
                                        {c.name}
                                    </span>
                                </span>
                                {c.count && <span className="text-[12px] text-gray-400">({c.count})</span>}
                            </button>
                        </li>
                    ))}
                </ul>
            </FilterSection>

            <FilterSection title="Price">
                <div className="pt-1">
                    <input
                        type="range"
                        min={50}
                        max={1500}
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="w-full accent-primary h-[3px] cursor-pointer"
                    />
                    <p className="text-gray-500 text-[13px] pt-3">
                        Price: <span className="text-gray-900 font-medium">$50 — ${price.toLocaleString()}</span>
                    </p>
                </div>
            </FilterSection>

            <FilterSection title="Rating">
                <ul className="flex flex-col gap-2.5 pl-1">
                    {[5, 4, 3, 2, 1].map((r) => (
                        <li key={r}>
                            <button type="button" onClick={() => setRating(r)} className="flex items-center gap-2.5 group py-0.5 cursor-pointer">
                                <span
                                    className={`flex items-center justify-center h-[18px] w-[18px] rounded border-[1.5px] transition-all duration-200
                                                ${rating === r ? 'border-primary bg-primary' : 'border-gray-300 group-hover:border-primary'}`}
                                >
                                    {rating === r && <Check size={10} className="text-white" strokeWidth={3} />}
                                </span>
                                <StarRating rating={r} size={13} />
                                <span className="text-[13px] text-gray-500">{r.toFixed(1)} & up</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </FilterSection>

            <FilterSection title="Popular Tag">
                <div className="flex flex-wrap gap-2">
                    {TAGS.map((t) => (
                        <button
                            key={t}
                            type="button"
                            onClick={() => toggleTag(t)}
                            className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 cursor-pointer
                                        ${tags.includes(t) ? 'bg-primary text-white shadow-sm shadow-primary/20' : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'}`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </FilterSection>

            {/* discount banner */}
            <div className="relative rounded-2xl overflow-hidden mb-6 min-h-[180px] flex items-end">
                <img
                    src="https://picsum.photos/seed/veggie-banner/400/300"
                    alt="Fresh vegetables"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="relative z-10 p-5 w-full">
                    <p className="text-[#FF8A00] font-bold text-[24px] leading-tight">79% Discount</p>
                    <p className="text-white/90 text-[13px] mt-0.5">on your first order</p>
                    <button type="button" className="flex items-center gap-1.5 bg-primary text-white text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-green-600 transition-all duration-200 mt-3 shadow-sm cursor-pointer">
                        Shop Now <ArrowRight size={14} />
                    </button>
                </div>
            </div>

            {/* sale products */}
            <div>
                <p className="font-pop text-gray-900 font-semibold text-[15px] pb-4">Sale Products</p>
                <div className="flex flex-col gap-3">
                    {SALE_PRODUCTS.map((p) => (
                        <div
                            key={p.id}
                            className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:border-primary hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                        >
                            <img src={p.image} alt={p.name} className="h-14 w-14 rounded-lg object-cover shrink-0" />
                            <div className="min-w-0">
                                <p className="text-[13px] text-gray-700 truncate font-medium">{p.name}</p>
                                <div className="flex items-baseline gap-2 mt-0.5">
                                    <span className="text-[14px] font-semibold text-gray-900">${p.price.toFixed(2)}</span>
                                    <span className="text-[11px] text-gray-400 line-through">${p.oldPrice.toFixed(2)}</span>
                                </div>
                                <div className="mt-0.5">
                                    <StarRating rating={p.rating} size={10} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopSidebar;