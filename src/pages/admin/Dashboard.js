import React from 'react';
// import Connexion from '../../Components/Connexion';
import NavBar from '../../Components/admin/Navbar'
import AdminPub from '../../Components/admin/AdminPub'
import OptionAnime from '../../Components/admin/OptionsAnime'
import Footer from '../../Components/Footer'

const Dashboard = () => {
    return (
        <div>
            <NavBar/>
            <AdminPub/>
            <OptionAnime/>
            <Footer/>
        </div>
    );
};

export default Dashboard;