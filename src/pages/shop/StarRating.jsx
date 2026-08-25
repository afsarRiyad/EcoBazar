import { IoStarHalfSharp } from 'react-icons/io5';
import { IoIosStar, IoMdStarOutline } from 'react-icons/io';

const StarRating = ({ rating = 0, size = 12 }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<IoIosStar key={i} size={size} className="text-[#FF8A00]" />);
        } else if (i === Math.floor(rating) + 1 && rating % 1 !== 0) {
            stars.push(<IoStarHalfSharp key={i} size={size} className="text-[#FF8A00]" />);
        } else {
            stars.push(<IoMdStarOutline key={i} size={size} className="text-[#FF8A00]" />);
        }
    }
    return <div className="flex items-center gap-[2px]">{stars}</div>;
};

export default StarRating;