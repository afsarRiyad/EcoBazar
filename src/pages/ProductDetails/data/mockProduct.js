import Product from '../../../assets/images/product.webp';

const mockProduct = {
    id: 1,
    name: 'Fresh Organic Green Capsicum',
    sku: 'VGR-001',
    brand: 'Ecobazar',
    price: 14.99,
    oldPrice: 20.99,
    salePercent: 30,
    rating: 4.5,
    reviewCount: 48,
    outOfStock: false,
    shortDescription:
        'Hand-picked fresh organic green capsicum straight from local farms. Crisp, vibrant, and packed with nutrients — perfect for salads, stir-fries, and everyday cooking.',
    category: 'Vegetables',
    tags: ['organic', 'fresh', 'vegetables', 'capsicum'],
    images: [Product, Product, Product, Product],

    // Description tab
    descriptionParagraphs: [
        'Our Fresh Organic Green Capsicum is sourced directly from certified organic farms. Each capsicum is carefully hand-picked at peak ripeness to ensure maximum flavor and nutritional value.',
        'Rich in vitamins A and C, green capsicums are a great addition to any healthy diet. They add a crunch to salads, a vibrant color to stir-fries, and a mild sweetness to cooked dishes.',
    ],
    descriptionBullets: [
        '100% Certified Organic',
        'Hand-picked at peak ripeness',
        'Rich in Vitamin C & A',
        'No pesticides or chemicals',
        'Farm-fresh delivery within 24 hours',
        'Resealable eco-friendly packaging',
    ],
    farmVideoThumbnail: Product,

    // Additional Information tab
    additionalInfo: {
        weight: '500g',
        color: 'Green',
        type: 'Fresh Vegetable',
        category: 'Vegetables',
        stockStatus: 'In Stock',
        tags: ['organic', 'fresh', 'vegetables'],
    },

    // Customer Feedback tab
    reviews: [
        {
            id: 1,
            name: 'Sarah Johnson',
            avatar: 'https://i.pravatar.cc/150?img=1',
            rating: 5,
            text: 'Absolutely fresh and crisp! The capsicums were delivered within a day and tasted amazing in my stir-fry. Will definitely order again.',
            timeAgo: '2 days ago',
        },
        {
            id: 2,
            name: 'Mike Chen',
            avatar: 'https://i.pravatar.cc/150?img=3',
            rating: 4,
            text: 'Great quality organic produce. The packaging was eco-friendly and the vegetables were in perfect condition. Slightly smaller than expected but taste is excellent.',
            timeAgo: '5 days ago',
        },
        {
            id: 3,
            name: 'Emily Davis',
            avatar: 'https://i.pravatar.cc/150?img=5',
            rating: 5,
            text: 'Best green capsicums I\'ve ever bought online. So fresh and flavorful! My whole family loved them.',
            timeAgo: '1 week ago',
        },
        {
            id: 4,
            name: 'James Wilson',
            avatar: 'https://i.pravatar.cc/150?img=7',
            rating: 4,
            text: 'Good quality and fast delivery. The organic certification gives me confidence in what I\'m feeding my kids.',
            timeAgo: '2 weeks ago',
        },
        {
            id: 5,
            name: 'Lisa Anderson',
            avatar: 'https://i.pravatar.cc/150?img=9',
            rating: 5,
            text: 'Fresh, organic, and delivered right to my door. What more could you ask for? The capsicums were vibrant green and lasted almost a week in the fridge.',
            timeAgo: '3 weeks ago',
        },
    ],

    // Related products (4 items)
    relatedProducts: [
        {
            id: 2,
            name: 'Fresh Chinese Cabbage',
            price: 12.99,
            image: Product,
            rating: 4,
        },
        {
            id: 3,
            name: 'Organic Eggplant',
            price: 9.99,
            oldPrice: 14.99,
            image: Product,
            rating: 4.5,
        },
        {
            id: 4,
            name: 'Red Tomato',
            price: 8.99,
            image: Product,
            rating: 4,
        },
        {
            id: 5,
            name: 'Green Chili Pepper',
            price: 6.99,
            image: Product,
            rating: 3.5,
        },
    ],
};

export default mockProduct;
