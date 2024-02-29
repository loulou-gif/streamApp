import React, { useState } from 'react';
import '../../Assets/Css/styles.css'
import { Link } from 'react-router-dom';
import img from '../../Assets/img/Rectangle 133.png'
import axios from 'axios';

const Connexion = () => {
    const [sign, setSign] = useState({
        username:"",
        email:"",
        password:"",
    })

    const handleInputChange = (event) =>{
        const {name,value} = event.target;
        setSign({ ...sign, [name]: value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        axios.post("http://localhost:5000/user", sign)
        .then(response =>{
            console.log('user create succesfully', response.data);
            console.log(sign)
            setSign({
              username:"",
              email:"",
              password:"",
              // ... réinitialisez d'autres champs si nécessaire
          });
        })
        .catch(error => {
            console.error("ERROR: Can't create user", error)
            console.log(sign)
        })
    }
    

    return (
        <section className='flex'>
            <div className='img w-4/5 bg-blue-500 h-screen'><img alt='' src={img} className='w-full h-full'/></div>
            <div className='flex justify-center items-center pt-10  w-2/5'>
                <div className='form flex items-center h-[605px]  flex-col'>
                    <div className='circle rounded-full  h-[150px] w-[150px] bg-blue-300'></div>
                    <form className='connexion-form flex-col  m-10 w-[450px]' onSubmit={handleSubmit}>
                    <h3>Pas de compte?<Link to='/inscription' className='link'> S'inscrire</Link> </h3>
                        <input type='text' className='mt-5 mb-5 pl-5 p-2 h-[60px] rounded-xl' placeholder="Nom d'utilisateur" onChange={handleInputChange}/>
                        <input type='password' className=' h-[60px] w-[342]  mb-5 pl-5 p-2 rounded-xl' placeholder='Mot de passe' />
                        <button className='boutton bg-blue-700 text-white rounded-xl h-[60px] w-[342] ' >Se connecter</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Connexion;