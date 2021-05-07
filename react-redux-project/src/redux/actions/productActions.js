import {ActionTypes} from "../contants/action-types";

export const setProducts = (products)=> {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload:products,
        // SELECTED_PRODUCTS:
        // REMOVE_SELECTED_PRODUCTS:
    }
}

export const selectedProduct = (product)=> {
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload:product,
    }
}
export const removeSelectedProduct = ()=> {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
}


