import React from 'react';
import NavBar from '../../Components/Navbar';
import Details from '../../Components/Details';
import Video from '../../Components/Video';
import Comments from '../../Components/Comments';
import Footer from '../../Components/Footer';

const Streams = () => {
    return (
        <section className='streams'>
            <NavBar/>
            <Details/>
            <Video/>
            <Comments/>
            <Footer/>
        </section>
    );
};

export default Streams;