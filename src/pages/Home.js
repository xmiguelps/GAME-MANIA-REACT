import Item from "../components/Item";
import Header from "../components/Header"
import Footer from "../components/Footer"

import { useEffect } from "react";

function Home() {

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
        <Header />
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
                    <Item src="assets/imgs/destaques/notebook-gamer.png" name="Notebook Gamer" price="7.599" />
                    <Item src="assets/imgs/destaques/monitor-gamer.png" name="Monitor Gamer" price="966,99" />
                    <Item src="assets/imgs/destaques/rtx5070.png" name="RTX 5070" price="5.400" />
                    <Item src="assets/imgs/destaques/gabinet-gamer.png" name="Gabinet Gamer" price="759,99" />
                    <Item src="assets/imgs/destaques/galaxy-s24.png" name="Galaxy S24" price="5000" />
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
                        <Item src="assets/imgs/produtos/cadeira-gamer-blue.webp" name="Cadeira Gamer Azul" price="579,00" />
                        <Item src="assets/imgs/produtos/cooler.jpg" name="Cooler RGB" price="299,99" />
                        <Item src="assets/imgs/produtos/headset-gamer-white.jpg" name="Headset Gamer Branco" price="768,99" />
                        <Item src="assets/imgs/produtos/monitor-gamer-SF.webp" name="Monitor Gamer SF" price="899,00" />
                        <Item src="assets/imgs/produtos/notebook-acer.jpg" name="Notebook Acer" price="3299,00" />
                        <Item src="assets/imgs/produtos/mouse-gamer.jpg" name="Mouse Gamer" price="157,00" />
                        <Item src="assets/imgs/produtos/processador-AMD.jpg" name="Processador AMD" price="580,00" />
                        <Item src="assets/imgs/produtos/memoria-ram-16gb.jpg" name="Memoria ram 16GB" price="241,00" />
                        <Item src="assets/imgs/produtos/teclado-gamer-RGB.jpg" name="Teclado Gamer RGB" price="468,99" />
                        <Item src="assets/imgs/produtos/water-coller.jpg" name="Water Coller" price="459,00" />
                        <Item src="assets/imgs/produtos/mesa-gamer-RGB.jpg" name="Mesa Gamer RGB" price="541,99" />
                        <Item src="assets/imgs/produtos/cadeira-gamer-white.jpg" name="Cadeira Gamer Branca" price="542,00" />
                        <Item src="assets/imgs/produtos/headset-gamer-black.jpg" name="Headset Gamer Preto" price="637,99" />
                        <Item src="assets/imgs/produtos/memoria-ram-8gb.jpg" name="Memoria ram 8GB" price="159,00" />
                        <Item src="assets/imgs/produtos/mesa-gamer.jpg" name="Mesa Gamer" price="387,00" />
                        <Item src="assets/imgs/produtos/teclado-gamer.jpg" name="Teclado gamer" price="411,00" />
                        <Item src="assets/imgs/produtos/galaxy-zflip.webp" name="Galaxy Z Flip" price="4399,00" />
                        <Item src="assets/imgs/produtos/iphone-15.webp" name="Iphone 15" price="3470,99" />
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