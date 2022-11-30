import { add_to_cart } from "../constants";
const initialState = {
    cartData:[]
}

export const CartData = (state = initialState, action) => {
    switch (action.type) {
        case add_to_cart: 
            return {
               ...state,
                cartData: action.data
            }
        default:
            return state;
    }
}