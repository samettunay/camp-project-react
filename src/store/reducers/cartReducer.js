import { cartItems } from "../initialValues/cartItems";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cartItems: cartItems,
}

export default function cartReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id);
            if (product) {
                product.quantity += 1;
                return {
                    ...state
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, {quantity: 1, product: payload}]
                };
            }
        case REMOVE_FROM_CART:
            let productToRemove = state.cartItems.find(c => c.product.id === payload.id);
            if (productToRemove && productToRemove.quantity > 1) {
                productToRemove.quantity -= 1;
                return {
                    ...state
                };
            }
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.product.id !== payload.id)
            };
        default:
            return state;
    }
}

