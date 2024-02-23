import React from 'react';
import details from '../../Assets/img/details.png'
import derriere from '../../Assets/img/vignette6.png'

const Deatails = () => {
    return (
        <section className='details flex justify-evenly items-center h-[400px] w-full'>
            <div className='flex justify-evenly items-center w-9/12 h-[350px] bg-white' style={{
                backgroundImage:`url(${derriere})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center'

            }}>
                <img src={details} alt='' className='w-2/12 h-[300px] '/>
                <div className='synopsys text-white  flex flex-col justify-around items-center  text-left w-7/12 p-14 h-[300px] '>
                    <div className='h-4/5 '>
                        <h2 className='text-3xl font-bold pb-2'>Description</h2>
                        <p className='text-xl italic' style={{fontSize:'18px'}} > Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem <br/>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
                    </div>
                    <div className='border w-8/12 h-1/5 flex items-center'>
                        <p className='p-5 text-white text-left font-bold '>EPISODE:</p>
                        <p className='p-5 text-white text-left font-bold '>SAISON:</p>
                        <p className='p-5 text-white text-left font-bold '>LICENCE:</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Deatails;