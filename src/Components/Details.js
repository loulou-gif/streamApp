import React from 'react';
import details from '../Assets/img/details.png'
import derriere from '../Assets/img/vignette6.png'

const Deatails = () => {
    return (
        <section className='details flex justify-evenly items-center h-[400px] w-full'>
            <div className='flex justify-evenly items-center w-9/12 h-[350px] bg-white' style={{
                backgroundImage:`url(${derriere})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center'

            }}>
                <img src={details} alt='' className='bg-gray-300 w-2/12 h-[250px] '/>
                <div className='bg-gray-300 w-5/12 h-[250px] '></div>
                <div className='bg-gray-300 w-2/12 h-[250px] '></div>
            </div>
        </section>
    );
};

export default Deatails;