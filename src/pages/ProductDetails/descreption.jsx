import { CheckCircle2 } from 'lucide-react';
import FarmVideoCard from './FarmVideoCard';

const Descriptions = ({ paragraphs = [], bullets = [], thumbnail }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 pt-6">
            <div className="flex-1">
                {paragraphs.map((p, i) => (
                    <p key={i} className="default leading-6 pb-4">
                        {p}
                    </p>
                ))}

                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6 pt-2">
                    {bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-primary shrink-0" />
                            <span className="dfont text-gray-600">{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <FarmVideoCard thumbnail={thumbnail} />
        </div>
    );
};

export default Descriptions;