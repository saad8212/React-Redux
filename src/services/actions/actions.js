import { add_to_cart } from "../constants";
export const addToCart = (data) =>{
    return{
        type:add_to_cart,
        data:data
    }
}