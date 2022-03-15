const CartReducer = (cartState = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            // console.log('I am from ADD_TO_CART')
            // console.log(action.payload)
            const ProductExist = cartState.find(item => item.id === action.payload.id);
            if (ProductExist) {
                return cartState.map((item) => item.id === action.payload.id ?
                    { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
            } else {
                return [...cartState, { ...action.payload, quantity: 1 }]
            }
        }
        case 'REMOVE_FROM_CART': {
            return cartState.filter((item) => item.id !== action.payload.id)
        }
        case 'CLEAR_CART': {
            return [];
        }
        case 'CART_UPDATE': {
            // console.log('I am from cart Update');
            // console.log(action)
            return cartState.map((product) => product.id === action.payload.id ?
                { ...product, quantity: action.payload.quantity } : product)
        }
        case 'ADD_TO_CART_FROM_SINGLE_PAGE': {
            // console.log('ADD_TO_CART_FROM_SINGLE_PAGE')
            // console.log(action)
            const ProductExist = cartState.find(item => item.id === action.payload.id);
            if (ProductExist) {
                return cartState.map((item) => item.id === action.payload.id ?
                    { ...ProductExist, quantity: ProductExist.quantity + action.quantity } : item)
            } else {
                return [...cartState, { ...action.payload, quantity: action.quantity }]
            }
        }
        default: {
            return cartState
        }
    }
}
export default CartReducer;