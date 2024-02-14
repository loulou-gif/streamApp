import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Connexion from './Connexion';
import Inscription from './Inscription';
const PublicRoute = () => {
    return (
        <Routes>
            <Route element={<Layout/> }>
                <Route path='/inscription' element={<Inscription/>} />
                <Route path='/connexion' element={<Connexion/>} />
            </Route>
        </Routes> 
    );
};

export default PublicRoute;