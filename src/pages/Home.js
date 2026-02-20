import Item from "../components/Item";
import Header from "../components/Header"
import Footer from "../components/Footer"
import produtos from "../contexts.js/produtos";

import { useEffect } from "react";

function Home({count, setCount, cartItems, setCartItems}) {

    useEffect(() => {

        const searchButton = document.querySelector('.search-button');
        const searchinput = document.querySelector('.search');
        const galerias = document.querySelectorAll('.box-galeria');

        if (searchButton) {
            searchButton.addEventListener('click', (event) => {
                event.preventDefault();
                if (searchinput &&  galerias) {
                    const searchTerm = searchinput.value.toLowerCase();
                    galerias.forEach(galeria => {
                        const products = galeria.querySelectorAll('.box-products');
                        products.forEach(product => {
                            const productName = product.querySelector('.title-products').   textContent.toLocaleLowerCase();
                            if (productName.includes(searchTerm)) {
                                product.style.visibility = 'visible';
                                product.style.position = 'static';
                            } else {
                                product.style.visibility = 'hidden';
                                product.style.position = 'absolute';
                            }
                        });
                    }); 
                };
            });
        }

    }, []);

    return (
        <>
        <Header count={count}/>
        <main>
        <section>
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="assets/imgs/banners/banner-1.jpg" className="d-block w-100" alt="banner de destaques"/>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/imgs/banners/banner-2.jpg" className="d-block w-100" alt="banner de destaques"/>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/imgs/banners/banner-3.webp" className="d-block w-100" alt="banner de destaques"/>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/imgs/banners/banner-4.jpg" className="d-block w-100" alt="banner de destaques"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
        <section className="d-flex flex-column">
            <h2 className="title-galerias">
                <img src="assets/imgs/icons/destaques.png" alt="icone de novidades"/> Destaques <img src="assets/imgs/icons/seta-direita.png" alt="seta para direita"/>
            </h2>
            <p className="text-galerias">Veja aqui os produtos mais vendidos em nossa loja:</p>
            <div className="d-flex justify-content-center">
                <article className="box-galeria-destaques mt-4 me-3 mb-0 ms-3 d-flex justify-content-evenly flex-wrap w-auto container-fluid">
                    {produtos.produtos_destaques.map(produto => (
                        <Item key={produto.id} 
                        name={produto.name} 
                        price={produto.price} 
                        src={produto.src} 
                        count={count} 
                        setCount={setCount}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        id={produto.id}
                        />
                    ))}
                </article>
            </div>
        </section>
        <section>
            <h2 className="title-galerias">
                <img src="assets/imgs/icons/novidades.png" alt="icone de novidades"/> Novidades <img src="assets/imgs/icons/seta-direita.png" alt="seta para direita"/>
            </h2>
            <p className="text-galerias">Veja aqui os produtos recentementes adicionados á nossa loja:</p>
            <article className="box-novidades flex-wrap justify-content-center align-items-center d-flex container-fluid">
                <img className="d-block banner-novidades" src="assets/imgs/banners/banner-novidades-1.jpg" alt="banner de novidades"/>
                <img className="d-block banner-novidades" src="assets/imgs/banners/banner-novidades-2.jpg" alt="banner de novidades"/>
                <img className="d-block banner-novidades" src="assets/imgs/banners/banner-novidades-3.jpg" alt="banner de novdidades"/>
            </article>
        </section>
        <section>
            <div className="d-flex flex-column">
                <h2 className="title-galerias">
                    <img src="assets/imgs/icons/products.png" alt="icone de novidades"/> Galeria de produtos <img src="assets/imgs/icons/seta-direita.png" alt="seta para direita"/>
                </h2>
                <p className="text-galerias">Veja aqui diversos produtos que a Game Mania pode te oferecer:</p>
                <div className="d-flex justify-content-center">
                    <article className="box-galeria container-fluid">
                        {produtos.produtos_galeria.map(produto => (
                            <Item key={produto.id} 
                            name={produto.name} 
                            price={produto.price} 
                            src={produto.src}
                            count={count} 
                            setCount={setCount}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            id={produto.id}
                            />
                        ))}
                    </article>
                </div>
            </div>
        </section>
        <Footer />
    </main>
    </>
    )       
}

export default Home;