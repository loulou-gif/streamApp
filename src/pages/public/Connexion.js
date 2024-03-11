import React, { useState } from 'react';
import '../../Assets/Css/styles.css'
import { Link, useNavigate } from 'react-router-dom';
import img from '../../Assets/img/Rectangle 133.png'
// import axios from 'axios';

const Connexion = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const logIn = async (username, password) => {
        try {
            const response = await fetch('http://localhost:8000/api-auth/login/', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            if (response.ok) {
                navigate('/accueil');
            } else {
                // Traitez ici le cas où la connexion a échoué (par exemple, affichez un message d'erreur)
                console.log("La connexion a échoué");
            }

            setUsername('');
            setPassword('');
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await logIn(username, password);
    }
    
    

    return (
        <section className='flex'>
            <div className='img w-4/5 bg-blue-500 h-screen'><img alt='' src={img} className='w-full h-full'/></div>
            <div className='flex justify-center items-center pt-10  w-2/5'>
                <div className='form flex items-center h-[605px]  flex-col'>
                    <div className='circle rounded-full  h-[150px] w-[150px] bg-blue-300'></div>
                    <form className='connexion-form flex-col  m-10 w-[450px]' onSubmit={handleSubmit}>
                    <h3>Pas de compte?<Link to='/inscription' className='link'> S'inscrire</Link> </h3>
                        <input type='text' className='mt-5 mb-5 pl-5 p- h-[60px] rounded-xl' placeholder="Nom d'utilisateur"/>
                        <input type='password' className=' h-[60px] w-[342  mb-5 pl-5 p-2 rounded-xl' placeholder='Mot de passe' />
                        <button className='boutton bg-blue-700 text-white rounded-xl h-[60px] w-[342] duration-150 hover:bg-blue-900 ' >SE CONNECTER</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Connexion;