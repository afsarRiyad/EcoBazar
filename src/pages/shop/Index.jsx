import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { SlidersHorizontal, X } from 'lucide-react';
import axios from 'axios';
import ShopSidebar from './ShopSidebar';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Container from '../../components/Container';

const ITEMS_PER_PAGE = 12;
const SORT_OPTIONS = ['Latest', 'Price: Low to High', 'Price: High to Low', 'Top Rated'];

const ShopPage = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category') || '';
    const [sort, setSort] = useState('Latest');
    const [currentPage, setCurrentPage] = useState(1);
    const [filterOpen, setFilterOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const skip = (currentPage - 1) * ITEMS_PER_PAGE;
                let url;
                if (category) {
                    url = `https://dummyjson.com/products/category/${encodeURIComponent(category)}?limit=${ITEMS_PER_PAGE}&skip=${skip}`;
                } else {
                    url = `https://dummyjson.com/products?limit=${ITEMS_PER_PAGE}&skip=${skip}`;
                }
                const { data } = await axios.get(url);
                setProducts(data.products);
                setTotal(data.total);
            } catch (err) {
                setProducts([]);
                setTotal(0);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [currentPage, category]);

    return (
        <Container>
            <div className="flex gap-8 pt-8 pb-16">
                {/* ---------- desktop sidebar ---------- */}
                <aside className="hidden lg:block w-[270px] shrink-0">
                    <ShopSidebar />
                </aside>

                {/* ---------- main column ---------- */}
                <div className="flex-1 min-w-0">
                    {/* toolbar */}
                    <div className="flex items-center justify-between gap-4 pb-6">
                        <button
                            type="button"
                            onClick={() => setFilterOpen(true)}
                            className="lg:hidden flex items-center gap-2 bg-primary text-white font-pop text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-green-600 transition-all duration-200 shadow-sm shadow-primary/20 cursor-pointer"
                        >
                            <SlidersHorizontal size={15} />
                            Filter
                        </button>

                        {category && (
                            <span className="font-pop text-[14px] text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full">
                                {category}
                            </span>
                        )}

                        <div className="flex items-center gap-3 ml-auto">
                            <label htmlFor="sort" className="font-pop text-gray-400 text-[13px] hidden sm:block">
                                Sort by:
                            </label>
                            <select
                                id="sort"
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="font-pop text-[13px] text-gray-600 border border-gray-200 rounded-full px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 cursor-pointer transition-all duration-200 bg-white"
                            >
                                {SORT_OPTIONS.map((o) => (
                                    <option key={o} value={o}>
                                        {o}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <p className="font-pop text-gray-400 text-[13px] w-full sm:w-auto sm:order-first">
                            {total} Results Found
                        </p>
                    </div>

                    {/* product grid */}
                    {loading ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                            {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                                <div key={i} className="animate-pulse border border-gray-100 rounded-md overflow-hidden">
                                    <div className="bg-gray-100 h-48" />
                                    <div className="p-4 space-y-3">
                                        <div className="bg-gray-100 h-4 rounded w-3/4" />
                                        <div className="bg-gray-100 h-4 rounded w-1/2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                        </>
                    )}
                </div>
            </div>

            {/* ---------- mobile filter drawer ---------- */}
            {filterOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
                        onClick={() => setFilterOpen(false)}
                    />
                    <div className="absolute left-0 top-0 h-full w-[85%] max-w-[340px] bg-white overflow-y-auto p-6 shadow-2xl animate-slideIn">
                        <div className="flex items-center justify-between pb-6">
                            <span className="font-pop text-gray-900 font-semibold text-[18px]">Filters</span>
                            <button
                                type="button"
                                onClick={() => setFilterOpen(false)}
                                aria-label="Close filters"
                                className="flex items-center justify-center h-9 w-9 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                            >
                                <X size={16} />
                            </button>
                        </div>
                        <ShopSidebar />
                        <button
                            type="button"
                            onClick={() => setFilterOpen(false)}
                            className="w-full bg-primary text-white font-pop text-[14px] font-medium py-3.5 rounded-full hover:bg-green-600 transition-all duration-200 sticky bottom-4 shadow-lg shadow-primary/25 cursor-pointer"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default ShopPage;