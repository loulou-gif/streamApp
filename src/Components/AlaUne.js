import React from 'react';
import Slider from "react-slick"

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
            <div className=' w-8/12 bg-black h-[450px] rounded-xl'>
                <Slider {...settings} >
                    <div className=''>
                        <div className=''>
                            <div className='' style={{
                                backgroundImage:``,
                                backgroundSize:'',
                                backgroundPosition:'',
                                backgroundRepeat:'',
                                height:'',
                            }}></div>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className='filtre w-2/12  rounded-xl bg-white h-[450px]'></div>
        </section>
    );
};

export default AlaUne;