import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrameLogin from '../pages/frameLogin/FrameLogin';
import FrameAdmin from '../pages/frameAdmin/FrameAdmin';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<FrameLogin />} />
                <Route path="/login" element={<FrameLogin />} />
                <Route path="/admin" element={<FrameAdmin />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;