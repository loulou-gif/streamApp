import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Video = () => {
    return (
        <section className='flex justify-center items-center h-[850px] mb-32 '>
            <div className='bg-white w-9/12 h-[750px] '>
                <div className='search-ep flex items-center bg-slate-400 w-full h-16 p-5'>
                    <button className='border h-10 bg-gray-200 text-gray-500 text-3xl outline-none rounded-l-lg'><IoIosArrowBack/></button>
                    <select className='episode m-3 pl-5 w-[20rem] shadow-inner h-10  outline-none border-spacing-3'>
                        <option>Episode 1</option>
                        <option>Episode 2</option>
                        <option>Episode 3</option>
                        <option>Episode 4</option>
                    </select>
                    <button className='border  h-10 flex items-center bg-gray-200 text-gray-500 p-2  text-3xl rounded-r-lg'> Suivant <IoIosArrowForward className='mt-1 font-extrabold'/></button>
                </div>
                <div className='video-content  w-full h-[622px]'></div>
                <div className='search-ep  bg-gray-400 w-full h-16'></div>
            </div>
        </section>
    );
};

export default Video;