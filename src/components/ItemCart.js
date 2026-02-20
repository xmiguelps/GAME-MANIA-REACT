function ItemCart({name, src, qty, price, cartItems, index}) {

    function removeItem() {
        cartItems[index] = ''
    }

    return (
        <article className="product-cart d-flex align-items-start p-4 m-2">
            <div className="box-cart d-flex align-items-center justify-content-between w-100">
                <div className="d-flex align-items-center"> 
                    <img className="img-product-cart mx-2" src={src} alt={name}/> 
                <span></span> 
                </div> 
                <div className="d-flex box-cart"> 
                    <div className="d-flex align-items-center box-input"> 
                        <button className="btn c-white btn-plus">+</button> 
                        <input className="qty-input text-end" type="number" min="1" value={qty}/> 
                        <button className="btn c-white btn-minus">-</button> 
                    </div>
                    <div className="d-flex align-items-center w-auto"> 
                        <span className="line-total"><strong>{price * qty}</strong></span> 
                    </div>
                    <div className="d-flex align-items-center ms-2"> 
                        <a className="text-danger remove-item" onClick={removeItem}>Remover</a> 
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ItemCart