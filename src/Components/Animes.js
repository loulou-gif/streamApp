import React from 'react';
import { Miniatures } from '../Data/Miniatures';


const Animes = () => {
    return (
        <section className='box-anime flex justify-center items-center'>
          <div className='flex w-8/12 flex-wrap justify-evenly items-center'>
          {Miniatures.map((d) => (
             <div key={d.id} className='mini-box rounded-lg  h-[300px] w-[250px]  cursor-pointer' style={{
                backgroundImage:`url(${d.image})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                height:'35vh'
            }}>
            {/* <div className='overlay'></div> */}
             <div className='title w-full font-bold flex mt-2 rounded-b-lg text-white bg-blue-900 justify-evenly'>
                 <p>{d.name} </p>
                 <p>{d.licence} </p>
                 <p>EP: {d.episode} </p>
             </div>
         </div> 
           ))}
          </div>
        </section>
    );
};

export default Animes; 