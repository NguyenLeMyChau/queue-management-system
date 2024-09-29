import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BreadcrumbsContextType {
    breadcrumbs: string[];
    setBreadcrumbs: (breadcrumbs: string[]) => void;
}

const BreadcrumbsContext = createContext<BreadcrumbsContextType | undefined>(undefined);

export const BreadcrumbsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['Tổng quan']);

    return (
        <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
            {children}
        </BreadcrumbsContext.Provider>
    );
};

export const useBreadcrumbs = (): BreadcrumbsContextType => {
    const context = useContext(BreadcrumbsContext);
    if (!context) {
        throw new Error('useBreadcrumbs must be used within a BreadcrumbsProvider');
    }
    return context;
};