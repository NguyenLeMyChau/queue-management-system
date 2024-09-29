import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FrameLogin from '../pages/frameLogin/FrameLogin';
import FrameAdmin from '../pages/frameAdmin/FrameAdmin';
import Dashboard from '../pages/dashboard/Dashboard';
import Device from '../pages/device/Device';
import AddDevice from '../pages/device/AddDevice';
import Chat from '../pages/chat/Chat';
import Level from '../pages/level/Level';
import Report from '../pages/report/Report';
import { BreadcrumbsProvider } from '../hooks/useBreadcrumbs';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <BreadcrumbsProvider>
                <Routes>
                    <Route path="*" element={<Navigate to="/login" replace />} />
                    <Route path="/login" element={<FrameLogin />} />
                    <Route path="/admin" element={<FrameAdmin />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="device" element={<Device />} />
                        <Route path="device/add" element={<AddDevice />} />
                        <Route path="chat" element={<Chat />} />
                        <Route path="level" element={<Level />} />
                        <Route path="report" element={<Report />} />
                    </Route>
                </Routes>
            </BreadcrumbsProvider>
        </Router>
    );
};

export default AppRoutes;