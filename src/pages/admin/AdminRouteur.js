import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import Dashboard from './Dashboard';
import {EditStreams, Update, AStream} from './Route'

const AdminRouteur = () => {
    return (
        <Routes>
            <Route element={<AdminLayout/>}>
                <Route path='dashboard' element={<Dashboard/>} />
                <Route path='edit' element={<EditStreams/>} />                
                <Route path='update/:id' element={<Update/>} />                
                <Route path='admin-stream/:id' element={<AStream/>} />                
            </Route> 
        </Routes>
    );
};

export default AdminRouteur;