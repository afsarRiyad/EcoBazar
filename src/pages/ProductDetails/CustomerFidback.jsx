import { useState } from 'react';
import StarRating from '../shop/StarRating';

const PAGE_SIZE = 3;

const CustomerFeedback = ({ reviews = [] }) => {
    const [visible, setVisible] = useState(PAGE_SIZE);
    const shown = reviews.slice(0, visible);
    const hasMore = visible < reviews.length;

    return (
        <div className="pt-6">
            <div className="flex flex-col divide-y divide-gray-100">
                {shown.map((review) => (
                    <div key={review.id} className="flex gap-3 py-4 first:pt-0">
                        <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-9 h-9 rounded-full object-cover shrink-0"
                        />
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <span className="dfont text-gray-800 font-medium">{review.name}</span>
                                <span className="text-gray-400 text-[12px]">{review.timeAgo}</span>
                            </div>
                            <StarRating rating={review.rating} size={12} />
                            <p className="default leading-6 pt-1">{review.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {hasMore && (
                <button
                    type="button"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="mt-2 bg-primary text-white text-[13px] font-pop font-medium px-5 py-2 rounded-md hover:bg-primary/90 duration-200 cursor-pointer"
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default CustomerFeedback;