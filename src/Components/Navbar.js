const NavBar = () => {
    return(
        <nav className="main flex justify-evenly items-center">
            <div className="text-white">Logo</div>
            <input className="search" type="text" placeholder="Recherche..." />
            <button className="btn-search ">RECHERCHE</button>
            <button className="btn-connexion ">CONNEXION</button>
        </nav>
    )
}

export default NavBar