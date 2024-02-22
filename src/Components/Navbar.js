import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="main flex justify-evenly items-center">
            <Link to="/"><div className="text-white">Logo</div></Link>
            <input className="search" type="text" placeholder="Recherche..." />
            <button className="btn-search ">RECHERCHE</button>
            <button className="btn-connexion "><Link to='/connexion'>CONNEXION</Link></button>
        </nav>
    )
}

export default NavBar