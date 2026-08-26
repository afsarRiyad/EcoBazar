import { useState } from 'react';
import Descriptions from './descreption';
import AdditionalInfo from './AdditionalInfo';
import CustomerFeedback from './CustomerFidback';

const TABS = ['Descriptions', 'Additional Information', 'Customer Feedback'];

const ProductTabs = ({ product }) => {
    const [active, setActive] = useState(TABS[2]);

    return (
        <div className="w-full pt-10">
            <div className="flex items-center gap-8 border-b border-gray-100">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        type="button"
                        onClick={() => setActive(tab)}
                        className={`relative pb-4 font-pop text-[15px] duration-200 cursor-pointer ${
                            active === tab ? 'text-gray-900 font-medium' : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        {tab}
                        {active === tab && (
                            <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-primary rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            {active === 'Descriptions' && (
                <Descriptions
                    paragraphs={product.descriptionParagraphs}
                    bullets={product.descriptionBullets}
                    thumbnail={product.farmVideoThumbnail}
                />
            )}
            {active === 'Additional Information' && (
                <AdditionalInfo info={product.additionalInfo} thumbnail={product.farmVideoThumbnail} />
            )}
            {active === 'Customer Feedback' && <CustomerFeedback reviews={product.reviews} />}
        </div>
    );
};

export default ProductTabs;