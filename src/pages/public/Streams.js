import React from 'react';
import NavBar from '../../Components/Navbar';
import Details from '../../Components/public/Details';
import Video from '../../Components/public/Video';
// import Comments from '../../Components/Comments';
import Footer from '../../Components/Footer';
import Subjection from '../../Components/public/Subjections';

const Streams = () => {
    return (
        <section className='streams'>
            <NavBar/>
            <Details/>
            <Video/>
            <Subjection/>
            {/* <Comments/> */}
            <Footer/>
        </section>
    );
};

export default Streams;