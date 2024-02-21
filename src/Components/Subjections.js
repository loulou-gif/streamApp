import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import first from '../Assets/img/7825048.jpg'
import second from '../Assets/img/7825048.jpg'
import third from '../Assets/img/7825048.jpg'
import fourth from '../Assets/img/7825048.jpg'
import firth from '../Assets/img/7825048.jpg'
// import sixth from '../Assets/Img/mokup6.jpg'

const Subjection = () =>{
    const data = [
        {
            image: first,
            Link:"",
            licence:'VOSTFR',
            episode:'01',
            link:'/streams',
            name:'Solo Leveling',
            
        },
        {
            image: second,
            Link:"",
            licence:'VOSTFR',
            episode:'01',
            link:'/streams',
            name:'Solo Leveling',
        },
        {
            image: third, 
            Link:"",
            licence:'VOSTFR',
            episode:'01',
            link:'/streams',
            name:'Solo Leveling',
        },
        {
            image: fourth,
            Link:"",
            licence:'VOSTFR',
            episode:'01',
            link:'/streams',
            name:'Solo Leveling',
        },
        {
            image:firth,
            Link:"titre5",
            licence:'VOSTFR',
            episode:'01',
            link:'/streams',
            name:'Solo Leveling',
        },
        // {
        //     image:sixth,
        //     Link:"titre6",
            
        // },
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 1
      };
    return(
        <section id="real-sect" className=" ">
            {/* <h3 className="text-4xl pt-10">Réalisations & Certifications</h3> */}
            <div className="flex justify-center -mt-20 mb-20"> 
                <div className="w-9/12 h-2/5 bg-white ">
                <Slider {...settings}>
                    {data.map((d) => (
                    <div className="hover:shadow-1xl m-5 h-[290px] rounded-xl">
                        <div className="">
                            <div className="flex justify-center items-center border-black "style={{  
                                backgroundImage: `url(${d.image})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '30vh',
                                width:'25vh',
                                borderRadius:'10px'
                                }}>
                               <div className='title w-full font-bold flex rounded-b-lg text-white bg-blue-900 mt-72 justify-evenly'>
                                    <p>{d.name} </p>
                                    <p>{d.licence} </p>
                                    <p>EP: {d.episode} </p>
                                </div> 
                            </div>
                        </div>
                    </div>                
                    ))}  
                </Slider>
                </div>
                     
            </div>
            
        </section>
    )
}

export default Subjection