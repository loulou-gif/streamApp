import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import Dashboard from './Dashboard';
import {AddStreams, Update} from './Route'

const AdminRouteur = () => {
    return (
        <Routes>
            <Route element={<AdminLayout/>}>
                <Route path='dashboard' element={<Dashboard/>} />
                <Route path='create' element={<AddStreams/>} />                
                <Route path='update' element={<Update/>} />                
            </Route> 
        </Routes>
    );
};

export default AdminRouteur;