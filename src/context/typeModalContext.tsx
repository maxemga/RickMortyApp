import React, { createContext, useState } from "react";



export const TypeModalContext = createContext({});

export const TypeModalProvider = ({ children }: { children: any }) => {
    const [activeTypeModal, setActiveTypeModal] = useState<string>('');

    return <TypeModalContext.Provider value={{activeTypeModal, setActiveTypeModal}}>
            {children}
        </TypeModalContext.Provider>
}