import React from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from '../../Data/Slide';

const AlaUne = () => {
    var settings ={
        dats: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <section className='a-la-une  flex justify-evenly items-end h-full '>
            <div className=' w-8/12  h-[450px] rounded-xl'>
                <Slider {...settings} >
                     {Slide.map((d) => (
                    <div className="hover:shadow-1xl m-5 w-[800px] h-[430px] rounded-xl">
                        <div className="">
                            <div className="flex justify-center items-center w-[98%] h-[430px] border-black  "style={{  
                                backgroundImage: `url(${d.Img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                // height: '100vh',
                                // width:'200vh',
                                borderRadius:'10px',
                                }}>
                                
                                <div className='text-left  text-white w-9/12 '>
                                    <h1 className='text-3xl font-bold text-white text-left ' >Titre de l'anime</h1>
                                    <p className='text-2xl '>Nouvelle anime diponible saison bla Nouvelle anime diponible saison bla Nouvelle  anime diponible saison bla Nouvelle anime diponible saison bla</p>
                                </div>
                            
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