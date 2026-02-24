function Item({name, price, src, count, setCount, cartItems, setCartItems, id, notif_cart, notif_fav, notif_fav2, favoriteItems, setFavoriteItems}) {

    function AddToCart() {
        if (cartItems.some(item => item.id === id)) {
            cartItems.map(item => {
                if (item.id === id) {
                    item.qty += 1
                }
            })
        } else {
            setCount(count + 1)
            setCartItems([...cartItems, {id: id, name: name, price: price, src: src, qty: 1}])
        }
        notif_cart(true)
    }
    
    function AddToFav() {
        if (favoriteItems.some(item => item.id === id)) {
            notif_fav2(true)
        } else {
            setFavoriteItems([...favoriteItems, {id: id, name: name, price: price, src: src}])
            notif_fav(true)
        }
    }

    return (
        <div className="box-products">
            <h3 className="title-products">{name}</h3>
            <img className="products" src={src} alt={name}/>
            <br/>
            <div className="box-text-products">
                <p className="price">R${price}</p>
                <div>
                    <input className="comprar" id={id} type="button" value="Comprar"/>
                    <label className="box-comprar-button" htmlFor={id}><img onClick={AddToCart} className="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                    <button className="favoriter-button"><img onClick={AddToFav} className="favorite-icon" src="assets/imgs/icons/favorite-button.png" alt="botão de favoritar"/></button>
                </div>
            </div>
        </div>
    )
}

export default Item