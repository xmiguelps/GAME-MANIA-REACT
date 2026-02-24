function ItemFav({id, name, src, price, setCount, count, cartItems, setCartItems, notif_cart, favoriteItems, setFavoriteItems, index}) {

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

    function removeItem() {
        let TempArray = [...favoriteItems]
        TempArray.splice(index, 1)
        setFavoriteItems(TempArray)
    }

    return (
        <article class="box-products" id={id}>
                <h3 class="title-products">{name}</h3>
                <img class="products" src={src} alt={name}/>
            <div class="box-text-products">
                <p class="price">{price}</p>
                <div>
                    <input class="comprar" id={"comprar-" + id} type="button" value="Comprar"/>
                    <label class="box-comprar-button" for={"comprar-" + id}><img onClick={AddToCart} class="comprar-button" src="assets/imgs/icons/comprar-button.png" alt="botão de comprar"/></label>
                    <button class="favoriter-button"><img onClick={removeItem} class="remove-favorite" src="assets/imgs/icons/favorite-button-remove.png" alt="botão de favoritar"/></button>
                </div>
            </div>            
        </article>
    )
}

export default ItemFav