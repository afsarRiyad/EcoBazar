import { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ProductGallery = ({ images = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const thumbContainerRef = useRef(null);
    const [zoom, setZoom] = useState(false);
    const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
    const imageContainerRef = useRef(null);
    const touchStartRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const rect = imageContainerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setZoomPos({ x, y });
    }, []);

    // Touch handlers for swipe on main image
    const handleTouchStart = useCallback((e) => {
        touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, []);

    const handleTouchEnd = useCallback((e) => {
        if (!touchStartRef.current) return;
        const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
        const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
        touchStartRef.current = null;

        // Only swipe if horizontal movement > 50px and more horizontal than vertical
        if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX < 0 && activeIndex < images.length - 1) {
                handleNext();
            } else if (deltaX > 0 && activeIndex > 0) {
                handlePrev();
            }
        }
    }, [activeIndex, images.length]);

    // Touch handlers for thumbnail rail swipe scrolling
    const thumbTouchStartRef = useRef(null);
    const handleThumbTouchStart = useCallback((e) => {
        thumbTouchStartRef.current = e.touches[0].clientY;
    }, []);

    const handleThumbTouchEnd = useCallback((e) => {
        if (thumbTouchStartRef.current === null) return;
        const deltaY = e.changedTouches[0].clientY - thumbTouchStartRef.current;
        thumbTouchStartRef.current = null;
        if (Math.abs(deltaY) > 30) {
            if (deltaY < 0) handleNext();
            else handlePrev();
        }
    }, [activeIndex, images.length]);

    // Toggle zoom on double tap (mobile)
    const lastTapRef = useRef(0);
    const handleDoubleTap = useCallback((e) => {
        const now = Date.now();
        if (now - lastTapRef.current < 300) {
            if (zoom) {
                setZoom(false);
            } else {
                const rect = imageContainerRef.current.getBoundingClientRect();
                const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
                const y = ((e.touches[0].clientY - rect.top) / rect.height) * 100;
                setZoomPos({ x, y });
                setZoom(true);
            }
        }
        lastTapRef.current = now;
    }, [zoom]);

    if (!images.length) return null;

    const scrollToThumb = (index) => {
        const container = thumbContainerRef.current;
        if (!container) return;
        const thumb = container.children[index];
        if (thumb) {
            thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    const handlePrev = () => {
        const newIndex = Math.max(0, activeIndex - 1);
        setActiveIndex(newIndex);
        scrollToThumb(newIndex);
    };

    const handleNext = () => {
        const newIndex = Math.min(images.length - 1, activeIndex + 1);
        setActiveIndex(newIndex);
        scrollToThumb(newIndex);
    };

    const handleThumbClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="flex gap-4 w-full">
            {/* thumbnail rail */}
            <div className="relative w-[64px] shrink-0">
                <button
                    type="button"
                    aria-label="Previous image"
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-primary hover:bg-gray-100 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:bg-gray-200 transition-colors"
                >
                    <ChevronUp size={18} />
                </button>

                <div
                    ref={thumbContainerRef}
                    className="h-[420px] my-6 overflow-y-auto flex flex-col gap-3"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    onTouchStart={handleThumbTouchStart}
                    onTouchEnd={handleThumbTouchEnd}
                >
                    {images.map((src, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => handleThumbClick(i)}
                            className={`h-[76px] w-[64px] shrink-0 rounded-md border overflow-hidden duration-150 cursor-pointer ${
                                activeIndex === i ? 'border-primary' : 'border-gray-200 hover:border-gray-300'
                            }`}
                        >
                            <img
                                src={src}
                                alt={`thumbnail ${i + 1}`}
                                className="w-full h-full object-contain p-1"
                            />
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    aria-label="Next image"
                    onClick={handleNext}
                    disabled={activeIndex === images.length - 1}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-primary hover:bg-gray-100 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:bg-gray-200 transition-colors"
                >
                    <ChevronDown size={18} />
                </button>
            </div>

            {/* main image */}
            <div
                ref={imageContainerRef}
                className="flex-1 border border-gray-100 rounded-md flex items-center justify-center bg-white min-h-[480px] overflow-hidden cursor-crosshair"
                onMouseEnter={() => setZoom(true)}
                onMouseLeave={() => setZoom(false)}
                onMouseMove={handleMouseMove}
                onTouchStart={(e) => { handleTouchStart(e); handleDoubleTap(e); }}
                onTouchEnd={handleTouchEnd}
            >
                <img
                    src={images[activeIndex]}
                    alt={`product view ${activeIndex + 1}`}
                    className="max-h-[440px] w-full object-contain p-4 transition-transform duration-300 ease-out"
                    style={zoom ? {
                        transform: 'scale(2)',
                        transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                    } : {}}
                    draggable={false}
                />
            </div>
        </div>
    );
};

export default ProductGallery;