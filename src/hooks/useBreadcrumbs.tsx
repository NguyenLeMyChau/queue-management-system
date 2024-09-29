import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbsContextType {
    breadcrumbs: string[];
}

const BreadcrumbsContext = createContext<BreadcrumbsContextType | undefined>(undefined);

const breadcrumbConfig: Record<string, string[]> = {
    '/admin/dashboard': ['Tổng quan'],
    '/admin/device': ['Thiết bị', 'Danh sách thiết bị'],
    '/admin/device/add': ['Thiết bị', 'Danh sách thiết bị', 'Thêm thiết bị'],
    '/admin/report': ['Báo cáo', 'Danh sách báo cáo'],
};

// Thêm các đường dẫn tương ứng cho các breadcrumb
export const breadcrumbPaths: Record<string, string[]> = {
    '/admin/dashboard': ['/admin/dashboard'],
    '/admin/device': ['/admin/device'],
    '/admin/device/add': ['/admin/device', '/admin/device', '/admin/device/add'],
    '/admin/report': ['/admin/report'],
};

export const BreadcrumbsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
    const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

    useEffect(() => {
        const currentBreadcrumbs = breadcrumbConfig[location.pathname] || [];
        setBreadcrumbs(currentBreadcrumbs);
    }, [location.pathname]);


    return (
        <BreadcrumbsContext.Provider value={{ breadcrumbs }}>
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