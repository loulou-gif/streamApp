import React from 'react';
import { Aminiatures } from '../../Data/Aminiatures';
import { Link } from 'react-router-dom';
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever, MdAdd } from "react-icons/md";


const Animes = () => {
    return (
        <section className='box-anime flex justify-center items-center'>
          <div className=' w-10/12 border grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-center'>
            {Aminiatures.map((d) => (
                <div key={d.id} className='mini-box rounded-lg  h-[300px] w-[250px] mb-10 cursor-pointer' style={{
                    backgroundImage:`url(${d.image})`,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center',
                    // height:'35vh'
                }}>
                {/* <div className='overlay'></div> */}
                    <div className='flex justify-evenly -mb-10 w-full'>
                        <div className='h-10 w-10 bg-red-500 text-white text-3xl cursor-pointer rounded-xl flex items-center justify-center'><MdDeleteForever/> </div>
                        <div className='h-10 w-10 bg-blue-500 text-white text-2xl rounded-xl cursor-pointer flex items-center justify-center'><GrUpdate/></div>
                        <div className='h-10 w-10 bg-green-500 text-white text-3xl rounded-xl cursor-pointer flex items-center justify-center'><MdAdd/></div>
                    </div>
                <Link to={d.link}>
                    <div className='title w-full font-bold flex rounded-b-lg text-white bg-blue-900 mt-72 justify-evenly'>
                        <p>{d.name} </p>
                        <p>{d.licence} </p>
                        <p>EP: {d.episode} </p>
                    </div>
                </Link>
                
            </div> 
           ))}
          </div>
        </section>
    );
};

export default Animes; 