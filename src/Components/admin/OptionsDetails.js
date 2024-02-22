import React from 'react';
import details from '../../Assets/img/details.png'
import derriere from '../../Assets/img/vignette6.png'
// import { GrUpdate } from "react-icons/gr";
// import { MdDeleteForever, MdAdd } from "react-icons/md";

const Deatails = () => {
    return (
        <section className='details flex justify-evenly items-center h-[400px] w-full'>
            {/* <div className='flex justify-evenly -mb-16 w-2/12'>
                <div className='h-10 w-10 bg-red-500 text-white text-3xl cursor-pointer rounded-xl flex items-center justify-center'><MdDeleteForever/> </div>
                <div className='h-10 w-10 bg-blue-500 text-white text-2xl rounded-xl cursor-pointer flex items-center justify-center'><GrUpdate/></div>
                <div className='h-10 w-10 bg-green-500 text-white text-3xl rounded-xl cursor-pointer flex items-center justify-center'><MdAdd/></div>
            </div> */}
            <div className='flex justify-evenly items-center w-9/12 h-[350px] bg-white' style={{
                backgroundImage:`url(${derriere})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center'

            }}>
                <img src={details} alt='' className='w-2/12 h-[290px] '/>
                <div className='synopsys text-white text-left w-7/12 p-14 h-[290px] '>
                    <h2 className='text-4xl font-bold pb-5'>Description</h2>
                    <p className='text-xl italic'> Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem <br/>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem <br/> Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem     </p>
                    <div className=' w-2/12 h-[290px] flex '>
                        <p className='p-5 text-white text-left font-bold text-2xl'>EPISODE:</p>
                        <p className='p-5 text-white text-left font-bold text-2xl'>SAISON:</p>
                        <p className='p-5 text-white text-left font-bold text-2xl'>LICENCE:</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Deatails;