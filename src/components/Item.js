function Item(props) {
    return (
        <div className="box-products">
            <h3 className="title-products">{props.name}</h3>
            <img className="products" src={props.src} alt={props.name}/>
            <br/>
            <div className="box-text-products">
                <p className="price">R${props.price}</p>
                <div>
                    <input className="comprar" id="comprar1" type="button" value="Comprar"/>
                    <label className="box-comprar-button" for="comprar"><img className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                    <button className="favoriter-button"><img className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                </div>
            </div>
        </div>
    )
}

export default Item