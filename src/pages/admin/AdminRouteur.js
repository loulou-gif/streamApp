import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import Dashboard from './Dashboard';

const AdminRouteur = () => {
    return (
        <Routes>
            <Route yelement={<AdminLayout/>}>
                <Route path='dashboard' element={<Dashboard/>} />
            </Route> 
        </Routes>
    );
};

export default AdminRouteur;