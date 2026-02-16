import Header from "../components/Header"
import Footer from "../components/Footer"

function Carrinho() {
    return (
    <main>
        <Header />
        <div className="d-flex flex-column">
            <h2 className="title-galerias">
                <img src="assets/imgs/icons/carrinho.png" alt="icone de novidades"/><p className="p-0 m-0 m-2 d-inline">Carrinho</p><img src="assets/imgs/icons/seta-direita.png" alt="seta para direita"/>
            </h2>
            <div className="d-flex justify-content-center box-cart-price">
                <article id="empty-cart-message" className="box-empyt-cart d-none d-flex flex-column flex-wrap justify-content-center align-items-center p-2 mt-4 mb-4 mr-3 ms-0">
                <h3>Seu carrinho está vazio</h3>
                <a href="index.html" className="btn btn-primary mt-3">Ver produtos</a>
            </article>
                <section id="cart-itens" className="box-galeria-cart container-fluid justify-content-start d-none d-flex flex-wrap flex-column align-items-center">
                </section>
                <article className="box-total-price p-3 ms-3">
                    <h3 className="h5 mb-5">Resumo do Pedido</h3>
                    <div className="d-flex justify-content-between">
                        <p>Subtotal</p>
                        <p id="subtotal-value">R$ 0,00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="mb-0">Frete</p>
                        <p className="mb-0" id="shipping-value">A calcular</p>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between">
                        <p><strong>Total</strong></p>
                        <p id="total-value"><strong>R$ 0,00</strong></p>
                    </div>
                    <div className="d-flex flex-column">
                        <button className="btn btn-primary mb-2" id="checkout-button">Finalizar Compra</button>
                        <a href="index.html" rel="nofollow" target="_self" className="btn btn-secondary">Continuar Comprando</a>
                    </div>
                </article>
            </div>
        </div>
        <Footer />
    </main>
    )
}

export default Carrinho