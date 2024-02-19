import React from 'react';

import '../../Assets/Css/styles.css'
import { Link } from 'react-router-dom';
import img from '../../Assets/img/Rectangle 123.png'

const Inscription = () => {
    return (
        <section className='sect-inscription flex'>
        <div className='img w-3/5  h-screen' style={{
                backgroundImage:`url(${img})`,
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
            }}></div>
        <div className='flex justify-center items-center pt-10  w-2/5'>
            <div className='form flex items-center h-[605px]  flex-col'>
                <div className='circle rounded-full  h-[150px] w-[150px] bg-blue-300'></div>
                <form className='connexion-form flex-col  m-10 w-10/12'>
                <h3>Déjà un compte?<Link to='/connexion' className='link'> Se connecter</Link> </h3>
                    <input type='text' name='username' className='mt-5 pl-5 p-2 rounded-xl' placeholder="Nom d'utilisateur"/>
                    <input type='email' name='email' className='mt-5 mb-5 pl-5 p-2 rounded-xl' placeholder="Email"/>
                    <input type='password' className=' h-[40px] w-[342]  mb-5 pl-5 p-2 rounded-xl' placeholder='Mot de passe'/>
                    <button className='boutton bg-blue-700 text-white rounded-xl h-[40px] w-[342] ' >S'inscrire</button>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Inscription;