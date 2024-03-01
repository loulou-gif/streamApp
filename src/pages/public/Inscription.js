import React, { useState } from 'react';

import '../../Assets/Css/styles.css'
import { Link } from 'react-router-dom';
import img from '../../Assets/img/Rectangle 123.png'
import axios from 'axios';

const Inscription = () => {
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
        <section className='sect-inscription flex'>
        <div className='img w-4/5  h-screen'><img alt=''src={img} className='w-full h-full'/></div>
        <div className='flex justify-center items-center pt-10  w-2/5'>
            <div className='form flex items-center h-[605px]  flex-col'>
                <div className='circle rounded-full  h-[150px] w-[150px] bg-blue-300'></div>
                <form className='connexion-form flex-col  m-10 w-[450px]' onSubmit={handleSubmit}>
                <h3>Déjà un compte?<Link to='/connexion' className='link'> Se connecter</Link> </h3>
                    <input type='text' name='username' className='mt-5 pl-5 p-2 h-[60px] rounded-xl' placeholder="Nom d'utilisateur" onChange={handleInputChange}/>
                    <input type='email' name='email' className='mt-5 mb-5 pl-5 p-2 h-[60px] rounded-xl' placeholder="Email" onChange={handleInputChange}/>
                    <input type='password' name='password' className='h-[60px] w-[342]  mb-5 pl-5 p-2 rounded-xl' placeholder='Mot de passe' onChange={handleInputChange}/>
                    <button className='boutton bg-blue-700 text-white h-[60px] rounded-xl w-[342] duration-150 hover:bg-blue-900' >S'INSCRIRE</button>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Inscription;
