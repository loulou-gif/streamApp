import React from 'react';
import NavBar from '../../Components/admin/Navbar';
import Details from '../../Components/public/Details';
import Video from '../../Components/Video';
import Subjections from '../../Components/Subjections';
import Footer from '../../Components/Footer';

const AStream = () => {
    return (
        <div>
            <NavBar/>
            <Details/>
            <Video/>
            <Subjections/>
            <Footer/>
        </div>
    );
};

export default AStream;