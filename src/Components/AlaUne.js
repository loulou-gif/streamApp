import React from 'react';
import Slider from "react-slick"
import { Slide } from '../Data/Slide';

const AlaUne = () => {
    var settings ={
        dats: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className='a-la-une  flex justify-evenly items-center h-full '>
            <div className=' w-8/12  h-[450px] rounded-xl'>
                <Slider {...settings} >
                     {Slide.map((d) => (
                    <div className="hover:shadow-1xl m-5 w-[800px] h-[430px] rounded-xl">
                        <div className="">
                            <div className="flex justify-center items-center w-[1150px] h-[430px] border-black  "style={{  
                                backgroundImage: `url(${d.Img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                // height: '100vh',
                                // width:'200vh',
                                borderRadius:'10px',
                                }}>
                            
                            </div>
                        </div>
                    </div>                
                    ))}  
                </Slider>
            </div>
            <div className='filtre w-2/12  rounded-xl bg-white h-[450px]'></div>
        </section>
    );
};

export default AlaUne;