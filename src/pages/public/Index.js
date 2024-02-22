import React from 'react';
import NavBar from '../../Components/public/Navbar';
import AlaUne from '../../Components/public/AlaUne';
import Animes from '../../Components/public/Animes';
import Footer from '../../Components/Footer';
// import Inscription from './Inscription';

const Index = () => {
    return (
        <div>
            <NavBar/>
            <AlaUne />
            <Animes/>
            <Footer/>
        </div>
    );
};

export default Index;