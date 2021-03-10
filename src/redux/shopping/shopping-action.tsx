import * as actionTypes from "./shopping-types";

export const addToCart = (itemID: string) => {
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{
            itemID:itemID
        }
    }
}

export const deleteFromCart = (itemID: string) => {
    return{
        type:actionTypes.DELETE_FROM_CART,
        payload:{
            itemID:itemID
        }
    }
}

export const increaseQnt = (itemID :string, value: number) => {
    return{
        type:actionTypes.INCREASE_QNT,
        payload:{
            itemID:itemID,
            qnt:value
        }
    }
}

export const showDetails = (item: any) => {
return{
        type:actionTypes.SHOW_DETAILS,
        payload:{
            item:item
        }
    }
}
