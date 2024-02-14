import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Index from './Index';
const PublicRoute = () => {
    return (
        <Routes>
            <Route element={<Layout/> }>
                <Route path='/inscription' element={<Inscription/>} />
                <Route path='/connexion' element={<Connexion/>} />
                <Route path='/index' element={<Index/>} />
            </Route>
        </Routes> 
    );
};

export default PublicRoute;