import React from 'react';
import NavBar from '../../Components/Navbar';
import Details from '../../Components/Details';
import Video from '../../Components/Video';
import Comments from '../../Components/Comments';

const Streams = () => {
    return (
        <section className='streams'>
            <NavBar/>
            <Details/>
            <Video/>
            <Comments/>
        </section>
    );
};

export default Streams;