import React from 'react';
import { Miniatures } from '../Data/Miniatures';
import { Link } from 'react-router-dom';


const Animes = () => {
    return (
        <section className='box-anime flex justify-center items-center'>
          <div className='flex w-10/12 flex-wrap justify-evenly items-center'>
          {Miniatures.map((d) => (
             <div key={d.id} className='mini-box rounded-lg  h-[300px] w-[250px] mb-10 cursor-pointer' style={{
                backgroundImage:`url(${d.image})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                // height:'35vh'
            }}>
            {/* <div className='overlay'></div> */}
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