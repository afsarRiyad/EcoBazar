import { useState } from 'react';

/**
 * Reusable Tooltip component.
 *
 * @param {string}  text       – Tooltip label (hidden when empty/undefined).
 * @param {'top'|'bottom'|'left'|'right'}  position – Preferred position.
 * @param {number}  delay      – Delay in ms before showing (default 200).
 * @param {React.ReactNode}  children – Wrapped trigger element.
 */
const Tooltip = ({
    children,
    text,
    position = 'top',
    delay = 200,
    wrapperClassName = '',
}) => {
    const [show, setShow] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const open = () => {
        clearTimeout(timeoutId);
        setTimeoutId(setTimeout(() => setShow(true), delay));
    };

    const close = () => {
        clearTimeout(timeoutId);
        setShow(false);
    };

    /* ---------- positioning classes ---------- */
    const posClasses = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    /* arrow rotation per position */
    const arrowPos = {
        top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-900 border-x-transparent border-b-transparent',
        bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-900 border-x-transparent border-t-transparent',
        left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-900 border-y-transparent border-r-transparent',
        right: 'right-full top-1/2 -translate-y-1/2 border-r-gray-900 border-y-transparent border-l-transparent',
    };

    /* animation per position (slide + fade) */
    const animClasses = {
        top: 'animate-slideDown',
        bottom: 'animate-slideUp',
        left: 'animate-slideRight',
        right: 'animate-slideLeft',
    };

    if (!text) return children;

    return (
        <div
            className={`relative inline-flex ${wrapperClassName}`.trim()}
            onMouseEnter={open}
            onMouseLeave={close}
            onFocus={open}
            onBlur={close}
        >
            {children}
            {show && (
                <span
                    role="tooltip"
                    className={`absolute z-50 whitespace-nowrap px-2.5 py-1.5 text-[11px] font-pop font-medium text-white bg-gray-900 rounded-md pointer-events-none shadow-lg
                                ${posClasses[position]} ${animClasses[position]}`}
                >
                    {text}
                    {/* arrow */}
                    <span
                        className={`absolute w-0 h-0 border-[5px] ${arrowPos[position]}`}
                    />
                </span>
            )}
        </div>
    );
};

export default Tooltip;
