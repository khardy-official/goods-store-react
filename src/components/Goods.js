import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { addKey, reduceKey, deleteKeys } from '../store/slice/goodsSlice';

import Cart from '../containers/Cart';
import BuyCart from '../containers/BuyCart';

function Goods() {
    const stateGoods = state => state.goods.goods;
    const goods = useSelector(stateGoods);

    const keyCart = state => state.goods.keys;
    const keys = useSelector(keyCart);

    const [none, setNone] = useState('none');
    const [total, setTotal] = useState('');
    
    const dispatch = useDispatch();

    function addCart(event) {

        if (event.target.classList.contains('add-cart')) {
            let key = event.target.dataset.key;
            dispatch(addKey(key));

            let sum = +total;
            sum += +goods.filter(item => item.articul === key).map(item => item.cost);
            setTotal(sum);
            setNone('block');
        }
    }

    function reduceCart(event) {
        if (event.target.classList.contains('reduce-cart')) {
            let key = event.target.dataset.key;
            dispatch(reduceKey(key));

            let sum = +total;
            sum -= +goods.filter(item => item.articul === key).map(item => item.cost);
            if (sum === 0) {
                setTotal('');
                setNone('none');
            } else {
                setTotal(sum);
            }
        }
    }

    function deleteAll(event) {
        dispatch(deleteKeys());
        setTotal('');
        setNone('none');
        
    }

    return (
        <div className="Goods" onClick={function (event) { addCart(event); reduceCart(event) }}>
            <div className='cartWrapper'>
                {goods.map(item => <Cart cart={item} key={item.articul} />)}
            </div>
            <h2 style={{ display: none }}>Your shopping cart</h2>
            <button style={{ display: none, margin: "0 auto" }} onClick={deleteAll}>Delete all</button>
            <div className='buyCartWrapper'>
                {goods.filter(item => keys[item.articul])
                    .map(item => <BuyCart cart={item} key={item.articul} count={keys[item.articul]} />)}
            </div>
            <h2>{total}</h2>
            
        </div>
    );
}

export default Goods;