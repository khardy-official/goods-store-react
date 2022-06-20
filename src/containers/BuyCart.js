function BuyCart(props) {
    const cart = props.cart;
    return (
            <div className="BuyCart">
                <div><img src={cart.image} alt={cart.title} /></div>
                <h4>{cart.title}</h4>
                <p>Cost: {cart.cost}</p>
                <p><button className="reduce-cart" data-key={cart.articul}>-</button> {props.count} <button className="add-cart" data-key={cart.articul}>+</button></p>
                <p>Total: {cart.cost * props.count}</p>
            </div>
    );
}

export default BuyCart;