import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { BiLike, BiDislike  } from "react-icons/bi";
import vignette from '../Assets/img/vignette4.png'
import deo from '../Assets/img/solo.qt'
const Video = () => {
    return (
        <section className='flex justify-center items-center h-[850px]  '>
            <div className='bg-white w-9/12 h-[695px]  '>
                <div className='search-ep flex items-center bg-slate-400 w-full h-16 p-5'>
                    <button className='border border-slate-500 h-10 hover:bg-gray-300 duration-75 bg-gray-200 text-gray-500 text-3xl outline-none rounded-l-lg'><IoIosArrowBack/></button>
                    <select className='episode m-3 pl-5 w-[20rem] bg-gray-100 hover:bg-gray-200 duration-75 shadow-inner h-10  outline-none '>
                        <option>Episode 1</option>
                        <option>Episode 2</option>
                        <option>Episode 3</option>
                        <option>Episode 4</option>
                    </select>
                    <button className='border border-slate-500 hover:bg-gray-300 duration-75 h-10 flex items-center bg-gray-200 text-gray-500 p-2  text-3xl rounded-r-lg'> Suivant <IoIosArrowForward className='mt-1 font-extrabold'/></button>
                </div>
                <div  className='div-content flex justify-center items-center w-full h-[622px]'><video controls poster={vignette} src={deo} playsinline className='video-content mt-5 bg-black w-[1450px] h-[621px]'></video></div>
                {/* <div className='mention-ep flex mt-5  w-full h-16'>
                    <div className='like  hover:bg-green-500 duration-75 justify-center mb-5 bg-green-400 flex items-center  w-28 ml-5'><button className=' flex text-white text-2xl'><BiLike className='text-4xl '/>+999 </button> </div>
                    <div className='like w-14 text-center justify-center mb-5 hover:bg-red-500 duration-75 bg-red-400 flex items-center ml-5'><button className=' flex text-white text-2xl'><BiDislike  className='text-4xl'/></button> </div>
                </div> */}
            </div>
        </section>
    );
};

export default Video;