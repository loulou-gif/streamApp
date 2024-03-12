import React, { useEffect, useState } from 'react';
// import { Aminiatures } from '../../Data/Aminiatures';
import { Link } from 'react-router-dom';
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever, MdAdd } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import '../../Assets/Css/styles.css'
import axios from 'axios';


const Animes = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/streams/')
            setData(response.data)
        }catch (error){
            console.error('there\'s an error')
        }
    }

    useEffect(() => {
        getData()
    }, [])
    // let navigate = useNavigate()
    
    // const UpdateUrl = (id) => {
    //     navigate("../update/"+id)
    // }
    // const EditUrl = () => {
    //     navigate("../edit")
    // }

    return (
        <section className='box-anime flex justify-center items-center'>
          <div className=' w-8/12  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center'>
            {data.map((d) => (
                <div key={d.id} className='mini-box rounded-lg  h-[300px] w-[200px] mb-10 cursor-pointer' style={{
                    backgroundImage:`url(${d.banner})`,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center',
                    // height:'35vh'
                }}>
                {/* <div className='overlay'></div> */}
                    <div className='flex justify-evenly  -mb-10 w-full'>
                        <button className='h-10 w-10 bg-red-500 duration-150 hover:bg-red-800 text-white text-3xl cursor-pointer rounded-xl flex items-center justify-center'><MdDeleteForever/> </button>
                        <Link to={`../update/${d.id}`} className='h-10 w-10 bg-blue-500 duration-150 hover:bg-blue-800 text-white text-2xl rounded-xl cursor-pointer flex items-center justify-center'><GrUpdate/></Link>
                        <Link to={`../edit`}  className='h-10 w-10 bg-green-500 duration-150 hover:bg-green-800 text-white text-3xl rounded-xl cursor-pointer flex items-center justify-center'><MdAdd/></Link>
                    </div>
                <Link to={`../admin-stream/${d.id}`}>
                    <div className=''>
                        <div className='play h-[275px] w-full flex items-center justify-center  duration-300 hover:duration-400 '>
                            <FaCirclePlay className='icone-play text-4xl text-white'/>
                        </div>
                        <div className='title w-full font-bold flex rounded-b-lg  text-white bg-blue-900 justify-evenly'>
                            <p style={{ fontSize:'16px'}}>SAISON:{d.season} </p>
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