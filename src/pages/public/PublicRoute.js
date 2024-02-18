import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout, Connexion, Inscription, Index } from './route.js'
import Streams from './Streams.js';
const PublicRoute = () => {
    return (
        <Routes>
            <Route element={<Layout/> }>
                <Route index element={<Index/>} />
                <Route path='/inscription' element={<Inscription/>}/>
                <Route path='/connexion' element={<Connexion/>} />
                <Route path='/index' element={<Index/>} />
                <Route path='/streams' element={<Streams/>} />
            </Route>
        </Routes> 
    );
};

export default PublicRoute;