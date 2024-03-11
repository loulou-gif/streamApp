import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { useParams } from 'react-router-dom';

const Deatails = () => {

    const [detail, setDetail] = useState("")
    const {id} = useParams();

    const getDetails = async () => {
        const {data} = await axios.get(`http://127.0.0.1:8000/streams/${id}`)
        console.log(data)
        setDetail(data)
    }

    useEffect(() => {
        getDetails();
    }, [])

    const description = detail && detail.synopsys ? detail.synopsys.substring(0, 250) : '';

    return (
        <section className='details flex justify-evenly items-center h-[400px] w-full'>
            <div className='flex justify-evenly items-center w-9/12 h-[350px] bg-white' style={{
                backgroundImage:`url(${detail.banner})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition:'center'

            }}>
                <img src={detail.poster} alt='' style={{ position: 'center',}} className='w-2/12 h-[300px] '/>
                <div className='synopsys text-white  flex flex-col justify-around items-center  text-left w-7/12 p-14 h-[300px] '>
                    <div className='h-4/5 '>
                        <h2 className='text-3xl font-bold pb-2'> {detail.name} </h2>
                        <p className='text-xl italic' style={{fontSize:'18px'}} > {description}... </p>
                    </div>
                    <div className='border w-8/12 h-1/5 flex justify-center items-center'>
                        <p className='p-5 text-white text-left font-bold '>EPISODE: {detail.episode} </p>
                        <p className='p-5 text-white text-left font-bold '>SAISON: {detail.season} </p>
                        <p className='p-5 text-white text-left font-bold '>LICENCE: {detail.licence}</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Deatails;