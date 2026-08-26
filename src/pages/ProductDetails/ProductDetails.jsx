import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import axios from 'axios';
import ProductGallery from './productGallery';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';


const ProductDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const [product, setProduct] = useState(null);
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(true);

    // scroll to top when navigating to a new product
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setRelated([]);
            try {
                const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
                const desc = data.description || '';
                const mapped = {
                    ...data,
                    name: data.title,
                    image: data.thumbnail,
                    images: (data.images && data.images.length > 0) ? data.images : [data.thumbnail],
                    outOfStock: data.stock === 0,
                    shortDescription: desc.split('. ').slice(0, 2).join('. ') + '.',
                    descriptionParagraphs: desc.split('. ').reduce((acc, sentence, i) => {
                        if (i % 2 === 0) acc.push(sentence + '.');
                        else acc[acc.length - 1] += ' ' + sentence + '.';
                        return acc;
                    }, []),
                    descriptionBullets: [
                        `Brand: ${data.brand || 'N/A'}`,
                        `Category: ${data.category || 'N/A'}`,
                        `Weight: ${data.weight || 'N/A'}g`,
                        `Warranty: ${data.warrantyInformation || 'N/A'}`,
                        `Shipping: ${data.shippingInformation || 'N/A'}`,
                        `Return Policy: ${data.returnPolicy || 'N/A'}`,
                    ],
                    farmVideoThumbnail: data.thumbnail,
                    additionalInfo: {
                        weight: data.weight ? `${data.weight}g` : 'N/A',
                        color: data.color || 'N/A',
                        type: data.category || 'N/A',
                        category: data.category || 'N/A',
                        stockStatus: data.stock === 0 ? 'Out of Stock' : 'In Stock',
                        tags: data.tags || [],
                    },
                    reviews: (data.reviews || []).map((r, i) => ({
                        ...r,
                        id: r.id || i,
                        name: r.reviewerName || 'Anonymous',
                        avatar: `https://i.pravatar.cc/150?u=${r.reviewerEmail || i}`,
                        text: r.comment || '',
                        timeAgo: r.date ? new Date(r.date).toLocaleDateString() : '',
                    })),
                };
                setProduct(mapped);
                if (data.category) {
                    try {
                        const { data: rel } = await axios.get(
                            `https://dummyjson.com/products/category/${encodeURIComponent(data.category)}?limit=4&select=title,price,thumbnail,stock,rating`
                        );
                        setRelated(
                            rel.products
                                .filter((p) => p.id !== data.id)
                                .slice(0, 4)
                                .map((p) => ({ ...p, name: p.title, image: p.thumbnail, outOfStock: p.stock === 0 }))
                        );
                    } catch { /* ignore */ }
                }
            } catch {
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8 font-pop">
                <div className="flex flex-col lg:flex-row gap-10 animate-pulse">
                    <div className="lg:w-1/2 space-y-4">
                        <div className="bg-gray-100 rounded-md h-[500px]" />
                        <div className="flex gap-2">
                            {[1,2,3,4].map(i => <div key={i} className="bg-gray-100 rounded-md h-16 w-16" />)}
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-4">
                        <div className="bg-gray-100 rounded h-8 w-3/4" />
                        <div className="bg-gray-100 rounded h-6 w-1/2" />
                        <div className="bg-gray-100 rounded h-10 w-1/3" />
                        <div className="bg-gray-100 rounded h-4 w-full" />
                        <div className="bg-gray-100 rounded h-4 w-5/6" />
                    </div>
                </div>
            </section>
        );
    }
    if (!product) return null;
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8 font-pop">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2">
                    <ProductGallery images={product.images} />
                </div>
                <div className="lg:w-1/2">
                    <ProductInfo product={product} />
                </div>
            </div>
            <ProductTabs product={product} />
            <RelatedProducts products={related} />
        </section>
    );
};

export default ProductDetails;