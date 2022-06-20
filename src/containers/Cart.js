function Cart(props) {
    const cart = props.cart;
    return(
        <div className="Cart">
            <div><img src={cart.image} alt={cart.title} /></div>
            <h4>{cart.title}</h4>
            <p>Cost: {cart.cost}</p>
            <div><button className="add-cart" data-key={cart.articul}>Add to cart</button></div>
        </div>
    );
}

export default Cart;