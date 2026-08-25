import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const goTo = (page) => {
        if (page < 1 || page > totalPages || page === currentPage) return;
        onPageChange(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const getPages = () => {
        const pages = [];
        const siblings = 1;
        const first = 1;
        const last = totalPages;

        const start = Math.max(currentPage - siblings, first);
        const end = Math.min(currentPage + siblings, last);

        if (start > first) {
            pages.push(first);
            if (start > first + 1) pages.push('dots-start');
        }

        for (let i = start; i <= end; i++) pages.push(i);

        if (end < last) {
            if (end < last - 1) pages.push('dots-end');
            pages.push(last);
        }

        return pages;
    };

    if (totalPages <= 1) return null;

    return (
        <nav
            aria-label="Pagination"
            className="flex items-center justify-center gap-2 sm:gap-3 pt-8 pb-4 flex-wrap"
        >
            <button
                type="button"
                onClick={() => goTo(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex items-center justify-center h-9 w-9 rounded-full border border-gray-200 text-gray-500 cursor-pointer
                           hover:border-primary hover:text-primary duration-150
                           disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-500 disabled:cursor-not-allowed"
            >
                <ChevronLeft size={16} />
            </button>

            {getPages().map((p) =>
                typeof p === 'number' ? (
                    <button
                        type="button"
                        key={p}
                        onClick={() => goTo(p)}
                        aria-current={p === currentPage ? 'page' : undefined}
                        className={`h-9 w-9 rounded-full font-pop text-[14px] duration-150 cursor-pointer ${p === currentPage
                                ? 'bg-primary text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        {p}
                    </button>
                ) : (
                    <span key={p} className="text-gray-400 font-pop text-[14px] px-1 select-none">
                        …
                    </span>
                )
            )}

            <button
                type="button"
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex items-center justify-center h-9 w-9 rounded-full border border-gray-200 text-gray-500 cursor-pointer
                           hover:border-primary hover:text-primary duration-150
                           disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-500 disabled:cursor-not-allowed"
            >
                <ChevronRight size={16} />
            </button>
        </nav>
    );
};

export default Pagination;