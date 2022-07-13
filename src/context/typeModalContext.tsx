import React, { createContext, useMemo, useState } from 'react';

export const TypeModalContext = createContext({});

export const TypeModalProvider = ({ children }: { children: Element }) => {
    const [activeTypeModal, setActiveTypeModal] = useState<string>('');

    const value = useMemo(
        () => ({
            activeTypeModal,
            setActiveTypeModal,
        }),
        [activeTypeModal],
    );

    return <TypeModalContext.Provider value={value}>{children}</TypeModalContext.Provider>;
};
