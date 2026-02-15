function Favoritos() {
    return (
        <main>
            <div className="d-flex flex-column">
                <h2 className="title-galerias">
                    <img src="assets/imgs/icons/heart.png" alt="icone de novidades"/><p className="p-0 m-0 m-2 d-inline">Favorites</p><img src="assets/imgs/icons/seta-direita.png" alt="seta para direita"/>
                </h2>
                <div className="d-flex justify-content-center box-cart-price">
                    <section className="box-galeria-favorite d-flex w-auto flex-wrap container-fluid justify-content-center align-items-center">
                        <article id="empty-favorite-message" className="box-empyt-favorite d-flex flex-column flex-wrap w-auto align-items-center">
                            <h3 className="h4">Não possui nada em seus favoritos</h3>
                            <a href="index.html" className="btn btn-primary mt-3">Ver produtos</a>
                        </article>
                        <div className="d-flex flex-wrap" id="favorite-itens">
                        </div>
                    </section>
                </div>
            </div>
        </main>        
    )
}

export default Favoritos