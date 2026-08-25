import { useState, useCallback } from 'react';

let globalSetter = null;

export const showToast = (type, message) => {
    if (globalSetter) {
        globalSetter({ open: true, type, message });
    }
};

const useActionToast = () => {
    const [toast, setToast] = useState({ open: false, type: 'cart', message: '' });

    const set = useCallback((val) => {
        globalSetter = set;
        setToast(val);
    }, []);

    // register global setter on mount
    if (!globalSetter) {
        globalSetter = set;
    }

    const close = useCallback(() => {
        setToast((t) => ({ ...t, open: false }));
    }, []);

    return { toast, close };
};

export default useActionToast;
