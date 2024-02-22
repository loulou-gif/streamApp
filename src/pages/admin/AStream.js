import React from 'react';
import NavBar from '../../Components/admin/Navbar';
import OptionsDetails from '../../Components/admin/OptionsDetails';
import Video from '../../Components/Video';
import Subjections from '../../Components/Subjections';
import Footer from '../../Components/Footer';

const AStream = () => {
    return (
        <div>
            <NavBar/>
            <OptionsDetails/>
            <Video/>
            <Subjections/>
            <Footer/>
        </div>
    );
};

export default AStream;