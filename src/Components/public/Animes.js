import React, { useEffect, useState } from 'react';
// import { Miniatures } from '../../Data/Miniatures';
import { Link } from 'react-router-dom';
import { FaCirclePlay } from "react-icons/fa6";
import axios from 'axios';


const Animes = () => {

    const [streams, setStreams] = useState([])
    // const {id} = useParams()
    // const navigate = useNavigate()
    // const change = () => {
    //     console.log('ok')
    //     navigate('/steams')
    // }
    useEffect(() => {
        // Utiliser une fonction asynchrone pour effectuer la requête GET
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/streams/');
                setStreams(response.data); // Mettre à jour l'état avec les données récupérées
                console.log('Tout est ok', response);
            } catch (error) {
                console.error('Une erreur s\'est produite lors de la récupération des données :', error);
            }
        };

        fetchNews(); // Appeler la fonction fetchNews dans useEffect
    }, []); // Utiliser un tableau vide comme dépendance pour s'assurer que cette requête est effectuée une seule fois lors du montage du composant


    return (
        <section className='box-anime flex justify-center items-center'>
          <div className=' w-8/12  grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-center'>
            {streams.map((d) => (
                <div key={d.id} className='mini-box rounded-lg  h-[300px] w-[200px] mb-10 cursor-pointer' style={{
                    backgroundImage:`url(${d.banner})`,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center', 
                    // height:'35vh'
                }}>
                {/* <div className='overlay'></div> */}
                <Link to= {`streams/${d.id}`} >
                    <div className=''>
                        <div className='play h-[275px] w-full flex items-center justify-center  duration-300 hover:duration-400 '>
                            <FaCirclePlay className='icone-play text-4xl text-white'/>
                        </div>
                        <div className='title w-full font-bold flex rounded-b-lg text-1xl  text-white bg-blue-900 justify-evenly'>
                            <p style={{ fontSize:'16px'}}>SAISON: {d.season} </p>
                            <p style={{ fontSize:'16px'}}>{d.licence} </p>
                            <p style={{ fontSize:'16px'}}>EP: {d.episode} </p>
                        </div>
                    </div>
                </Link>
                
            </div> 
           ))}
          </div>
        </section>
    );
};

export default Animes; 