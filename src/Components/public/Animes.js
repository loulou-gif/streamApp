import React from 'react';
import { Miniatures } from '../../Data/Miniatures';
import { Link } from 'react-router-dom';
import { FaCirclePlay } from "react-icons/fa6";


const Animes = () => {
    return (
        <section className='box-anime flex justify-center items-center'>
          <div className=' w-8/12  grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-center'>
            {Miniatures.map((d) => (
                <div key={d.id} className='mini-box rounded-lg  h-[300px] w-[200px] mb-10 cursor-pointer' style={{
                    backgroundImage:`url(${d.image})`,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center',
                    // height:'35vh'
                }}>
                {/* <div className='overlay'></div> */}
                <Link to={d.link}>
                    <div className=''>
                        <div className='play h-[275px] w-full flex items-center justify-center  duration-300 hover:duration-400 '>
                            <FaCirclePlay className='icone-play text-4xl text-white'/>
                        </div>
                        <div className='title w-full font-bold flex rounded-b-lg text-1xl  text-white bg-blue-900 justify-evenly'>
                            <p style={{ fontSize:'16px'}}>SAISON: {d.saison} </p>
                            <p style={{ fontSize:'16px'}}>{d.licence} </p>
                            <p style={{ fontSize:'16px'}}>EP: {d.episode} </p>
                        </div>
                    </div>
                </Link>
                
            </div> 
           ))}
          </div>
        </section>
    );
};

export default Animes; 