import Footer from "./components/Footer";
import Header from "./components/Header";
import Carrinho from "./pages/Carrinho";
import Favoritos from "./pages/Favoritos";
import Contato from "./pages/Contato";
import Login from "./pages/login";

function App() {
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
                    <div className="box-products">
                        <h3 className="title-products">Notebook Gamer</h3>
                        <img className="products" src="assets/imgs/destaques/notebook-gamer.png" alt="notebook gamer"/>
                        <br/>
                        <div className="box-text-products">
                            <p className="price">R$7.599</p>
                            <div>
                                <input className="comprar" id="comprar1" type="button" value="Comprar"/>
                                <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="box-products">
                        <h3 className="title-products">Monitor Gamer</h3>
                        <img className="products" src="assets/imgs/destaques/monitor-gamer.png" alt="monitor gamer"/>
                        <br/>
                        <div className="box-text-products">
                            <p className="price">R$966,99</p>
                            <div>
                                <input className="comprar" id="comprar2" type="button" value="Comprar"/>
                                <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="box-products">
                        <h3 className="title-products">RTX 5070</h3>
                        <img className="products" src="assets/imgs/destaques/rtx5070.png" alt="placa de video rtx 5070"/>
                        <br/>
                        <div className="box-text-products">
                            <p className="price">R$5.400</p>
                            <div>
                                <input className="comprar" id="comprar3" type="button" value="Comprar"/>
                                <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="box-products">
                        <h3 className="title-products">Gabinet Gamer</h3>
                        <img className="products" src="assets/imgs/destaques/gabinet-gamer.png" alt="gabinet gamer"/>
                        <br/>
                        <div className="box-text-products">
                            <p className="price">R$759,99</p>
                            <div>
                                <input className="comprar" id="comprar4" type="button" value="Comprar"/>
                                <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="box-products">
                        <h3 className="title-products">Galaxy S24</h3>
                        <img className="products" src="assets/imgs/destaques/galaxy-s24.png" alt="celular galaxy s24"/>
                        <br/>
                        <div className="box-text-products">
                            <p className="price">R$5000</p>
                            <div>
                                <input className="comprar" id="comprar5" type="button" value="Comprar"/>
                                <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" data-alt="assets/imgs/icons/favorite-button-hover.png" alt="botão de favoritar"/></button>
                            </div>
                        </div>
                    </div>
                    <div className="box-products">
                        <h3 className="title-products">PC Gamer Completo</h3>
                        <img className="products" src="assets/imgs/destaques/pc-gamer.png" alt="Computador gamer completo"/>
                        <br/>
                        <div className="box-text-products">
                            <p className="price">R$7599</p>
                            <div>
                                <input className="comprar" id="comprar6" type="button" value="Comprar"/>
                                <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                            </div>
                        </div>
                    </div>
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
                        <div className="box-products">
                            <h3 className="title-products">Cadeira Gamer Azul</h3>
                            <img className="products" src="assets/imgs/produtos/cadeira-gamer-blue.webp" alt="cadeira gamer azul"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$579,00</p>
                                <div>
                                    <input className="comprar" id="comprar7" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Cooler RGB</h3>
                            <img className="products" src="assets/imgs/produtos/cooler.jpg" alt="cooler para processador"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$299,99</p>
                                <div>
                                    <input className="comprar" id="comprar8" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Headset Gamer Branco</h3>
                            <img className="products" src="assets/imgs/produtos/headset-gamer-white.jpg" alt="headset gamer branco"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$768,99</p>
                                <div>
                                    <input className="comprar" id="comprar9" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Monitor Gamer SF</h3>
                            <img className="products" src="assets/imgs/produtos/monitor-gamer-SF.webp" alt="Monitor Gamer da SF"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$899,00</p>
                                <div>
                                    <input className="comprar" id="comprar10" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Notebook Acer</h3>
                            <img className="products" src="assets/imgs/produtos/notebook-acer.jpg" alt="notebook acer"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$3299,00</p>
                                <div>
                                    <input className="comprar" id="comprar11" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Mouse Gamer</h3>
                            <img className="products" src="assets/imgs/produtos/mouse-gamer.jpg" alt="Mouse Gamer"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$157,00</p>
                                <div>
                                    <input className="comprar" id="comprar12" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Processador AMD</h3>
                            <img className="products" src="assets/imgs/produtos/processador-AMD.jpg" alt="Processador AMD"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$580,00</p>
                                <div>
                                    <input className="comprar" id="comprar13" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Memoria ram 16GB</h3>
                            <img className="products" src="assets/imgs/produtos/memoria-ram-16gb.jpg" alt="Memoria ram para computador 16gb"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$241,00</p>
                                <div>
                                    <input className="comprar" id="comprar14" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Teclado Gamer RGB</h3>
                            <img className="products" src="assets/imgs/produtos/teclado-gamer-RGB.jpg" alt="Teclado gamer RGB"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$468,99</p>
                                <div>
                                    <input className="comprar" id="comprar15" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Water Coller</h3>
                            <img className="products" src="assets/imgs/produtos/water-coller.jpg" alt="water coller para processador"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$459,00</p>
                                <div>
                                    <input className="comprar" id="comprar16" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Mesa Gamer RGB</h3>
                            <img className="products" src="assets/imgs/produtos/mesa-gamer-RGB.jpg" alt="mesa gamer RGB"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$541,99</p>
                                <div>
                                    <input className="comprar" id="comprar17" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Cadeira Gamer Branca</h3>
                            <img className="products" src="assets/imgs/produtos/cadeira-gamer-white.jpg" alt="cadeira gamer branca"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$542,00</p>
                                <div>
                                    <input className="comprar" id="comprar18" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Headset Gamer Preto</h3>
                            <img className="products" src="assets/imgs/produtos/headset-gamer-black.jpg" alt="Headset Gamer Preto"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$637,99</p>
                                <div>
                                    <input className="comprar" id="comprar19" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Memoria ram 8GB</h3>
                            <img className="products" src="assets/imgs/produtos/memoria-ram-8gb.jpg" alt="memoria ram 8 giga bytes"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$159,00</p>
                                <div>
                                    <input className="comprar" id="comprar20" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Mesa Gamer</h3>
                            <img className="products" src="assets/imgs/produtos/mesa-gamer.jpg" alt="Mesa Gamer"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$387,00</p>
                                <div>
                                    <input className="comprar" id="comprar21" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Teclado gamer</h3>
                            <img className="products" src="assets/imgs/produtos/teclado-gamer.jpg" alt="teclado gamer estilo retro"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$411,00</p>
                                <div>
                                    <input className="comprar" id="comprar22" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Galaxy Z Flip</h3>
                            <img className="products" src="assets/imgs/produtos/galaxy-zflip.webp" alt="smartphone samsung galaxy z flip"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$4399,00</p>
                                <div>
                                    <input className="comprar" id="comprar23" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-products">
                            <h3 className="title-products">Iphone 15</h3>
                            <img className="products" src="assets/imgs/produtos/iphone-15.webp" alt="Iphone 15"/>
                            <br/>
                            <div className="box-text-products">
                                <p className="price">R$3470,99</p>
                                <div>
                                    <input className="comprar" id="comprar24" type="button" value="Comprar"/>
                                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>
    <Footer />
    </>
  )
}

export default App;
