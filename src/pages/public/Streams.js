import React from 'react';
import NavBar from '../../Components/Navbar';
import Details from '../../Components/Details';
import Video from '../../Components/Video';
import Comments from '../../Components/Comments';
import Footer from '../../Components/Footer';
import Subjection from '../../Components/Subjections';

const Streams = () => {
    return (
        <section className='streams'>
            <NavBar/>
            <Details/>
            <Video/>
            <Subjection/>
            <Comments/>
            <Footer/>
        </section>
    );
};

export default Streams;