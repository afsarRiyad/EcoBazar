
import FarmVideoCard from './FarmVideoCard';

const AdditionalInfo = ({ info, thumbnail }) => {
    const rows = [
        ['Weight', info.weight],
        ['Color', info.color],
        ['Type', info.type],
        ['Category', info.category],
        ['Stock Status', info.stockStatus],
        ['Tags', info.tags.join(', ')],
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-8 pt-6">
            <table className="flex-1 border-collapse">
                <tbody>
                    {rows.map(([label, value], i) => (
                        <tr key={label} className={i !== rows.length - 1 ? 'border-b border-gray-100' : ''}>
                            <td className="py-3 pr-6 dfont text-gray-500 w-[160px] align-top">{label}</td>
                            <td className="py-3 dfont text-gray-800">{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <FarmVideoCard thumbnail={thumbnail} />
        </div>
    );
};

export default AdditionalInfo;