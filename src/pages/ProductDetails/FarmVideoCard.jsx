import { Play, Percent, Leaf } from 'lucide-react';


const FarmVideoCard = ({ thumbnail }) => {
    return (
        <div className="w-full lg:w-[280px] shrink-0">
            <div className="relative rounded-md overflow-hidden h-[180px]">
                <img src={thumbnail} alt="Farm story" className="w-full h-full object-cover" />
                <button
                    type="button"
                    aria-label="Play video"
                    className="absolute inset-0 m-auto w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:scale-105 duration-200"
                >
                    <Play size={18} fill="white" className="ml-[2px]" />
                </button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="flex items-start gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Percent size={15} />
                    </span>
                    <span>
                        <p className="dfont text-gray-800 font-medium leading-tight">64% Discount</p>
                        <p className="text-gray-400 text-[12px]">Save your 64% money with us</p>
                    </span>
                </div>
                <div className="flex items-start gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Leaf size={15} />
                    </span>
                    <span>
                        <p className="dfont text-gray-800 font-medium leading-tight">100% Organic</p>
                        <p className="text-gray-400 text-[12px]">100% Organic Vegetables</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FarmVideoCard;
