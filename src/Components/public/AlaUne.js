import React, { useEffect, useState } from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Slide } from '../../Data/Slide';
import axios from 'axios';

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

    const [news, setNews] = useState([]); // Initialiser avec un tableau vide pour stocker les nouvelles

    useEffect(() => {
        // Utiliser une fonction asynchrone pour effectuer la requête GET
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/news/');
                setNews(response.data); // Mettre à jour l'état avec les données récupérées
                console.log('Tout est ok', response);
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des données :', error);
            }
        };

        fetchNews(); // Appeler la fonction fetchNews dans useEffect
    }, []); // Utiliser un tableau vide comme dépendance pour s'assurer que cette requête est effectuée une seule fois lors du montage du composant

    return (
        <section className='a-la-une  flex justify-evenly items-end h-full '>
            <div className=' w-8/12  h-[450px] rounded-xl'>
                <Slider {...settings} >
                     {news.map((d) => ( // Utiliser le tableau news pour afficher les nouvelles
                    <div key={d.id} className="hover:shadow-1xl m-5 w-[800px] h-[430px] rounded-xl">
                        <div className="">
                            <div className="flex justify-center items-center w-[98%] h-[430px] border-black  "style={{  
                                backgroundImage: `url(${d.image})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                // height: '100vh',
                                // width:'200vh',
                                borderRadius:'10px',
                                }}>
                                
                                <div className='text-left  text-white w-9/12 '>
                                    <h1 className='text-3xl font-bold text-white text-left ' >{d.name}</h1>
                                    <p className='text-2xl '>{d.description}</p>
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
