import { useEffect, useState } from 'react';
import { Check, ShoppingCart, Heart, X } from 'lucide-react';
import { Link } from 'react-router';

const ActionToast = ({ open, onClose, type = 'cart', message = '', duration = 3000 }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (open) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                setTimeout(onClose, 300);
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [open, duration, onClose]);

    if (!open) return null;

    const isCart = type === 'cart';
    const to = isCart ? '/cart' : '/wishlist';
    const label = isCart ? 'Go to Cart' : 'Go to Wishlist';
    const Icon = isCart ? ShoppingCart : Heart;

    return (
        <div
            className={`fixed bottom-6 right-6 z-[60] flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-xl px-4 py-3 font-pop transition-all duration-300
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            style={{ maxWidth: '340px' }}
        >
            {/* success icon */}
            <div className='w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 shrink-0'>
                <Check size={18} className='text-primary' />
            </div>

            {/* message */}
            <div className='flex-1 min-w-0'>
                <p className='text-[13px] text-gray-900 font-medium truncate'>{message}</p>
                <p className='text-[11px] text-gray-400'>
                    {isCart ? 'Added to your cart' : 'Added to your wishlist'}
                </p>
            </div>

            {/* action button */}
            <Link
                to={to}
                onClick={onClose}
                className='flex items-center gap-1.5 bg-primary text-white text-[12px] font-semibold px-3 py-2 rounded-lg hover:bg-green-600 transition-colors shrink-0'
            >
                <Icon size={14} />
                {label}
            </Link>

            {/* close */}
            <button
                onClick={() => { setVisible(false); setTimeout(onClose, 300); }}
                className='text-gray-400 hover:text-gray-600 transition-colors cursor-pointer shrink-0'
                aria-label='Close'
            >
                <X size={16} />
            </button>
        </div>
    );
};

export default ActionToast;
