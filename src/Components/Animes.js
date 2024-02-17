import React from 'react';
import { Miniatures } from '../Data/Miniatures';


const Animes = () => {
    return (
        <section className='box-anime  flex flex-wrap justify-evenly items-center pb-10'>
           {Miniatures.map((d) => (
             <div key={d.id} className='mini-box  h-[250px] w-[250px] mb-10' style={{
                backgroundImage:`url(${d.image})`,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                height:'35vh'
            }}>
             <div className='title w-full  flex text-white bg-blue-900 justify-evenly'>
                 <p>Nom: {d.name} </p>
                 <p>{d.licence} </p>
                 <p>EP: {d.episode} </p>
             </div>
         </div> 
           ))}
        </section>
    );
};

export default Animes; 