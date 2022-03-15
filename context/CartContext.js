import { createContext, useReducer } from 'react';
import CartReducer from '../reducer/cartReducer';

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(CartReducer, []);
    // console.log(cartState, 'CartContext')
    return (
        <CartContext.Provider value={{ cartState, dispatchCartAction }}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;