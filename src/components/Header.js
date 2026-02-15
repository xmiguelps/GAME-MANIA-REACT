function Header() {
    return (
    <header className="d-flex align-items-center justify-content-between">
        <div className="m-3">
            <img src="assets/imgs/icons/logo-loja.png" alt="logo-loja"/>
        </div>
        <menu className="ps-0 w-100">
            <nav className="navbar navbar-expand-lg navbar-dark me-2 mt-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-evenly collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="box-search-and-buttons d-flex align-items-center">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                             <li className="nav-item">
                                <a className="login-button d-flex mt-1 nav-link active" aria-current="page" href="login.html" rel="nofollow" target="_self"><img src="assets/imgs/icons/login.png" alt="login icon"/><p className="p-1 m-0">Login</p></a>
                            </li>
                            <li className="nav-item">
                                <a className="favorite-button d-flex mt-2 me-1 nav-link active" aria-current="page" href="favorites.html" rel="nofollow" target="_self"><img src="assets/imgs/icons/heart.png" alt="favorites icon"/><p className="p-0 m-0 ms-1">Favoritos</p></a>
                            </li>
                            <li className="box-carrinho ps-1 nav-item">
                                <a className="carrinho nav-link" href="carrinho.html" rel="nofollow" target="_self">
                                    <div className="box-icon-img-carrinho d-flex">
                                        <div className="box-icon-carrinho">
                                            <img className="icon-carrinho" src="assets/imgs/icons/carrinho.png" alt="carrinho"/>
                                        </div>
                                        <div className="box-text-carrinho d-flex flex-column justify-content-center">
                                            <p className="p-0 m-0 text-carrinho">carrinho</p>
                                            <p className="p-0 m-0 text-carrinho"><span className="numero-produtos">0</span> produtos</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex box-search">
                            <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="search-button btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <ul className="box-contact navbar-nav mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <a className="nav-link box-contact-text" href="contatos.html" rel="nofollow" target="_self"> <img src="assets/imgs/icons/phone.png" alt="icone de telefone"/> Nos-Contate </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </menu>
    </header>
    )
}

export default Header