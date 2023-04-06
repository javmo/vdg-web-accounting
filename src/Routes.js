import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/common/NotFound';
import { AuthProvider } from './hooks/useAuth';
import AuthPage from './pages/auth/AuthPage';
import DashboardPage from './pages/dashboard/DashboardPage';


const AppRoutes = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route component={NotFound} />
            </Routes>
        </AuthProvider>
    );
};

export default AppRoutes;